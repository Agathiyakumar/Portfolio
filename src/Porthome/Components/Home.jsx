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
                <p id="sub">I am a skilled and passionate web designer with experience in creating <br></br>visually appealing and user-friendly websites. </p>
            </div>
        </div>
    )
}
export default Home;