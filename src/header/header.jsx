export const Header = () => (
  <div className="header">
    <h1 className="header__logo">instapro</h1>
    <img className="header__add-post" src="./src/assets/image/add-post.svg" alt="add post" />
    <div className="header__profile-wrap">
      {/* <div className="header__profile">Profile</div> */}
      <div className="header__login">Login</div>
      {/* <img className="header__logout" src="./src/assets/image/logout.svg" alt="logout" /> */}
    </div>
  </div>
);
