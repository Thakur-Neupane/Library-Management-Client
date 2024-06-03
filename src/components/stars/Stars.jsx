import React from "react";
import { IoStarSharp } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";

export const Stars = ({ stars = 0 }) => {
  const fs = <IoStarSharp className="text-warning" />;
  const hs = <IoStarSharp className="" />;
  const es = <FaRegStar />;
  const halfStar = !Number.isInteger(stars);
  const maxRating = 5;
  const fullRating = Math.floor(stars);

  const emptyRating = maxRating - fullRating - (halfStar ? 1 : 0);

  if (stars > maxRating) {
    return "Invalid Ratings ";
  }
  const showStars = [];
  for (let i = 0; i < fullRating; i++) {
    // check if i is less than Math.floor(stars)

    showStars.push(fs);
  }
  halfStar && showStars.push(hs);
  if (emptyRating) {
    for (let i = 0; i < fullRating; i++) {
      // check if i is less than Math.floor(stars)

      showStars.push(es);
    }
  }

  return <div className="fs-3">{showStars} 3.5</div>;
};
