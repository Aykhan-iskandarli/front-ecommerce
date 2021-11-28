import React, { useState,useEffect } from "react";
import "./navbar.css";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import Page from "../Page/Page";
import MenuList from "./MenuList";
import { useSelector, useDispatch } from "react-redux";
import { IoMdArrowDropdown } from "react-icons/io";
import { signout } from "../../Redux/Reducers/userActions";
import Aos from "aos" 
import "aos/dist/aos.css"
const Navbar = () => {
  const { userInfo } = useSelector((state) => state.userSignin);

  const { cartItems } = useSelector((state) => state.cart);
  console.log(cartItems);
  const [search, setSearch] = useState(false);
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };

   useEffect(()=>{
    Aos.init({duration:1000})
  },[])
  return (
    <header className="navbar_section" data-aos="fade-down">
      <p className="overlay" onClick={() => setSearch(false)}></p>
      <Page>
        <nav className="navbar">
          <div className="navbar-left">
            <select className="language">
              <option value="EN">EN</option>
              <option value="AZE">AZE</option>
            </select>
            <div className="search-navbar">
              <input
                type="text"
                placeholder="Search"
                className={search ? "active-search " : "navbar-search"}
              />
              <AiOutlineSearch onClick={() => setSearch(!search)} />
            </div>
            <Link to="/" className="brand">
              Shop
            </Link>
          </div>
          <div className="navbar-center">
            <ul className="menu-list">
              <MenuList />
            </ul>
          </div>
          <div className="navbar-right">
            {userInfo ? (
              <div className="userName">
                <div className="name">
                  <Link to="#">
                    {userInfo.name} <IoMdArrowDropdown />
                  </Link>
                </div>
                <div className="signout">
                  <Link to="/" onClick={signoutHandler}>
                    Sign out
                  </Link>
                </div>
              </div>
            ) : (
              <div className="userifno">
                <Link to="/register">Register</Link>
                <Link to="/signin" className="login">
                  Login
                </Link>
              </div>
            )}
            {cartItems.length >= 1 && (
              <div>
                {userInfo && (
                  <Link to={`/cart/`} className="basket">
                    {" "}
                    <AiOutlineShoppingCart />
                    <span className="navbar-badge">
                      {cartItems.length}
                    </span>{" "}
                  </Link>
                )}
              </div>
            )}
          </div>
        </nav>
      </Page>
    </header>
  );
};

export default Navbar;
