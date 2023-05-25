import React, { useState, useEffect } from 'react';
import { Preloader } from '../preloader'
import { getPosts } from "../api"

export const Posts = () => {
    const [posts, setPost] = useState(null);

    useEffect(() => {
        getPosts('').then(data => {
          setPost(data);
        });
      }, []);

      if (!posts) {
        return <Preloader/>;
      }

      const postsComponents = posts.map(post => (
        <img className='posts__image' key={post.id} src={post.imageUrl} alt="" />
      ));

      return postsComponents
}
