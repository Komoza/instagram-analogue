import React, { useRef } from "react";

export const AddPost = ({ addPostIsOpen, setAddPostIsOpen }) => {
  const blockScreenRef = useRef(null);
  const addPostRef = useRef(null);
  const closeAddPost = () => {
    addPostRef.current.classList.add("hideAddPost");
    blockScreenRef.current.classList.add("hideBlockScreenAnimation");
    setTimeout(() => {
      setAddPostIsOpen(false);
    }, 500);
  };
  return (
    addPostIsOpen && (
      <div ref={addPostRef} className="add-post">
        <div
          onClick={closeAddPost}
          ref={blockScreenRef}
          className="block-screen"
        ></div>
        <div className="add-post__container">
          <div className="add-post__wrap">
            <img
              onClick={closeAddPost}
              className="add-post__close"
              src="./src/assets/image/close.svg"
              alt="close"
            />
            <button className="add-post__button-choose-photo">
              Choose photo
            </button>
            <textarea
              className="add-post__description"
              name=""
              id=""
              placeholder="Describe the photo..."
            ></textarea>
            <button className="add-post__button-add">Post</button>
          </div>
        </div>
      </div>
    )
  );
};
