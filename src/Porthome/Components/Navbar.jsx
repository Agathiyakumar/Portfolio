import React from "react";
import '../Components/Navbar.css';
const Nav=()=>{
    return(
            
            <div className="Navbar">
                
                <button id="Nav-btn">Profile</button>
                <button id="Nav-btn">Interest</button>
                <button id="Nav-btn">Skills</button>
                <div className="Nav">
        <h3 className="logo">PORTFOLIO</h3>
    </div>
            </div>
    )
}
export default Nav;