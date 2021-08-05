import React from "react";
import "./team.css";
import team1 from "../../../images/team1.jpg";
import team2 from "../../../images/team2.jpg";
import team3 from "../../../images/team3.jpg";
import team4 from "../../../images/team4.jpg";
import { FaTelegram, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

const Team = () => {
  return (
    <div className="team">
      <div data-aos="fade-right" className="team-theme">
        <h2 className="theme">OUR TEAM</h2>
      </div>
      <div className="team-container flex">
        <div className="team-item" data-aos="fade-up">
          <figure>
            <img src={team4} alt="director" />
          </figure>
          <div>John Smith</div>
          <h3>Team Leader</h3>

          <ul className="flex team-contact">
            <li>
              <FaTelegram />
            </li>
            <li>
              <FaInstagram />
            </li>
            <li>
              <FaTwitter />
            </li>
            <li>
              <FaFacebook />
            </li>
          </ul>
        </div>
        <div className="team-item" data-aos="fade-up" data-aos-delay="200">
          <figure>
            <img src={team2} alt="meneger" />
          </figure>
          <div>Sophia Watson</div>
          <h3>Meneger</h3>
          <ul className="flex team-contact">
            <li>
              <FaTelegram />
            </li>
            <li>
              <FaInstagram />
            </li>
            <li>
              <FaTwitter />
            </li>
            <li>
              <FaFacebook />
            </li>
          </ul>
        </div>
        <div className="team-item" data-aos="fade-up" data-aos-delay="400">
          <figure>
            <img src={team3} alt="designer" />
          </figure>
          <div> Henry Clarkson</div>
          <h3>Designer</h3>
          <ul className="flex team-contact">
            <li>
              <FaTelegram />
            </li>
            <li>
              <FaInstagram />
            </li>
            <li>
              <FaTwitter />
            </li>
            <li>
              <FaFacebook />
            </li>
          </ul>
        </div>
        <div className="team-item" data-aos="fade-up" data-aos-delay="600">
          <figure>
            <img src={team1} alt="consultant" />
          </figure>
          <div>Isabella Parker</div>
          <h3>Consultant</h3>
          <ul className="flex team-contact">
            <li>
              <FaTelegram />
            </li>
            <li>
              <FaInstagram />
            </li>
            <li>
              <FaTwitter />
            </li>
            <li>
              <FaFacebook />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Team;
