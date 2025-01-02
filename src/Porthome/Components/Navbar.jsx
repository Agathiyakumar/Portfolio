import React from "react";
import '../Components/Navbar.css';
import { useNavigate } from "react-router-dom";

const Nav=()=>{
    const navigate=useNavigate();
    function HandleProfile(){
        navigate("/profile");
    }
    return(
            
            <div className="Navbar">
                
                <button id="Nav-btn" onClick={HandleProfile}>Profile</button>
                <button id="Nav-btn">Interest</button>
                <button id="Nav-btn">Skills</button>
                <div className="Nav">
        <h3 className="logo">PORTFOLIO</h3>
    </div>
            </div>
    )
}
export default Nav;