// import React from "react";


// function NavBar(){
//     return(
            
//         <div className="  flex justify-end mt-8">

//             <nav >
//                 <ul className="flex gap-5 ">

//                     <h4 className="namelandingpage ml-auto">COLLINS KIMANI</h4>
//                     <li className="text-xl">About Me</li>
//                     <li className="text-xl">Projects</li>
//                     <li className="text-xl">Gallery</li>
//                     <li className="text-xl">Contact</li>
//                 </ul>
                
//             </nav>
//         </div>
//     )
// }
// export default NavBar


// import React from "react";
// import { Link, useLocation } from "react-router-dom";
// import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";


// function NavBar() {
//   const location = useLocation();

//   const isActive = (pathname) => {
//     return location.pathname === pathname;
//   };

//   const scrollToTop = () => {
//     scroll.scrollToTop();
//   };

//   return (
//     <div className="flex justify-end mt-8">
//       <nav>
//         <ul className="flex gap-5">
//           <h4 className="namelandingpage ml-auto">
//           <Link to="/" onClick={scrollToTop} className="no-underline text-white">COLLINS KIMANI</Link>
//           </h4>
//           <li className="text-xl " >
//             <Link  className="no-underline text-white" to="/">Home</Link>
//           </li>


//           <li className="text-xl">
//             <ScrollLink
//               to="about"
//               spy={true}
//               smooth={true}
//               duration={20}
//               className="no-underline text-white"
//             >
//                 About
//             </ScrollLink>
//           </li>

//           <li className={`text-xl ${isActive("/projects") && "active"}`}>
//             <Link className="no-underline text-white"  to="/projects">Projects</Link>
//           </li>
//           <li className={`text-xl ${isActive("/gallery") && "active"}`}>
//             <Link  className="no-underline text-white"  to="/gallery">Gallery</Link>
//           </li>
//           <li className={`text-xl ${isActive("/contact") && "active"}`}>
//             <Link  className="no-underline text-white"  to="/contact">Contacts </Link>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// }

// export default NavBar;



import React from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { NavLink } from "react-router-dom";

function NavBar() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className="flex justify-end mt-8">
      <nav>
        <ul className="flex gap-5">
          <h4
            className="namelandingpage ml-auto"
            onClick={scrollToTop}
            style={{ cursor: "pointer" }}
          >
            COLLINS KIMANI
          </h4>
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
  );
}

export default NavBar;
