import React, { useState, useRef } from "react";
import {
  getUserFromLocalStorage,
  removeUserFromLocalStorage,
  saveUserToLocalStorage,
} from "../../helpers.js";
import { loginUser } from "../api.js";

export let user = getUserFromLocalStorage();

export const Authorization = ({ authIsOpen, setAuthIsOpen }) => {
  const authRef = useRef(null);
  const blockScreenRef = useRef(null);
  const [loginValue, setLoginValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

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

  const handleRigisterUser = () => {
    console.log("register");
  };

  const handleLoginUser = () => {
    loginUser({
      login: loginValue,
      password: passwordValue,
    })
      .then((user) => {
        saveUserToLocalStorage(user.user);
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
            <input
              type="text"
              className="auth__name auth__input"
              placeholder="full name"
            />
          )}
          <input
            type="text"
            className="auth__login auth__input"
            placeholder="login"
            onChange={(e) => setLoginValue(e.target.value)}
          />
          <input
            type="password"
            className="auth__password auth__input"
            placeholder="password"
            onChange={(e) => setPasswordValue(e.target.value)}
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
