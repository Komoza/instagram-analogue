import React, { useRef } from "react";

export const Authorization = ({ authIsOpen, setAuthIsOpen }) => {
  const authRef = useRef(null);

  const closeAuth = () => {
    authRef.current.classList.add("slideOutAnimation");
    setTimeout(() => {
      setAuthIsOpen(false);
    }, 500);
  };

  const isRegistration = true;
  return (
    authIsOpen && (
      <div ref={authRef} className="auth">
        <button className="auth__close" onClick={closeAuth}>
          x
        </button>
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
          {isRegistration ? "Registration" : "login"}
        </button>
        <p className="auth__switch">
          {isRegistration ? (
            <span>
              Already have an account?{" "}
              <button className="auth__switch-button">Login</button>
            </span>
          ) : (
            <span>
              Are you haven't an account?{" "}
              <button className="auth__switch-button">Registration</button>
            </span>
          )}
        </p>
      </div>
    )
  );
};
