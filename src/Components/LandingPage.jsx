
import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import NavBar from "./NavBar";

function LandingPage() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="bg-black landingpage " data-aos="fade-down"  data-aos-delay="500"  data-aos-duration="2000" >

      <div className="card bg-dark text-white ">
        <img
          // src="https://i.pinimg.com/564x/55/76/81/55768174f02c6b99286faa6c57651255.jpg"
          className="card-img"
          alt="Stony Beach"
        />
        <div className="card-img-overlay">
          <NavBar/>
          <div
            className="mt-60 h-3/4 w-4/5"
          >
            <div
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-easing="ease-in-sine"
              data-aos-delay="2500"
            >
              <h2 className="ml-44 font-bold text-7xl">PHOTOGRAPHY OF COLLINS <span className="text-5xl"></span></h2>
            </div>

            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-easing="ease-in-sine"
              data-aos-delay="2500"

            >
              <h2 className="ml-44 text-6xl font-extrabold">Discover my world through imagery</h2>
            </div>
            <div className="typewriter">
              <h2 className=" text-5xl text-white font-extrabold">I am Collins Kimani.</h2>
            </div>

            <div className="typewriter1 mt-6">
              <h5 className="  text-white ">Videographer. PhotoGrapher. Editor</h5>
            </div>
            <div className =" flex justify-end mt-24 " 
              data-aos="fade-left"
              data-aos-duration="3000"
              data-aos-easing="ease-in-sine"
              data-aos-delay="8000"

            >
            <button className=" border-solid border-white  border-opacity-40 border px-4 rounded-xl">MY PORTFOLIO</button>
          <button className=" ml-36 border py-2 px-4 rounded-xl">GET IN TOUCH</button>
          </div>


          </div>
 

                   </div>
      </div>

    </div>
  );
}

export default LandingPage;





