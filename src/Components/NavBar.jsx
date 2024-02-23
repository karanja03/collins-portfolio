


// import React from "react";
// import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
// import { NavLink } from "react-router-dom";

// function NavBar() {
//   const scrollToTop = () => {
//     scroll.scrollToTop();
//   };

//   return (
//     <div className="flex justify-end mt-8 border pt-4">
//       <nav>
//         <ul className="flex gap-5">
//           <h4
//             className="namelandingpage ml-0"
//             onClick={scrollToTop}
//             style={{ cursor: "pointer" }}
//           >
//             COLLINS KIMANI
//           </h4>
//           <li className="text-xl">
//             <NavLink
//               to="/"
//               exact
//               className="no-underline text-white"
//               activeClassName="active"
//             >
//               Home
//             </NavLink>
//           </li>
//           <li className="text-xl">
//             <ScrollLink
//               to="about"
//               spy={true}
//               smooth={true}
//               duration={0}
//               className="no-underline text-white"
//               activeClass="active"
//             >
//               About Me
//             </ScrollLink>
//           </li>
//           <li className="text-xl">
//             <ScrollLink
//               to="projects"
//               spy={true}
//               smooth={true}
//               duration={500}
//               className="no-underline text-white"
//               activeClass="active"
//             >
//               Projects
//             </ScrollLink>
//           </li>
//           <li className="text-xl">
//             <ScrollLink
//               to="gallery"
//               spy={true}
//               smooth={true}
//               duration={500}
//               className="no-underline text-white"
//               activeClass="active"
//             >
//               Gallery
//             </ScrollLink>
//           </li>
//           <li className="text-xl">
//             <ScrollLink
//               to="gallery"
//               spy={true}
//               smooth={true}
//               duration={500}
//               className="no-underline text-white"
//               activeClass="active"
//             >
//              Collaborations
//             </ScrollLink>
//           </li>

//           <li className="text-xl">
//             <ScrollLink
//               to="contact"
//               smooth={true}
//               duration={0}
//               className="no-underline text-white"
//               activeClass="active"
//             >
//               Contacts
//             </ScrollLink>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// }

// export default NavBar;


import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="flex justify-between items-center  px-24 border pt-4 bg-white/10">
      <p className="namelandingpage ml-12  text-xl font-bold">
        COLLINS KIMANI
      </p>
      <nav>
        <ul className="flex gap-5">
          <li className="">
            <NavLink
              to="/"
              exact
              className="no-underline text-white"
              activeClassName="active"
            >
              HOME
            </NavLink>
          </li>
          <li className="">
            <NavLink
              to="/about"
              className="no-underline text-white"
              activeClassName="active"
            >
              ABOUT ME
            </NavLink>
          </li>
          <li className="">
            <NavLink
              to="/projects"
              className="no-underline text-white"
              activeClassName="active"
            >
              PROJECTS
            </NavLink>
          </li>
          <li className="">
            <NavLink
              to="/gallery"
              className="no-underline text-white"
              activeClassName="active"
            >
             GALLERY
            </NavLink>
          </li>
          <li className="">
            <NavLink
              to="/collaborations"
              className="no-underline text-white"
              activeClassName="active"
            >
              PARTNERS
            </NavLink>
          </li>
          <li className="">
            <NavLink
              to="/contact"
              className="no-underline text-white"
              activeClassName="active"
            >
              CONTACTS
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
