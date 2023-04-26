import React, { useRef } from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./homePage";
import { AboutUs } from "./aboutUs";
import { NavBar } from "./navBar";
import logo from "./../assets/images/logo.png";

export const Header = () => {
  const menuRef = useRef(null);
  const handleMenu = () => {
    if (menuRef.current) {
      menuRef.current.classList.toggle("change");
    }
  };
  return (
    <React.Fragment>
      <header id="header">
        <div id="normal-header">
          <a href="#" id="image-link">
            <img src={logo} alt="Logo" id="header-img" />
          </a>
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/aboutUs" element={<AboutUs />} />
          </Routes>
        </div>
        <div id="responsive-header">
          <div id="responsive-logo-button">
            <a href="#" id="image-link" className="logo">
              Urban Production
            </a>
            <div
              id="image-button-black"
              className="container"
              onClick={handleMenu}
              ref={menuRef}
            >
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
            </div>
          </div>

          <div id="responsive-nav-bar">
            <ul>
              <li className="nav-link" id="responsive-home-item">
                <a href="#hero-header" className="responsive-menu-link">
                  Home
                </a>
              </li>
              <li className="nav-link" id="responsive-features-item">
                <a href="#features-container" className="responsive-menu-link">
                  Features
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};
