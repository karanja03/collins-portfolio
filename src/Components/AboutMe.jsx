// import React from "react";


// function AboutMe(){

//     const aboutmestyle = {
//         backgroundColor: '#12232B'
//     };
//     const cardstyles={
//         backgroundColor: '#366A81'
//     }
    
//     return(
//         <div  id="about"  className=" text-center  "   style={aboutmestyle} >
//                     <div className="pt-16">
//                         <h2 className="animated-underline"> WHO'S THIS GUY?</h2>
//                         <div className=" flex items-center justify-center ">
//                         <div className="card w-3/5  mt-10 py-8 shadow-2xl" 
//                         data-aos="zoom-out-down"
//                         data-aos-duration="2000"
//                         style={cardstyles}
//                         >
//                             <div class="card-body">
//                         <h3 className="mt-4 text-white">  My Name is Collins Kimani</h3>
//                         <p className="mt-4 font-medium text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/>
//                         Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br/>
//                         Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
//                         </div>
//                         </div>
                        
//                 </div>

//                 <div>
//                     <h2 className="mt-20 animated-underline">WHAT DOES HE DO?</h2>
//                     <div className="  flex items-center justify-center ">
//                     <div className="card w-3/5  mt-10 py-8 shadow-2xl" 
//                     data-aos="zoom-out-down"
//                     data-aos-duration="2000"
//                     style={cardstyles}

//                     >
//                     <div class="card-body">

//                     <h3 className="mt-6 text-white"> I'm a Videographer</h3>
//                     <p className="mt-4 font-medium text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/>
//                     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br/>
//                     Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
//                     </div>
//                     </div>
                    

//                         {/* <div className="  flex items-center justify-center "> */}

//                     <div className=" card w-3/5 mt-10 py-8 shadow-2xl "  
//                     data-aos="zoom-out-down"
//                     data-aos-duration="2000"
//                     style={cardstyles}

//                     >
//                         <div className="card-body">
//                         <h3 className="mt-6 text-white ">I'm a Photographer</h3>
//                     <p className="mt-4 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/>
//                     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br/>
//                     Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>


//                         </div>
//                         {/* </div> */}

//                     </div>
//                     </div>
            
//                 </div>
//                 </div>
//         </div>
//     )
// }

// export default AboutMe


import React from "react";

function AboutMe() {
  const aboutMeStyle = {
    backgroundColor: '#12232B',
    color: '#FFFFFF', // Adjusted text color
  };

  const cardStyles = {
    backgroundColor: '#366A81',
  };

  return (
    <div id="about" className="text-center" style={aboutMeStyle}>
      <div className="pt-16">
        <h2 className="animated-underline">WHO'S THIS GUY?</h2>
        <div className="flex items-center justify-center">
          <div className="card w-3/5 mt-10 py-8 shadow-2xl" 
            data-aos="zoom-out-down"
            data-aos-duration="1400"
            style={cardStyles}
          >
            <div className="card-body">
              <h3 className="mt-4 text-white">My Name is Collins Kimani</h3>
              <p className="mt-4 font-medium text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br/>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="mt-20 animated-underline">WHAT DOES HE DO?</h2>
        <div className="flex items-center justify-center gap-8 mt-20"> 
          <div className="card w-1/3 py-8 shadow-2xl"  
          data-aos="zoom-out-down"
            data-aos-duration="1400"
            style={cardStyles}
          >
            <div className="card-body">
              <h3 className="mt-6 text-white">I'm a Videographer</h3>
              <p className="mt-4 font-medium text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br/>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
              </p>
            </div>
          </div>

          <div className="card w-1/3 py-8 shadow-2xl"  
            data-aos="zoom-out-down"
            data-aos-duration="1400"
            style={cardStyles}
          >
            <div className="card-body">
              <h3 className="mt-6 text-white">I'm a Photographer</h3>
              <p className="mt-4 font-medium text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br/>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
