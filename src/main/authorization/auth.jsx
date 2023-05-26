export const Authorization = () => {
  const isRegistration = true;
  return (
    <div className="auth">
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
  );
};
