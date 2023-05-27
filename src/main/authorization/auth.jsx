import React, { useState, useRef } from "react";

export const Authorization = ({ authIsOpen, setAuthIsOpen }) => {
  const authRef = useRef(null);
  const blockScreenRef = useRef(null);

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
          />
          <input
            type="password"
            className="auth__password auth__input"
            placeholder="password"
          />
          <button className="auth__button auth__registration">
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
