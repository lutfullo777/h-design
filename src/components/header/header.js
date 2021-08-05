import React, { useState } from "react";
import "./header.css";
import {
  FaBars,
  FaTimes,
  FaSearch,
  FaTelegram,
  FaInstagram,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";

const Header = () => {
  const [menu, setMenu] = useState(true);

  window.addEventListener("click", (e) => {
    if (e.target.className === "open-menu") {
      setMenu(true);
    }
  });

  const onClick = (e) => {
    if (e.target.classList[0] === "body-link") {
      e.target.classList.toggle("body-link-active");
    }
  };

  return (
    <div className="container1 flex header-container">
      <div className="header flex">
        <div className="header-logo flex">
          <h3>
            <a href="h-design1.netlify.app">H-design</a>
          </h3>
        </div>
        <div className="header-menu flex">
          <div className="menu-nav flex ">
            <ul className="flex">
              <li className="horizontal-line"></li>
              <li>
                <span></span>
                CALL US: <span> +998 90 123 45 678</span>
              </li>
              <li className="horizontal-line"></li>
              <li>
                EMAIL: <span>H-DESIGN@DOMAIN.COM</span>
              </li>
            </ul>
          </div>
          <div style={{ marginLeft: "20px" }} className="flex">
            <button
              className="flex"
              onClick={() => {
                setMenu(!menu);
              }}
            >
              {menu ? <FaBars /> : <FaTimes />}
            </button>
          </div>
        </div>
      </div>
      <div className={menu ? "menu" : "open-menu"}>
        <div className={menu ? "menu-items " : "menu-items-open "}>
          <div className="links">
            <div className="search flex">
              <input type="text" placeholder="Search..." />
              <FaSearch className="search-icon" />
            </div>
            <div className="links-items">
              <div>
                <ul className="head-link">
                  <li className="body-link" onClick={onClick}>
                    HOME
                    <ul>
                      <li>index</li>

                      <li>home</li>

                      <li>home1</li>

                      <li>index-1</li>

                      <li>home2</li>
                    </ul>
                  </li>
                  <li className="body-link" onClick={onClick}>
                    PAGES
                    <ul>
                      <li>page1</li>
                      <li>page2</li>
                      <li>page3</li>
                      <li>page4</li>
                      <li>page5</li>
                    </ul>
                  </li>
                  <li className="body-link" onClick={onClick}>
                    GALLERY
                    <ul>
                      <li>gallery1</li>
                      <li>gallery2</li>
                      <li>gallery3</li>
                      <li>gallery4</li>
                      <li>gallery5</li>
                    </ul>
                  </li>
                  <li className="body-link" onClick={onClick}>
                    BLOG
                    <ul>
                      <li>blog1</li>
                      <li>blog2</li>
                      <li>blog3</li>
                      <li>blog4</li>
                      <li>blog5</li>
                    </ul>
                  </li>
                  <li className="body-link">CONTACT</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="menu-footer flex">
            <ul className="flex">
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
    </div>
  );
};

export default Header;
