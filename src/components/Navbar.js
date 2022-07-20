import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

// Styles
import '../styles/Navbar.scss';
import '../styles/ResponsiveNavbar.scss';


function Navbar(){
    const scrollToTop = () => {
        scroll.scrollToTop(); 
    };

    const [toggleMenu, setToggleMenu] = useState(false);

    const OpenMenu = () => {
      setToggleMenu(true);
    }
    const CloseMenu = () =>{
      setToggleMenu(false);
    }


    return(
        <div className='header-wrapper'>
            <div className='navbar'>
              <div className='logo-name' onClick={scrollToTop}>
                <i className="fa-solid fa-less-than"></i>
                JRT /
                <i className="fa-solid fa-greater-than"></i>
              </div>
              <ul className='nav-items'>
                <li class='nav-item'>
                  <Link 
                    to='about'
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                  >about
                  </Link>
                </li>
                <li class='nav-item'>
                <Link 
                    to='skills'
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                  >skills
                  </Link>
                </li>
                <li class='nav-item'>
                  <Link 
                    to='project'
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                  >projects
                  </Link>
                </li>
                <div className='animation'></div>
              </ul>
              <div 
                className={
                  toggleMenu === false ? 'menu-bar' : 'menu-bar open'
                } 
                onClick={() => {
                  toggleMenu === false ? OpenMenu() : CloseMenu()
                }}>
                  <div className='bar'></div>
              </div>
                {
                  toggleMenu === true && 
                  <ul className='menu-bar-items'>
                    <li className='menu-bar-item'>
                      <Link 
                        to='about'
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={500}
                        onClick={() => {
                          toggleMenu === false ? OpenMenu() : CloseMenu()
                        }}
                      >about
                      </Link>
                    </li>
                    <li className='menu-bar-item'>
                      <Link 
                        to='skills'
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={500}
                        onClick={() => {
                          toggleMenu === false ? OpenMenu() : CloseMenu()
                        }}
                      >skills
                      </Link>
                    </li>
                    <li className='menu-bar-item'>
                      <Link 
                        to='project'
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={500}
                        onClick={() => {
                          toggleMenu === false ? OpenMenu() : CloseMenu()
                        }}
                      >projects
                      </Link>
                    </li>
                  </ul>
                }
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