import React, { useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { FaLink } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { FcAbout } from "react-icons/fc";
import { FcContacts } from "react-icons/fc";
import { FcHome } from "react-icons/fc";
import webimg from '../images/funstation.png';
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";


const Portfolio=()=>{
 
    
   const [navel,setNavel]=useState(false);
   const navelClick=()=>{
    setNavel(!navel);
   }
    useEffect(() => {
        AOS.init(); 
        AOS.refresh();
      }, []);
      
return(
    <>
    <div className="Nav">
    <div className="mobile-menu" ><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/2048px-Hamburger_icon.svg.png" onClick={navelClick} style={{width:'30px'}} /></div> 
        <div className={navel?'navel-hov':'navele'}>
          
            <a className="navlink" href="/">
            <h3><FcHome />&nbsp;Home</h3></a>
            <a className="navlink" href="#about1">
            <h3><FcAbout />&nbsp;About</h3></a>
            <a className="navlink" href="#skill">
            <h3 ><GiSkills style={{color:"red"}}/>&nbsp;Skills</h3></a>
            <a className="navlink" href="#contact">
            <h3 ><FcContacts />&nbsp;Contact</h3></a>
           
        </div>
    </div>
      
   

    <div className="name">
        <h1>Hello</h1>
        <h2>I'm AGATHIYA KUMAR S D</h2>
        <h3 style={{color:"grey"}}>MERN Developer</h3>
        <br></br>
        <br></br>
        <div className="illus">
        <img width="400px" src="https://img.pikbest.com/element_our/20220416/bg/f3efb67d0b836.png!f305cw" alt="illustration"/>

        </div>
    </div>
    
<div id="about1" className="about" data-aos="fade-down" data-aos-duration="1000">
<h1>ABOUT ME</h1>
    <div className="aboutele"  data-aos="fade-up" data-aos-duration="1000">
        
        <h2 style={{color:"grey"}}> I am Agathiya kumar S D currently pursuing a B.Tech Information Technology at Karpagam College of Engineering. Eager to contribute my skills and passion for coding to innovative projects, I bring a foundation in Full Stack development, coupled with a proactive approach to learning and problem-solving. my coursework has provided me with a solid understanding of fundamental programming concepts and algorithms.</h2>
        
        
        
    </div>
</div>
    <div id="skill" className="skills" >
    <h1>SKILLS</h1>
       <div className="skillrow"  >
       
       <h2 data-aos="fade-up" data-aos-duration="1000" className="skillele">React</h2>
       <h2 data-aos="fade-down" className="skillele">Javascript</h2>
       <h2 data-aos="fade-up" data-aos-duration="1000"className="skillele">Mongodb</h2>
       <h2 data-aos="fade-down" data-aos-duration="1000" className="skillele">Express.js</h2>
       <h2 data-aos="fade-up" data-aos-duration="1000" className="skillele">Node.js</h2>
       </div>
    </div>
   
    

    <div id="project" className="projects">
        <h1>PROJECTS</h1>
        <div className="pro">
        <div className="project1" data-aos="zoom-in" data-aos-duration="1000">
            <div className="webimg">
            <img  src={webimg} alt="web image" style={{width:"100%" , height:"auto"}}/>
            </div>
            
            <h2>Game-Info's</h2>
            <h3>Developed a complete Frontend for a gaming Apllication that provides the users a complete knowledge of the game and the gaming environment</h3>
            <br></br>
            <h3>Follow Link:</h3> 
            <a href="https://app-game-phi.vercel.app">       
            <p style={{fontSize:'18px', color:"white"}}><FaLink />&nbsp;Game-app</p></a>
        </div>
        </div>

    </div>

    <div id="certificate" className="certificates">
        <h1>Certifications</h1>
        <div className="cer" data-aos="zoom-out" data-aos-duration="1000">

        <div className="certificate1">
            <h1 style={{padding:"5%"}}>Azure az-900<br></br><span style={{fontSize:"20px",padding:"1%"}}>Microsoft certification<br>
            </br>Certified in azure Cloud  services and Virtual machine</span></h1>
        </div>
        </div>
      
    </div>
   
   <div id="contact" className="contacts">
    <h1>PERSONAL INFORMATION</h1>
    <div className="personal">
        <p>
            <h3><IoCallOutline />&nbsp;Contact: 9791301080</h3>
            <h3><CiMail />&nbsp;Mail: harishagathi@gmail.com</h3>
        </p>
        </div>
        <div className="social" data-aos="zoom-in" data-aos-duration="1300">
        <p ><a href="https://github.com/Agathiyakumar"><FaGithub style={{width:"100px" , height:"50px" , color:"black"}} /></a>&nbsp;&nbsp;<a href="https://www.linkedin.com/in/agathiya-kumar-s-d-90528626a/"><FaLinkedin style={{width:"100px" , height:"50px" , color:"black"}}/></a>&nbsp;&nbsp;<a href="https://www.instagram.com/_agathi_12/"><FaInstagram style={{width:"100px" , height:"50px" , color:"black"}}/></a></p>
        
    </div>
   </div>
   

    </>
)
}
export default Portfolio;