import React, { useEffect } from "react";
import Page from "../Page/Page";
import "./footer.css";
import { BsFacebook } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import { RiWhatsappFill } from "react-icons/ri";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import Aos from "aos" 
import "aos/dist/aos.css"


const Footer = () => {
  useEffect(()=>{
    Aos.init({duration:1000})
  },[])
  return (
    <div className="footer_section" data-aos="fade-up">
      <Page>
        <div className="footer">
          <ul className="footer-logo">
            <h2>AXILES SHOP</h2>
            <p>
              {" "}
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Nesciunt, dolorum ullam neque non dolorem totam.
            </p>
            <div className="footer-icon">
              <li>
                <BsFacebook className="face" />{" "}
              </li>
              <li>
                <FaInstagramSquare className="insta" />{" "}
              </li>
              <li>
                <RiWhatsappFill className="wp" />{" "}
              </li>
              <li>
                <AiFillTwitterCircle className="twitter" />{" "}
              </li>
            </div>
          </ul>
   
          <ul className="useful-link">
            <h2>Useful Links</h2>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Man Fashion</Link>
            </li>
            <li>
              <Link to="/">Accessories</Link>
            </li>
            <li>
              <Link to="/">Order Tracking</Link>
            </li>
            <li>
              <Link to="/">Wishlist</Link>
            </li>
          </ul>
          <ul className="useful-link-2">
            <li>
              <Link to="/">Cart</Link>
            </li>
            <li>
              <Link to="/">Woman Fashion</Link>
            </li>
            <li>
              <Link to="/">My Account</Link>
            </li>
            <li>
              <Link to="/">OWishlist</Link>
            </li>
            <li>
              <Link to="/">Terms</Link>
            </li>
          </ul>
          <ul className="footer-contact">
            <li>
              <IoLocationSharp /> 622 Dixie Path. South Tobinchester 98336
            </li>
            <li>
              <BsFillTelephoneFill />
              +99452212346
            </li>
            <li>
              <AiOutlineMail /> axiles@gmail.com{" "}
            </li>
            <div className="footer-icon">
              <li>
                <BsFacebook className="face" />{" "}
              </li>
              <li>
                <FaInstagramSquare className="insta" />{" "}
              </li>
              <li>
                <RiWhatsappFill className="wp" />{" "}
              </li>
              <li>
                <AiFillTwitterCircle className="twitter" />{" "}
              </li>
            </div>
          </ul>
        </div>
      </Page>
    </div>
  );
};

export default Footer;
