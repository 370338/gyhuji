/*
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "/images/labels/BEEDLE5x5wb.png";
import aboutImg from "/images/labels/ABOUT.png";
import worksImg from "/images/labels/WORKS5x5w4.png";
import reachImg from "/images/labels/REACH5x5w.png";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleSubnav = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  const resetNavbar = () => {
    setActiveMenu(null);
  };

  return (
    <div className="navbar">
      <button className="logo-btn">
        <Link to="/" onClick={resetNavbar}>
          <img src={logo} alt="HOME" />
        </Link>
      </button>

      <button className="nav-btn" onClick={() => toggleSubnav("about")}>
        <img src={aboutImg} alt="ABOUT" />
      </button>
      <div className={`subnav ${activeMenu === "about" ? "active" : ""}`}>
        <button className="subnav-btn">
          <Link to="/about/owen">
            <img src="/images/labels/OWEN3x5.png" alt="ME" />
          </Link>
        </button>
        <button className="subnav-btn">
          <a href="/images/The_OwenBeedle_Resume.pdf" target="_blank">
            <img src="/images/labels/RESUME3x5w.png" alt="RESUME" />
          </a>
        </button>
      </div>

      <button className="nav-btn" onClick={() => toggleSubnav("works")}>
        <img src={worksImg} alt="WORKS" />
      </button>
      <div className={`subnav ${activeMenu === "works" ? "active" : ""}`}>
        <button className="subnav-btn">
          <Link to="/works/art">
            <img src="/images/labels/ART3x5w.png" alt="ART" />
          </Link>
        </button>
        <button className="subnav-btn">
          <Link to="works/design">
            <img src="/images/labels/DESIGN3x5w.png" alt="DESIGN" />
          </Link>
        </button>
        <button className="subnav-btn">
          <a href="https://medium.com/@beedleowen">
            <img src="/images/labels/WRITING3x5w1.png" alt="WRITING" />
          </a>
        </button>
      </div>

      <button className="nav-btn" onClick={() => toggleSubnav("reach")}>
        <img src={reachImg} alt="REACH" />
      </button>
      <div className={`subnav ${activeMenu === "reach" ? "active" : ""}`}>
        <button className="subnav-btn">
          <a href="mailto:beedleowen@gmail.com">
            <img src="/images/labels/EMAIL3x5w.png" alt="EMAIL" />
          </a>
        </button>
        <button className="subnav-btn">
          <a href="https://www.linkedin.com/in/owen-beedle/">
            <img src="/images/labels/LINKEDIN3x5w.png" alt="LINKEDIN" />
          </a>
        </button>
        <button className="subnav-btn">
          <a href="https://twitter.com/owenbeedle">
            <img src="/images/labels/TWITTER3x5EX2.png" alt="TWITTER" />
          </a>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
*/

/*
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "/images/labels/BEEDLE5x5wb.png";
import aboutImg from "/images/labels/ABOUT2.png";
import worksImg from "/images/labels/WORKS2.png";
import reachImg from "/images/labels/REACH2.png";

const Navbar = () => {
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
      <button className="logo-btn" onClick={closeNavbar}>
        <Link to="/">
          <img src={logo} alt="HOME" />
        </Link>
      </button>

      <button className="nav-btn" onClick={() => toggleSubnav("about")}>
        <img src={aboutImg} alt="ABOUT" />
      </button>
      <div className={`subnav ${isOpen.about ? "active" : ""}`}>
        <button className="subnav-btn" onClick={closeNavbar}>
          <Link to="/about/owen">
            <img src="/images/labels/OWEN3x5_2.png" alt="ME" />
          </Link>
        </button>
        <button className="subnav-btn" onClick={closeNavbar}>
          <a href="/images/The_OwenBeedle_Resume.pdf" target="_blank">
            <img src="/images/labels/RESUME3x5_2.png" alt="RESUME" />
          </a>
        </button>
      </div>

      <button className="nav-btn" onClick={() => toggleSubnav("works")}>
        <img src={worksImg} alt="WORKS" />
      </button>
      <div className={`subnav ${isOpen.works ? "active" : ""}`}>
        <button className="subnav-btn" onClick={closeNavbar}>
          <Link to="/works/art">
            <img src="/images/labels/ART3x5_2.png" alt="ART" />
          </Link>
        </button>
        <button className="subnav-btn" onClick={closeNavbar}>
          <Link to="/works/design">
            <img src="/images/labels/DESIGN3x5_2.png" alt="DESIGN" />
          </Link>
        </button>
        <button className="subnav-btn" onClick={closeNavbar}>
          <a href="https://medium.com/@beedleowen">
            <img src="/images/labels/WRITING3x5_2.png" alt="WRITING" />
          </a>
        </button>
      </div>

      <button className="nav-btn" onClick={() => toggleSubnav("reach")}>
        <img src={reachImg} alt="REACH" />
      </button>
      <div className={`subnav ${isOpen.reach ? "active" : ""}`}>
        <button className="subnav-btn" onClick={closeNavbar}>
          <a href="mailto:beedleowen@gmail.com">
            <img src="/images/labels/EMAIL3x5w.png" alt="EMAIL" />
          </a>
        </button>
        <button className="subnav-btn" onClick={closeNavbar}>
          <a href="https://www.linkedin.com/in/owen-beedle-501649224/">
            <img src="/images/labels/LINKEDIN3x5w.png" alt="LINKEDIN" />
          </a>
        </button>
        <button className="subnav-btn" onClick={closeNavbar}>
          <a href="https://twitter.com/owenbeedle">
            <img src="/images/labels/TWITTER3x5EX2.png" alt="TWITTER" />
          </a>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
*/

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "/images/labels/BEEDLE5x5wb.png";
import aboutImg from "/images/labels/ABOUT2.png";
import worksImg from "/images/labels/WORKS2.png";
import reachImg from "/images/labels/REACH2.png";

const Navbar = () => {
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
      <button className="logo-btn" onClick={closeNavbar}>
        <Link to="/">
          <img src={logo} alt="HOME" />
        </Link>
      </button>

      <button className="nav-btn" onClick={() => toggleSubnav("about")}>
        <img src={aboutImg} alt="ABOUT" />
      </button>
      <div className={`subnav ${isOpen.about ? "active" : ""}`}>
        <button className="subnav-btn" onClick={closeNavbar}>
          <Link to="/about/owen">
            <img src="./images/labels/OWEN3x5_2.png" alt="ME" />
          </Link>
        </button>
        <button className="subnav-btn" onClick={closeNavbar}>
          <a href="/images/The_OwenBeedle_Resume.pdf" target="_blank">
            <img src="./images/labels/RESUME3x5_2.png" alt="RESUME" />
          </a>
        </button>
      </div>

      <button className="nav-btn" onClick={() => toggleSubnav("works")}>
        <img src={worksImg} alt="WORKS" />
      </button>
      <div className={`subnav ${isOpen.works ? "active" : ""}`}>
        <button className="subnav-btn" onClick={closeNavbar}>
          <Link to="/works/art">
            <img src="./images/labels/ART3x5_2.png" alt="ART" />
          </Link>
        </button>
        <button className="subnav-btn" onClick={closeNavbar}>
          <Link to="/works/design">
            <img src="./images/labels/DESIGN3x5_2.png" alt="DESIGN" />
          </Link>
        </button>
        <button className="subnav-btn" onClick={closeNavbar}>
          <a href="https://medium.com/@beedleowen">
            <img src="./images/labels/WRITING3x5_2.png" alt="WRITING" />
          </a>
        </button>
      </div>

      <button className="nav-btn" onClick={() => toggleSubnav("reach")}>
        <img src={reachImg} alt="REACH" />
      </button>
      <div className={`subnav ${isOpen.reach ? "active" : ""}`}>
        <button className="subnav-btn" onClick={closeNavbar}>
          <a href="mailto:beedleowen@gmail.com">
            <img src="./images/labels/EMAIL3x5_2.png" alt="EMAIL" />
          </a>
        </button>
        <button className="subnav-btn" onClick={closeNavbar}>
          <a href="https://www.linkedin.com/in/owen-beedle/">
            <img src="./images/labels/LINKEDIN3x5_2.png" alt="LINKEDIN" />
          </a>
        </button>
        <button className="subnav-btn" onClick={closeNavbar}>
          <a href="https://twitter.com/owenbeedle">
            <img src="./images/labels/TWITTER3x5_2.png" alt="TWITTER" />
          </a>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
