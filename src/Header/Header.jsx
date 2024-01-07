import { NavLink, Outlet } from "react-router-dom";
import "./Header.css";
import Footer from "../Footer/Footer";

const Header = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex justify-between  items-center">
        <div className="flex gap-4">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/gallery">Gallery</NavLink>
          <NavLink to="/help">Help</NavLink>
          <NavLink to="/about">About Us</NavLink>
        </div>
        <div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-primary w-full max-w-xs"
          />
        </div>
      </div>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Header;
