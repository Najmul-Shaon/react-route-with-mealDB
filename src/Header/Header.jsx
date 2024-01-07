import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/products">Products</NavLink>
      <NavLink to="/gallery">Gallery</NavLink>
      <NavLink to="/help">Help</NavLink>
      <NavLink to="/about">About Us</NavLink>
    </div>
  );
};

export default Header;
