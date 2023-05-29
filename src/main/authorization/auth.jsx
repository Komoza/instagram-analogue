import React, { useState, useRef } from "react";
import { saveUserToLocalStorage } from "../../local-storage.js";
import { loginUser, uploadImage, registerUser } from "../api.js";
import { updateUser } from "../main-component.jsx";

export const Authorization = ({ authIsOpen, setAuthIsOpen }) => {
  const [imageAvatar, setImageAvatar] = useState(
    "../src/assets/image/non-avatar.jpg"
  );
  const authRef = useRef(null);
  const blockScreenRef = useRef(null);
  const fileInputRef = useRef(null);

  let loginValue = "";
  let passwordValue = "";
  let nameValue = "";
  let imageValue = "";

  const closeAuth = () => {
    authRef.current.classList.add("slideOutAnimation");
    blockScreenRef.current.classList.add("hideBlockScreenAnimation");
    setTimeout(() => {
      setAuthIsOpen(false);
    }, 500);
  };

  const switchToAuth = () => {
    setIsRegistration(!isRegistration);
  };

  const handleUploadImage = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      uploadImage({ file }).then(({ fileUrl }) => {
        imageValue = fileUrl;
        setImageAvatar(imageValue);
      });
    }
  };

  const handleRigisterUser = () => {
    registerUser({
      login: loginValue,
      password: passwordValue,
      name: nameValue,
      imageValue,
    })
      .then((user) => {
        saveUserToLocalStorage(user.user);
        updateUser();
        closeAuth();
      })
      .catch((error) => {
        console.warn(error);
        setError(error.message);
      });
  };

  const handleLoginUser = () => {
    loginUser({
      login: loginValue,
      password: passwordValue,
    })
      .then((user) => {
        saveUserToLocalStorage(user.user);
        updateUser();
        closeAuth();
      })
      .catch((error) => {
        console.warn(error);
        setError(error.message);
      });
  };

  const [isRegistration, setIsRegistration] = useState(false);
  return (
    authIsOpen && (
      <div className="auth-wrap">
        <div
          onClick={closeAuth}
          ref={blockScreenRef}
          className="block-screen"
        ></div>
        <div ref={authRef} className="auth">
          <img
            onClick={closeAuth}
            className="auth__close"
            src="../src/assets/image/close.svg"
            alt="close"
          />
          {isRegistration && (
            <div className="auth__avatar-wrap">
              <img
                className="auth__avatar-image"
                src={imageAvatar}
                alt="no avatar"
              />
              <button onClick={handleUploadImage} className="auth__avatar-btn">
                <input
                  ref={fileInputRef}
                  type="file"
                  className="file-upload-input"
                  style={{ display: "none" }}
                  onChange={handleFileChange}
                />
                Choose avatar
              </button>
            </div>
          )}
          {isRegistration && (
            <input
              type="text"
              className="auth__name auth__input"
              placeholder="full name"
              onChange={(e) => (nameValue = e.target.value)}
            />
          )}
          <input
            type="text"
            className="auth__login auth__input"
            placeholder="login"
            onChange={(e) => (loginValue = e.target.value)}
          />
          <input
            type="password"
            className="auth__password auth__input"
            placeholder="password"
            onChange={(e) => (passwordValue = e.target.value)}
          />
          <button
            onClick={isRegistration ? handleRigisterUser : handleLoginUser}
            className="auth__button auth__registration"
          >
            {isRegistration ? "Registration" : "Login"}
          </button>
          <p className="auth__switch">
            {isRegistration ? (
              <span>
                Already have an account?{" "}
                <button onClick={switchToAuth} className="auth__switch-button">
                  Login
                </button>
              </span>
            ) : (
              <span>
                Are you haven't an account?{" "}
                <button onClick={switchToAuth} className="auth__switch-button">
                  Registration
                </button>
              </span>
            )}
          </p>
        </div>
      </div>
    )
  );
};
