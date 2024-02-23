import React from "react";
import LandingPage from "./LandingPage";
import WhoIsThisGuy from "./WhosThisGuy";
import WhatDoesHeDo from "./WhatDoesHeDo";
import Gallery from "./Gallery";
import Projects from "./Projects";
import ContactPage from "./ContactPage";
import BottomNavBar from "./BottomNavBar";
import PeopleWorkedwith from "./PeopleWorkedwith";
function RouterComponents(){
    return(
        <div>
            
            <LandingPage />
            <WhoIsThisGuy/>
            <WhatDoesHeDo/>
            <Projects/>
            <PeopleWorkedwith/>
            <Gallery/>


            <ContactPage/>
            <BottomNavBar/>
            

        </div>
    )
}

export default  RouterComponents