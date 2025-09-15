import { LOGO_URL } from "../utils/constants";  
import { Link } from "react-router-dom";

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
          <li> <Link to="/">  Home </Link></li>
          <li> <Link to="/about"> About Us </Link></li>
          <li> <Link to="/contact"> Contact Us </Link> </li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;