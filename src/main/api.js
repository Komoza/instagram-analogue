const personalKey = "Komoza-dev";
// const personalKey = "prod";

const baseHost = "https://webdev-hw-api.vercel.app";
const postsHost = `${baseHost}/api/v1/${personalKey}/instapro`;

export function getPosts({ token }) {
    return fetch(postsHost, {
      method: "GET",
      headers: {
        Authorization: token,
      },
    })
      .then((response) => {
        if (response.status === 401) {
          throw new Error("Нет авторизации");
        }
  
        return response.json();
      })
      .then((data) => {
        return data.posts;
      });
  }