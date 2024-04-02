

import React from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { NavLink } from "react-router-dom";

function BottomNavBar() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className=" bg-black pt-24 px-10"> 
    <div className=" flex justify-center items-center">

      <nav>
        <ul className="flex gap-5">
          <li className="text-xl">
            <NavLink
              to="/"
              exact
              className="no-underline text-white"
              activeClassName="active"
            >
              Home
            </NavLink>
          </li>
          <li className="text-xl">
            <ScrollLink
              to="about"
              spy={true}
              smooth={true}
              duration={0}
              className="no-underline text-white"
              activeClass="active"
            >
              About Me
            </ScrollLink>
          </li>
          <li className="text-xl">
            <ScrollLink
              to="projects"
              spy={true}
              smooth={true}
              duration={500}
              className="no-underline text-white"
              activeClass="active"
            >
              Projects
            </ScrollLink>
          </li>
          <li className="text-xl">
            <ScrollLink
              to="gallery"
              spy={true}
              smooth={true}
              duration={500}
              className="no-underline text-white"
              activeClass="active"
            >
              Gallery
            </ScrollLink>
          </li>
          <li className="text-xl">
            <ScrollLink
              to="contact"
              smooth={true}
              duration={0}
              className="no-underline text-white"
              activeClass="active"
            >
              Contacts
            </ScrollLink>
          </li>
        </ul>
      </nav>
    </div>
    <div className="flex justify-center items-center gap-5 mt-24 mb-0">
        <div className="flex">
            <div>
        <p
          className="namelandingpage text-white"
          onClick={scrollToTop}
          style={{ cursor: "pointer" }}
        >
          WambuiKaranja
        </p>
        </div>
        <div>
        <span className=" text-2xl text-white">&#169;</span>
        </div>
      </div>
      
      <div>


      <p className="text-white ">All rights reserved 2024</p>
      </div>
      </div>

    </div>
  );
}

export default BottomNavBar;

