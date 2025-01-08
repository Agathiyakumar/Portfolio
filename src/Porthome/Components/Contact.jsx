import React ,{useEffect}from 'react';
import '../Components/Contact.css'
import Nav from './Navbar';

import CLOUDS from 'vanta/src/vanta.globe';
import { Link } from 'react-router-dom';



export default function ContactUs() {

  
  useEffect(()=>{
          CLOUDS({
              el:'#Contact',
              mouseControls: true,
              touchControls: true,
              gyroControls: false,
              minHeight: 200.00,
              minWidth: 200.00,
              scale: 1.00,
              scaleMobile: 1.00,
              color: 0xe03c53,
              color2: 0xfcfcfc,
              backgroundColor: 0x0

          })
      },[])

  return (
    <div id='Contact'>
        <Nav/>
        <div className='Contact-card'>
        <div id='head'>
          <p>Contact Me</p>
        </div>
        <div id='contact-details'>
          <h3 id='Email'>EMAIL: <span id='email'>harishagathi@gmail.com</span></h3>
        </div>
        <div className='social'>
        <Link to="https://www.linkedin.com/in/agathiya-kumar-s-d-90528626a/">
          <img src="https://static.vecteezy.com/system/resources/previews/023/986/970/non_2x/linkedin-logo-linkedin-logo-transparent-linkedin-icon-transparent-free-free-png.png" alt='img' id='linkedin' />
          </Link>
          <Link to="https://github.com/Agathiyakumar">
          <img src="https://img.icons8.com/m_rounded/512/228BE6/github.png" alt='img' id='github' />
          </Link>
          <div className='social1'>
          <Link to="https://github.com/Agathiyakumar">
          <img src="https://www.instagram.com/_agathi_12/" alt='img' id='insta' />
          </Link>
          <Link to="https://github.com/Agathiyakumar">
          <img src="https://freepnglogo.com/images/all_img/1691832581twitter-x-icon-png.png" alt='img' id='x' />
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
}