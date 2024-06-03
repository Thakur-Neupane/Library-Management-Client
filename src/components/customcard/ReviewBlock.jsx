import React from "react";
import { Stars } from "../stars/Stars";

export const ReviewBlock = () => {
  return (
    <div>
      <div className="d-flex gap-2 align-items-center">
        <div
          className="bg-primary rounded-pill d-flex justify-content-center align-items-baseline mb-2  fw-bolder text-white p-1"
          style={{
            width: "40px",
            height: "40px",
          }}
        ></div>
      </div>
      <div>
        Avatar and name
        <div>
          <div className="d-flex gap-2">
            <Stars />
            <h4>Lorem ipsum dolor sit amet.</h4>
          </div>
        </div>
      </div>
      <div> Date: 20-20-2020 </div>
      <div className="mt-2">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit totam
        voluptate numquam minus, alias explicabo?
      </div>
      d
    </div>
  );
};
