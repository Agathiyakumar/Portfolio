import React ,{ useEffect} from "react";
import profile from '../images/profile.jpg';
import CLOUDS from 'vanta/src/vanta.clouds';
import Nav from "./Components/Navbar";

const Portfolio=()=>{

    useEffect(()=>{
        CLOUDS({
            el:'#vanta',
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,     
  minWidth: 200.00,
  skyColor: 0x67b5cc,
  sunColor: 0xc5852b,
  sunGlareColor: 0xd66037,
  sunlightColor: 0xc07b37
        })
    },[])
  
   
    return(
        
        <div className="bg" id="vanta">
            <Nav/>
        <div className="Main">
            
           
                
                    
                
                
                    <div className="About">
                        <img id="profile" src={profile} alt="img"/>
                        <div className="About-content">
                        <span id="greetings">Hello.</span>
                        <p id="intro">A common man with superpowers HTML,CSS,React and Javascript to defend the Web</p>
                    </div>
</div>
</div>
</div>
       
    )
    
}
export default Portfolio;