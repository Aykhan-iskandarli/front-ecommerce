import React from "react";
import "./rate.css";
import { AiTwotoneStar } from "react-icons/ai";
import { ImStarHalf } from "react-icons/im";
import { FiStar } from "react-icons/fi";

const Rating = ({className, rating, numReviews, caption }) => {
  return (
    <div className={`rating ${className}`}>
      <div>
      <span>
        {rating >= 1 ? (
          <AiTwotoneStar />
        ) : rating >= 0.5 ? (
          <ImStarHalf />
        ) : (
          <FiStar />
        )}
      </span>
      <span>
        {rating >= 2 ? (
          <AiTwotoneStar />
        ) : rating >= 1.5 ? (
          <ImStarHalf />
        ) : (
          <FiStar />
        )}
      </span>
      <span>
        {rating >= 3 ? (
          <AiTwotoneStar />
        ) : rating >= 2.5 ? (
          <ImStarHalf />
        ) : (
          <FiStar />
        )}
      </span>
      <span>
        {rating >= 4 ? (
          <AiTwotoneStar />
        ) : rating >= 3.5 ? (
          <ImStarHalf />
        ) : (
          <FiStar />
        )}
      </span>
      <span>
        {rating >= 5 ? (
          <AiTwotoneStar />
        ) : rating >= 4.5 ? (
          <ImStarHalf />
        ) : (
          <FiStar />
        )}
      </span>
      </div>
      {caption ? (
        <span>{caption}</span>
      ) : (
        <span className="reviews">{numReviews + " reviews"}</span>
      )}
    </div>
  );
};

export default Rating;
