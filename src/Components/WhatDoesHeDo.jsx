
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const WhatDoesHeDo = () => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 2, // Number of cards to show at once
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Adjust this value to control the time between slides
  };

  return (
    <div id="about" className="text-center py-40" style={{ backgroundColor: '#212529' }}>
      <div className="">
        <h2 className="mt-10 animated-underline text-white text-5xl mb-24">WHAT DOES HE DO?</h2>
        <Slider {...sliderSettings}>
          {/* Card 1 */}
          <div className="w-1/3 py-8 shadow-4xl">
            <div className="card-body">
              <h3 className="mt-6 text-white text-3xl font-bold">I'm a Videographer</h3>
              <p className="mt-4 font-medium text-xl text-white">
              Lorem ipsum dolor sit amet, consectetur <br/>adipiscing elit, sed do eiusmod tempor incididunt  <br/> ut labore et dolore magna aliqua.
               <br />
              Ut enim ad minim veniam, quis nostrud  <br/> exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br />
                Duis aute irure dolor in reprehenderit <br/> in voluptate velit esse cillum dolore eu fugiat nulla pariatur
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-1/3 py-8 shadow-4xl ">
            <div className="card-body">
              <h3 className="mt-6 text-white text-3xl font-bold">I'm a Photographer</h3>
              <p className="mt-4 font-medium text-xl text-white">
              Lorem ipsum dolor sit amet, consectetur <br/>adipiscing elit, sed do eiusmod tempor incididunt  <br/> ut labore et dolore magna aliqua.
               <br />
              Ut enim ad minim veniam, quis nostrud  <br/> exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br />
                Duis aute irure dolor in reprehenderit <br/> in voluptate velit esse cillum dolore eu fugiat nulla pariatur
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="w-1/3 py-8 shadow-2xl ">
            <div className="card-body">
              <h3 className="mt-6 text-white text-3xl font-bold">I'm an Editor</h3>
              <p className="mt-4 font-medium text-xl text-white">
              Lorem ipsum dolor sit amet, consectetur <br/>adipiscing elit, sed do eiusmod tempor incididunt  <br/> ut labore et dolore magna aliqua.
               <br />
              Ut enim ad minim veniam, quis nostrud  <br/> exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br />
                Duis aute irure dolor in reprehenderit <br/> in voluptate velit esse cillum dolore eu fugiat nulla pariatur
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="w-1/3 py-8 shadow-2xl">
            <div className="card-body">
              <h3 className="mt-6 text-white text-3xl font-bold"> I'm a Choreographer</h3>
              <p className="mt-4 font-medium text-xl text-white">
              Lorem ipsum dolor sit amet, consectetur <br/>adipiscing elit, sed do eiusmod tempor incididunt  <br/> ut labore et dolore magna aliqua.
               <br />
              Ut enim ad minim veniam, quis nostrud  <br/> exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br />
                Duis aute irure dolor in reprehenderit <br/> in voluptate velit esse cillum dolore eu fugiat nulla pariatur
              </p>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default WhatDoesHeDo;

