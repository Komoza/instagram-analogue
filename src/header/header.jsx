import React, { useState } from "react";
import { Authorization } from "../main/authorization/auth";
import { AddPost } from "../main/add-post/add-post";

export const Header = () => {
  const [authIsOpen, setAuthIsOpen] = useState(false);
  const [addPostIsOpen, setAddPostIsOpen] = useState(false);

  const openAuth = () => {
    setAuthIsOpen(true);
  };
  const openAddPost = () => {
    setAddPostIsOpen(true);
  };

  return (
    <div className="header">
      <AddPost
        addPostIsOpen={addPostIsOpen}
        setAddPostIsOpen={setAddPostIsOpen}
      />
      <Authorization authIsOpen={authIsOpen} setAuthIsOpen={setAuthIsOpen} />
      <h1 className="header__logo">instapro</h1>
      {!addPostIsOpen && (
        <img
          className="header__add-post"
          src={
            addPostIsOpen
              ? "./src/assets/image/add-post.svg"
              : "./src/assets/image/add-post.svg"
          }
          alt="add post"
          onClick={openAddPost}
        />
      )}
      <div className="header__profile-wrap">
        {/* <div className="header__profile">Profile</div> */}
        <div onClick={openAuth} className="header__login">
          Login
        </div>
        {/* <img className="header__logout" src="./src/assets/image/logout.svg" alt="logout" /> */}
      </div>
    </div>
  );
};
