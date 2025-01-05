import React from "react";
import '../Components/Skills.css';
import css from '../Components/csslogo.webp';


const Skills=()=>{

    return(
        <div className="Skills">
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
                <h2 id="skill-name">\ HTML5 /</h2>
                <h2 id="skill-name">\ CSS3 /</h2>
                <h2 id="skill-name">\ React /</h2>
                <h2 id="skill-name">\ Javascript /</h2>
                <h2 id="skill-name">\ MongoDB /</h2>
                <h2 id="skill-name">\ Express js /</h2>
            </div>
            
        </div>
    )
}
export default Skills;
