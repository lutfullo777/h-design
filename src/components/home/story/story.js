import React from "react";
import "./story.css";
import { Carousel } from "react-bootstrap";
import room1 from "../../../images/room1.jpg";
import room2 from "../../../images/room2.jpg";
import room3 from "../../../images/room3.jpg";

const Story = () => {
  return (
    <div
      style={{
        width: "90%",
        margin: "auto",
        padding: "30px 0",
        minHeight: "200px",
      }}
      className="flex story"
    >
      <div
        className="text"
        data-aos="fade-up"
        // data-aos-offset="300"
        data-aos-duration="1000"
        data-aos-easing="ease-in-sine"
      >
        <h2 className="theme">OUR COMPANY STORY</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
          exercitationem ut quisquam nisi quidem esse quasi eligendi
          consequuntur laboriosam numquam impedit officiis delectus, velit eum
          excepturi error nam nostrum eius sit dolore, tempora ea quos. Aut
          officiis dignissimos maxime quia?
        </p>
        <div className="flex" style={{ width: "100%", justifyContent: "left" }}>
          <div
            style={{
              fontSize: "90px",
              borderBottom: "5px solid white",
              display: "inline-block",
              lineHeight: "50px",
              paddingBottom: "18px",
              marginRight: "15px",
            }}
          >
            8
          </div>
          <div style={{ fontSize: "20px" }}>
            Year <br />
            Experience <br />
            Working
          </div>
        </div>
      </div>

      <div
        className="carousel-container carousel2"
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <Carousel className="carousel-1">
          <Carousel.Item interval="10000" style={{ height: "300px" }}>
            <img
              className="d-block w-100"
              width="100%"
              style={{ height: "300px" }}
              src={room1}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Classic And Creative Design</h3>
              <h4>Interior House</h4>
              <p className="carousel-p flex">SEE MORE</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval="10000" style={{ height: "300px" }}>
            <img
              className="d-block w-100 "
              style={{ height: "300px" }}
              src={room2}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Modern Architecture Design</h3>
              <h4>Interior Design</h4>
              <p className="carousel-p flex">SEE MORE</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval="10000" style={{ height: "300px" }}>
            <img
              className="d-block w-100 h-100"
              style={{ height: "300px" }}
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
    </div>
  );
};

export default Story;
