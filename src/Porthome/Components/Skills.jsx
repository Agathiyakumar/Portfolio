import React from "react";
import '../Components/Skills.css';
import css from '../Components/csslogo.webp';
import Nav from "./Navbar";


const Skills=()=>{

    return(
        <div className="Skills">
            <Nav/>
            <marquee className="mark" scrollamount="15">
            <div className="skill-1">
            <img id="skill" src="https://images.seeklogo.com/logo-png/22/1/html5-with-wordmark-color-logo-png_seeklogo-224332.png?v=1957360629703259760"/>
                <img id='skill' src={css} alt="skill-1"/>
                <img id="skill" src="https://cdn.iconscout.com/icon/free/png-256/free-react-logo-icon-download-in-svg-png-gif-file-formats--company-brand-world-logos-vol-4-pack-icons-282599.png?f=webp&w=256" alt="skill-1"/>
                <img id="skill" src="https://logowik.com/content/uploads/images/javascript.jpg" alt="skill-1"/>
                <img id="skill" src="https://images.seeklogo.com/logo-png/48/1/mongodb-logo-png_seeklogo-481256.png?v=1957221918686265648" alt="skill-1"/>
                <img id="skill" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWVmXTRybjWV4i9IV85_D7GtvdrJtzYHe8kn5KnJudvtK-OYhpqwTP-2aDiWyKrZvkEtE&usqp=CAU" alt="skill-1"/>
            </div>
            </marquee>
            <div className="Skill-name">
            <button class="skill-name" role="button">HTML-5</button>
            <button class="skill-name" role="button">CSS-3</button>
            <button class="skill-name" role="button">React</button>
            <button class="skill-name" role="button">Javascript</button>
            <button class="skill-name" role="button">MongoDB</button>
            <button class="skill-name" role="button">ExpressJS</button>
            </div>
            
        </div>
    )
}
export default Skills;
