import React, { useState } from "react";
import { Posts } from "./posts/posts-page";
import { getUserFromLocalStorage } from "../local-storage.js";

// UserProfile / PostPage 
// const [CURR_PAGE, setCURR_PAGE] = useState(Posts)


export let user = getUserFromLocalStorage();
export let isAuthorized = user ? true : false;
export let CURR_PAGE = <Posts/>
// export let isAuthorized = false;

export const goToPage = page => {
  CURR_PAGE = page;
}
export const updateUser = () => {
  user = getUserFromLocalStorage(); 
  isAuthorized = user ? true : false;
}
export const Main = () => {
  return (
    CURR_PAGE
  );
};
