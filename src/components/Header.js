import { LOGO_URL } from "../utils/constants";  

const HeaderComponent = () => {
  return (
    <div className="header">
      <div className="logo">
        <img
          className="img"
          src={LOGO_URL}
        />
        <h3 className="brand-name"> Lets Eat</h3>
      </div>
      <div className="nav">
        <ul className="nav-items">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;