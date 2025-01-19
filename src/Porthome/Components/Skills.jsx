
import '../Components/Skills.css';

import Nav from "./Navbar";


const Skills=()=>{


    return(
        <div id="Skills">
            <Nav/>
            <div class="banner">
        <div class="slider" style={{'--quantity': 7}}>
            <div class="item" style={{'--position': 1}}><img src="https://static-00.iconduck.com/assets.00/react-icon-512x512-u6e60ayf.png" alt=""/></div>
            <div class="item" style={{'--position': 2}}><img src="https://www.w3schools.com/whatis/img_css.jpg" alt=""/></div>
            <div class="item" style={{'--position': 3}}><img src="https://play-lh.googleusercontent.com/rfWOJQVBHoAZ_B43v0ySFlLmJBLtksVGAxGaFRh2ex4nOmNQ86qzG4sYWV63IKrXlvI" alt=""/></div>
            <div class="item" style={{'--position': 4}}><img src="https://www.opc-router.de/wp-content/uploads/2021/03/mongodb_thumbnail.png" alt=""/></div>
            <div class="item" style={{'--position': 5}}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt5943IuioBPR2G35qu1CvX7tBJ_yvlZ6J7w&s" alt=""/></div>
            <div class="item" style={{'--position': 6}}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEc9A_S6BPxCDRp5WjMFEfXrpCu1ya2OO-Lw&s" alt=""/></div>
            <div class="item" style={{'--position': 7}}><img src="https://www.drupal.org/files/project-images/screenshot_361.png" alt=""/></div>

        </div>
        <div class="content">
            <h1 data-content="SKILLS">
                SKILLS
            </h1>
            <div class="author">
                <h2>Agathi</h2>
                <p><b>Web Designer</b></p>
                <p>
                    MERN Stack , TailwindCSS (DaisyUI).
                </p>
            </div>
            <div class="model"></div>
        </div>
    </div>
            
        </div>
    )
}
export default Skills;
