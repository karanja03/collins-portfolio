import React from "react";
import LandingPage from "./LandingPage";
import AboutMe from "./AboutMe";
import Gallery from "./Gallery";
import Projects from "./Projects";
import ContactPage from "./ContactPage";
import BottomNavBar from "./BottomNavBar";
function RouterComponents(){
    return(
        <div>
            
            <LandingPage />
            <AboutMe/>
            <Gallery/>
            <Projects/>
            <ContactPage/>
            <BottomNavBar/>

        </div>
    )
}

export default  RouterComponents