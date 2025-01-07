import React from "react";
import '../Components/Navbar.css';
import { useNavigate } from "react-router-dom";

const Nav=()=>{
    const navigate=useNavigate();
    function HandleProfile(){
        navigate("/profile");
    }
    function HandleSkills(){
        navigate("/skills");
    }
    function HandleHome(){
        navigate("/home");
    }
    function HandleContact(){
        navigate("/contact");
    }
    return(
            
            <div className="Navbar">
                
                <button id="Nav-btn" onClick={HandleProfile}>Profile</button>
                <button id="Nav-btn" onClick={HandleSkills}>Skills</button>
                <button id="Nav-btn" onClick={HandleContact}>Contact</button>
                <div className="Nav">
        <h3 className="logo" onClick={HandleHome}>PORTFOLIO</h3>
    </div>
            </div>
    )
}
export default Nav;