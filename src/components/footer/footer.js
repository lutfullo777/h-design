import React from "react";
import "./footer.css";
import { FaSearch } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="flex footer-container">
        <div className="flex">
          <ul className="flex">
            <li>TERMS</li>
            <li>CONTRACT</li>
            <li>FAQ</li>
          </ul>
          <ul className="flex">
            <li style={{ color: "rgb(255, 123, 71)" }}>ENG</li>
            <li>RU</li>
            <li>UZ</li>
          </ul>
        </div>
        <div className="flex">
          <div className="search flex" style={{ margin: "0" }}>
            <input type="text" placeholder="Search..." />
            <FaSearch className="search-icon" />
          </div>
        </div>
      </div>
      <hr />
      <div
        style={{
          textAlign: "center",
          marginTop: "25px",
          fontSize: "14px",
          fontWeight: "bolder",
          letterSpacing: "2px",
        }}
      >
        {new Date().getFullYear()}&copy;H-DESIGN All RIGHT RESERVED
        <p className="developer">
          <a
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none", color: "white" }}
            href="https://t.me/uztiger777"
          >
            MUNAVAROV LUTFULLO
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
