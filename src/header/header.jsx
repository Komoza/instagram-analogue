import React, { useState } from "react";
import { Authorization } from "../main/authorization/auth";
import { AddPost } from "../main/add-post/add-post";
import {
  user,
  isAuthorized,
  updateUser,
  goToPage,
} from "../main/main-component";
import { removeUserFromLocalStorage } from "../local-storage";

export const Header = () => {
  const [authIsOpen, setAuthIsOpen] = useState(false);
  const [addPostIsOpen, setAddPostIsOpen] = useState(false);

  const openAuth = () => {
    setAuthIsOpen(true);
  };
  const openAddPost = () => {
    setAddPostIsOpen(true);
  };
  const logout = () => {
    updateUser(null);
    removeUserFromLocalStorage();
  };

  return (
    <div className="header">
      <AddPost
        addPostIsOpen={addPostIsOpen}
        setAddPostIsOpen={setAddPostIsOpen}
      />
      <Authorization authIsOpen={authIsOpen} setAuthIsOpen={setAuthIsOpen} />
      <h1 className="header__logo">instapro</h1>
      {isAuthorized && (
        <img
          className="header__add-post"
          src="./src/assets/image/add-post.svg"
          alt="add post"
          onClick={openAddPost}
        />
      )}
      {isAuthorized ? (
        <div className="header__profile-wrap">
          <div className="header__profile">{user.name}</div>
          <img
            className="header__logout"
            src="./src/assets/image/logout.svg"
            alt="logout"
            onClick={logout}
          />
        </div>
      ) : (
        <div onClick={openAuth} className="header__login">
          Login
        </div>
      )}
    </div>
  );
};
