import React from "react";
import "./gallery.css";
import $ from "jquery";
import room1 from "../../../images/room1.jpg";
import room2 from "../../../images/room2.jpg";
import room3 from "../../../images/room3.jpg";
import room4 from "../../../images/room4.jpg";
import room5 from "../../../images/room5.jpg";
import room6 from "../../../images/room6.jpg";
import room7 from "../../../images/room7.jpg";
import room8 from "../../../images/room8.jpg";
import room9 from "../../../images/room9.jpg";

const Gallery = () => {
  $(document).ready(() => {
    $(".list").click((e) => {
      const value = e.target.getAttribute("data-filter");
      if (value === "all") {
        $(".itemsBox").show("1000");
      } else {
        $(".itemsBox")
          .not("." + value)
          .hide("1000");
        $(".itemsBox")
          .filter("." + value)
          .show("1000");
      }
      $(e.target).addClass("active").siblings().removeClass("active");
    });
  });
  return (
    <div className="gallery">
      <div data-aos="fade-right">
        <h3 className="theme">GALLERY</h3>
      </div>
      <div className="gallery-container">
        <ul className="filter flex">
          <li className="list active" data-filter="all">
            All
          </li>
          <li className="list" data-filter="modern">
            Modern Gallery
          </li>
          <li className="list" data-filter="iterior">
            Iterior Gallery
          </li>
          <li className="list" data-filter="classic">
            Classic Gallery
          </li>
          <li className="list" data-filter="new">
            New Gallery
          </li>
        </ul>
        <div className="images flex" data-aos="fade-up">
          <div className="itemsBox modern">
            <img src={room1} alt="gallery-1" />
            <div>
              <p>ITERIOR HOUSE</p>
              <span>MORE DETAILS</span>
            </div>
          </div>
          <div className="itemsBox classic">
            <img src={room2} alt="gallery-2" />
            <div>
              <p>ITERIOR HOUSE</p>
              <span>MORE DETAILS</span>
            </div>
          </div>
          <div className="itemsBox iterior">
            <img src={room3} alt="gallery-3" />
            <div>
              <p>ITERIOR HOUSE</p>
              <span>MORE DETAILS</span>
            </div>
          </div>
          <div className="itemsBox iterior">
            <img src={room4} alt="gallery-4" />
            <div>
              <p>ITERIOR HOUSE</p>
              <span>MORE DETAILS</span>
            </div>
          </div>
          <div className="itemsBox new">
            <img src={room5} alt="gallery-5" />
            <div>
              <p>ITERIOR HOUSE</p>
              <span>MORE DETAILS</span>
            </div>
          </div>
          <div className="itemsBox modern">
            <img src={room6} alt="gallery-6" />
            <div>
              <p>ITERIOR HOUSE</p>
              <span>MORE DETAILS</span>
            </div>
          </div>
          <div className="itemsBox modern">
            <img src={room7} alt="gallery-7" />
            <div>
              <p>ITERIOR HOUSE</p>
              <span>MORE DETAILS</span>
            </div>
          </div>
          <div className="itemsBox classic">
            <img src={room8} alt="gallery-8" />
            <div>
              <p>ITERIOR HOUSE</p>
              <span>MORE DETAILS</span>
            </div>
          </div>
          <div className="itemsBox new">
            <img src={room9} alt="gallery-9" />
            <div>
              <p>ITERIOR HOUSE</p>
              <span>MORE DETAILS</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
