import React from "react";
import "./slider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { sliderItems } from "../../data";
import { Link } from "react-router-dom";

const Sliders = () => {

  var settings = {
    dots: true,
    autoplay:true,
    fade:true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings} className="slider">
      {sliderItems.map((slider) => (
        <div key={slider.id} className="row">
          <div className="slider-img ">
            <div className="col-6">
              <img key={slider.id} src={slider.img} alt="" />
            </div>
          </div>
          <div className="col-6 d-flex">
            <div className="slider-content ">
              <div className="slider-title ">
                <h1>{slider.title}</h1>
              </div>
              <div className="slider-desc d-flex">
                <p>{slider.desc}</p>
              </div>
              <div className="slider-button">
            <Link to="/product">  <button className=" btn slider-btn">Shop now</button></Link>
            </div>
            </div>
          
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Sliders;
