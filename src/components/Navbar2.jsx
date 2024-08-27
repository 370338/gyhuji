import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar2.css";

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

const Navbar2 = ({ handleResetGameOfLife }) => {
  const [isOpen, setIsOpen] = useState({
    navbar: false,
    about: false,
    works: false,
    reach: false,
  });

  const navbarRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/gyhuji/") {
      setIsOpen({ navbar: true, about: false, works: false, reach: false });
    } else {
      setIsOpen({ navbar: false, about: false, works: false, reach: false });
    }
  }, [location]);

  const toggleSubnav = (section) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  const toggleNavbar = () => {
    setIsOpen((prevState) => ({
      ...prevState,
      navbar: !prevState.navbar,
    }));
  };

  const handleLogoClick = () => {
    if (isOpen.navbar && location.pathname !== "/gyhuji/") {
      window.location.href = "/gyhuji/";
    } else {
      toggleNavbar();
    }
  };

  const closeNavbar = () => {
    setIsOpen({ navbar: false, about: false, works: false, reach: false });
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        closeNavbar();
      }
    };

    if (isOpen.navbar) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isOpen.navbar]);

  return (
    <div
      ref={navbarRef}
      className={`navbar ${isOpen.navbar ? "expanded" : ""}`}
    >
      <button className="logo-btn" onClick={handleLogoClick}>
        <img src={logo} alt="HOME" />
      </button>

      {isOpen.navbar && (
        <>
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
        </>
      )}
    </div>
  );
};

export default Navbar2;
