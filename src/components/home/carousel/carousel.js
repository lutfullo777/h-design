import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./carousel.css";
import room1 from "../../../images/room1.jpg";
import room2 from "../../../images/room2.jpg";
import room3 from "../../../images/room3.jpg";

const CarouselMenu = () => {
  return (
    <div className="carousel-container">
      <Carousel className="carousel-1">
        <Carousel.Item
          interval={3000}
          style={{ height: "calc(100vh - 100px)" }}
        >
          <img
            className="d-block w-100"
            width="100%"
            style={{ height: "100vh" }}
            src={room1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Classic And Creative Design</h3>
            <h4>Interior House</h4>
            <p className="carousel-p flex">SEE MORE</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item
          interval={3000}
          style={{ height: "calc(100vh - 100px)" }}
        >
          <img
            className="d-block w-100 "
            style={{ height: "100vh" }}
            src={room2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Modern Architecture Design</h3>
            <h4>Interior Design</h4>
            <p className="carousel-p flex">SEE MORE</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item
          interval={3000}
          style={{ height: "calc(100vh - 100px)" }}
        >
          <img
            className="d-block w-100 h-100"
            style={{ height: "100vh" }}
            src={room3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Modern Interior Design</h3>
            <h4>Interior Rooms</h4>
            <p className="carousel-p flex">SEE MORE</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselMenu;
