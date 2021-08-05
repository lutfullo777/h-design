import React from "react";
import "./projects.css";
import room1 from "../../../images/room1.jpg";
import room2 from "../../../images/room2.jpg";
import room3 from "../../../images/room3.jpg";
const Projects = () => {
  return (
    <div className="projects ">
      <div data-aos="fade-right" style={{ marginBottom: "20px" }}>
        <h2 className="theme">OUR PROJECTS</h2>
      </div>
      <div className="flex project-div">
        <div data-aos="fade-up" data-aos-delay="100">
          <figure>
            <img src={room1} alt="project1" />
          </figure>
          <h3>Iterior Design</h3>
          <span className="flex">See Project</span>
        </div>
        <div data-aos="fade-up" data-aos-delay="200">
          <figure>
            <img src={room2} alt="project2" />
          </figure>
          <h3>Classic Design</h3>
          <span className="flex">See Project</span>
        </div>
        <div data-aos="fade-up" data-aos-delay="300">
          <figure>
            <img src={room3} alt="project3" />
          </figure>
          <h3>Modern Design</h3>
          <span className="flex">See Project</span>
        </div>
      </div>
    </div>
  );
};

export default Projects;
