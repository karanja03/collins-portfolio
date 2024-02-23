import React from "react";

const WhoIsThisGuy = () => {
  return (
    <div id="about" className="text-center pb-24 py-44" style={{ backgroundColor: "#2E3338" }}>
      <div className="flex" >
        <div>
          <h1 className="animated-underline mt-32 ml-12 text-white text-5xl ">
            WHO'S THIS GUY?
          </h1>
        </div>
        <div className="flex items-center justify-center">
          <div
            className=" w-3/4 mt-10 py-8 ml-auto "
            data-aos="zoom-out-down"
            data-aos-duration="1400"
          >
            <div className="card-body">
              <h3 className="mt-4  text-white">My Name is Collins Kimani</h3>
              <p className="mt-4 font-medium  text-white text-2xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <br />
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br />
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoIsThisGuy;
