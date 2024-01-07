import { NavLink, Outlet, useNavigation } from "react-router-dom";
import "./Header.css";
import Footer from "../Footer/Footer";

const Header = () => {
  const navigation = useNavigation();
  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex justify-between  items-center">
        <div className="flex md:flex-row flex-col gap-4 items-center">
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
      {navigation.state === "loading" ? (
        <p className="text-center my-32">
          <span className="loading loading-bars loading-lg"></span>
        </p>
      ) : (
        <Outlet></Outlet>
      )}

      <Footer></Footer>
    </div>
  );
};

export default Header;
