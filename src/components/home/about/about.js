import React from "react";
import "./about.css";
import room1 from "../../../images/room1.jpg";

const About = () => {
  return (
    <div className="about">
      <div>
        <h2 className="theme" style={{ marginLeft: "5%" }}>
          ABOUT US
        </h2>
      </div>
      <div className="about-div flex">
        <div data-aos="fade-right">
          <img src={room1} alt="about1" />
        </div>
        <div className="flex" data-aos="fade-up">
          <div>
            <h2 className="theme">ITERIOR DESIGN</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae maxime, saepe itaque tenetur eum harum ea architecto
              quidem rem fuga. Eaque at dignissimos possimus iusto voluptatem
              quod veritatis officiis quo doloribus amet, suscipit ut, itaque
              ipsum obcaecati voluptatum distinctio nisi, quaerat deleniti nam
              optio? Dolores ducimus maiores unde illo quibusdam.
            </p>
          </div>
        </div>
      </div>
      <div className="about-div flex">
        <div className="flex" data-aos="fade-up">
          <div>
            <h2 className="theme">ARCHITECTURE DESIGN</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae maxime, saepe itaque tenetur eum harum ea architecto
              quidem rem fuga. Eaque at dignissimos possimus iusto voluptatem
              quod veritatis officiis quo doloribus amet, suscipit ut, itaque
              ipsum obcaecati voluptatum distinctio nisi, quaerat deleniti nam
              optio? Dolores ducimus maiores unde illo quibusdam.
            </p>
          </div>
        </div>
        <div data-aos="fade-right">
          <img src={room1} alt="about1" />
        </div>
      </div>
    </div>
  );
};

export default About;
