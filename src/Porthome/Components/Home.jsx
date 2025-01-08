import React ,{ useEffect} from "react";
import CLOUDS from 'vanta/src/vanta.birds';
import Nav from "./Navbar";
import '../Components/Home.css';

const Home=()=>{
     useEffect(()=>{
            CLOUDS({
                el:'#home',
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
        <div className="Home" id='home'>
            <Nav/>
            
            <div className="welcome">
                
                <h1 id="main">Hi</h1>
                <p id="sub">Welcome to my digital showcase, where you can discover my growing <br></br>      skills in front-end development, ready to contribute to your team</p>
            </div>
           
        </div>
    )
}
export default Home;