import React from "react";// eslint-disable-next-line
import { Link, animateScroll as scroll } from "react-scroll";

// Styles
import '../styles/index.css';
import '../styles/Navbar.css';


function Navbar(){
    const scrollToTop = () => {
        scroll.scrollToTop(); 
    };

    return(
        <div className='header-wrapper'>
            <div className='navbar'>
              <div className='logo-name' onClick={scrollToTop}>
                <i class="fa-solid fa-less-than"></i>
                JRT /
                <i class="fa-solid fa-greater-than"></i>
              </div>
              <ul className='nav-items'>
                <li class='nav-item'>about</li>
                <li class='nav-item'>project</li>
                <li class='nav-item'>contact</li>
                <div className='animation'></div>
              </ul>
              <div className='menu-bar'>
                  <div className='bar'></div>
              </div>
              <ul className='menu-bar-items'>
                <li className='menu-bar-item'>about</li>
                <li className='menu-bar-item'>project</li>
                <li className='menu-bar-item'>contact</li>
              </ul>
            </div>
            <div className='header-banner'>
              <div className='banner-content'>
                <div className='greet-text'>Hey there,</div>
                <div className='name-text'>I'm Jessie Rom A. Turin</div>
                <div className='divider bg-cyan'></div>
                <div className='career-text'>Developer</div>
              </div>
            </div>
          </div>
    )
}

export default Navbar;