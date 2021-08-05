import React from "react";
import "./start.css";

const Start = () => {
  return (
    <div className="width-height start">
      <div className="image1 width-height flex">
        <div className="background1">
          <h1
            style={{
              padding: "5px 10px",
              margin: "0",
              border: "2px white solid",
            }}
          >
            H-DESIGN
          </h1>
          <h3>ROOMS DESIGN</h3>
        </div>
      </div>
      <div className="image2 width-height flex">
        <div className="background2">
          <h1>WE BUILD </h1>
          <h3>YOUR DREAM</h3>
        </div>
      </div>
      <div className="image3 width-height flex">
        <div className="background3">
          <h1>AN IDEAL DESIGN</h1>
          <h3>OF LUXERY RESIDENCE</h3>
        </div>
      </div>
      <div className="image4 width-height flex">
        <div className="background4">
          <h1>DIFFERENT ROOMS</h1>
          <h3>FOR YOUR LIFE</h3>
        </div>
      </div>
      <div className="image5 width-height flex">
        <div className="background4">
          <h1>COMFORTABLE KITCHEN</h1>
          <h3>AS YOU WOULD EXPECT</h3>
        </div>
      </div>
      <div className="image6 width-height flex">
        <div className="background4">
          <h1>THE BATHROOM</h1>
          <h3>OF YOUR DREAMS</h3>
        </div>
      </div>
    </div>
  );
};

export default Start;
