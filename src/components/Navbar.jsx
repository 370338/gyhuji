import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

import logo from "/images/labels/BEEDLE5x5wb.png";

import aboutImg from "/images/labels/ABOUT2.png";
import owenAboutImg from "/images/labels/OWEN3x5_2.png";
import resumeAboutImg from "/images/labels/RESUME3x5_2.png";

import worksImg from "/images/labels/WORKS2.png";
import artWorksImg from "/images/labels/ART3x5_2.png";
import designWorksImg from "/images/labels/DESIGN3x5_2.png";
import writingWorksImg from "/images/labels/WRITING3x5_2.png";

import reachImg from "/images/labels/REACH2.png";
import emailReachImg from "/images/labels/EMAIL3x5_2.png";
import linkedinReachImg from "/images/labels/LINKEDIN3x5_2.png";
import twitterReachImg from "/images/labels/TWITTER3x5_2.png";

//const Navbar = () => {
//function Navbar({ handleResetGameOfLife }) {
const Navbar = ({ handleResetGameOfLife }) => {
  const [isOpen, setIsOpen] = useState({
    about: false,
    works: false,
    reach: false,
  });

  const toggleSubnav = (section) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  const closeNavbar = () => {
    setIsOpen({
      about: false,
      works: false,
      reach: false,
    });
  };

  return (
    <div className="navbar">
      {/* BEEDLE */}
      <button
        className="logo-btn"
        onClick={() => {
          handleResetGameOfLife();
          closeNavbar();
        }}
      >
        <Link to="/gyhuji/">
          <img src={logo} alt="HOME" />
        </Link>
      </button>

      {/* ABOUT */}
      <button className="nav-btn" onClick={() => toggleSubnav("about")}>
        <img src={aboutImg} alt="ABOUT" />
      </button>
      <div className={`subnav ${isOpen.about ? "active" : ""}`}>
        <button className="subnav-btn" onClick={closeNavbar}>
          <Link to="/gyhuji/about/owen">
            <img src={owenAboutImg} alt="OWEN" />
          </Link>
        </button>

        <button className="subnav-btn" onClick={closeNavbar}>
          <a href="./images/The_OwenBeedle_Resume.pdf" target="_blank">
            <img src={resumeAboutImg} alt="RESUME" />
          </a>
        </button>
      </div>

      {/* WORKS */}
      <button className="nav-btn" onClick={() => toggleSubnav("works")}>
        <img src={worksImg} alt="WORKS" />
      </button>
      <div className={`subnav ${isOpen.works ? "active" : ""}`}>
        <button className="subnav-btn" onClick={closeNavbar}>
          <Link to="/gyhuji/works/art">
            <img src={artWorksImg} alt="ART" />
          </Link>
        </button>

        <button className="subnav-btn" onClick={closeNavbar}>
          <Link to="/gyhuji/works/design">
            <img src={designWorksImg} alt="DESIGN" />
          </Link>
        </button>

        <button className="subnav-btn" onClick={closeNavbar}>
          <a href="https://medium.com/@beedleowen">
            <img src={writingWorksImg} alt="WRITING" />
          </a>
        </button>
      </div>

      {/* REACH */}
      <button className="nav-btn" onClick={() => toggleSubnav("reach")}>
        <img src={reachImg} alt="REACH" />
      </button>
      <div className={`subnav ${isOpen.reach ? "active" : ""}`}>
        <button className="subnav-btn" onClick={closeNavbar}>
          <a href="mailto:beedleowen@gmail.com">
            <img src={emailReachImg} alt="EMAIL" />
          </a>
        </button>

        <button className="subnav-btn" onClick={closeNavbar}>
          <a href="https://www.linkedin.com/in/owen-beedle/">
            <img src={linkedinReachImg} alt="LINKEDIN" />
          </a>
        </button>

        <button className="subnav-btn" onClick={closeNavbar}>
          <a href="https://twitter.com/owenbeedle">
            <img src={twitterReachImg} alt="TWITTER" />
          </a>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
