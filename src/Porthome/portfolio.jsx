import React ,{ useEffect} from "react";
import profile from '../images/agathi1.jpg';
import CLOUDS from 'vanta/src/vanta.fog';
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
            highlightColor: 0x0,
            midtoneColor: 0x0,
            lowlightColor: 0x0,
            baseColor: 0x312b2b,
            blurFactor: 0.7,
            zoom: 1.20,
            speed:2.10
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
                    <div className="about">
                        <p id="about-sub">I'm Agathiya Kumar S D, a passionate web developer eager to create exceptional, user-interface
                             web experiences and to contribute to a dynamic team and leverage modern design principles and technologies
                              to drive engaging and efficient solutions. </p>
                    </div>
</div>
       
    )
    
}
export default Portfolio;