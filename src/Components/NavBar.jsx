import React from "react";


function NavBar(){
    return(
        <div className="  flex justify-end mt-8">
            <nav >
                <ul className="flex gap-5 ">
                    <li className="text-xl">About Me</li>
                    <li className="text-xl">Projects</li>
                    <li className="text-xl">Gallery</li>
                    <li className="text-xl">Contact</li>
                </ul>
                
            </nav>
        </div>
    )
}
export default NavBar