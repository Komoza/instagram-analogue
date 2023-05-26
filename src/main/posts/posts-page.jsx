import React, { useState, useEffect } from "react";
import { Preloader } from "../preloader";
import { getPosts } from "../api";
import { formatDistanceToNow } from "date-fns";

const getPostLikesText = (likes) => {
  switch (likes.length) {
    case 0:
      return 0;
    case 1:
      return likes[0]?.name;
    case 2:
      return `${likes[0]?.name} and ${likes[1]?.name}`;
    default:
      return `${likes[0]?.name}, ${likes[1]?.name}, and ${likes.length - 2} ${
        likes.length - 2 === 1 ? "person" : "people"
      }`;
  }
};

export const Posts = () => {
  const [posts, setPost] = useState(null);

  useEffect(() => {
    getPosts("").then((data) => {
      setPost(data);
    });
  }, []);

  if (!posts) {
    return <Preloader />;
  }
  const postsComponents = (
    <div className="posts">
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <div className="post__header" data-user-id={post.user.id}>
            <img className="post__user-image" src={post.user.imageUrl} alt="" />
            <p>{post.user.name}</p>
          </div>
          <img
            className="post__image"
            key={post.id}
            src={post.imageUrl}
            alt=""
          />
          <div className="post__likes-wrap">
            <img
              className="post__like-btn"
              src={
                post.isLiked
                  ? "./src/assets/image/like-active.svg"
                  : "./src/assets/image/like-not-active.svg"
              }
              alt="like active"
            />
            <p className="post__likes-text">
              Likes: <strong>{getPostLikesText(post.likes)}</strong>
            </p>
          </div>
          <div className="post__description">
            <div className="post__description-user">
              <strong>{post.user.name}</strong>
            </div>
            <div className="post__description-text">{post.description}</div>
          </div>
          <div className="post__time">
            {formatDistanceToNow(new Date(post.createdAt))}
          </div>
        </div>
      ))}
    </div>
  );

  return postsComponents;
};
