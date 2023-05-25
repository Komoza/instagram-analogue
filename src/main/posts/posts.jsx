import React, { useState, useEffect } from "react";
import { Preloader } from "../preloader";
import { getPosts } from "../api";

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
            <p>like</p>
            <p className="post__likes-text">
              Likes: <strong>{post.likes.length}</strong>
            </p>
          </div>
          <div className="post__description">
            <div className="post__description-user">
              <strong>{post.user.name}</strong>
            </div>
            <div className="post__description-text">{post.description}</div>
          </div>
        </div>
      ))}
    </div>
  );

  return postsComponents;
};
