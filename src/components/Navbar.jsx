import React from "react";
import { useTypewriter, Cursor  } from "react-simple-typewriter";

// Components
import Section from './Section.jsx';

// Styles
import '../styles/Navbar.scss';
import '../styles/ResponsiveNavbar.scss';


function Navbar(){
  //#region Variables
  //const logoName = "{ Jessie }";
  //#endregion

  //#region  Toggle Menu Bar Effects
  // const [toggleMenu, setToggleMenu] = useState(false);

  // const OpenMenu = () => setToggleMenu(true);
  // const CloseMenu = () => setToggleMenu(false);
  // const scrollToTop = () => scroll.scrollToTop();
  //#endregion
  
  //#region Typewriting Animation
    const [text] = useTypewriter({
      words: ['Software Developer', 'Front-end Developer', 'Acumatica Developer'],
      loop:{},
      typeSpeed: 120,
      deleteSpeed: 80,
    });
  //#endregion

  //#region Expand Height when scrolled down
  // const [header, expandHeader] = useState(0);

  // const expandHeaderHeight = () =>{
  //   expandHeader(window.scrollY);
  //   console.log(window.scrollY);
  // }

  //window.addEventListener('scroll', expandHeaderHeight);
  //#endregion 

  return(
      <div className='header-wrapper'>
          {/* <div className='navbar'>
            <div className='logo-name' onClick={scrollToTop}>
              { logoName }
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
          </div> */}
          <div className='header-banner'>
            <div className='banner-content'>
              <div className="header-image">
                <div className="image">
                  <img src='' alt="hello"></img>
                </div>
              </div>
              <div className="heading">
                <div className='name-text'>I'm <span>Jessie Rom Turin</span></div>
                <div className='about-text'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
                <div className='career-text'><span> {text} </span><span><Cursor/></span></div>
              </div>
            </div>
          </div>
          <div className='main-content'>
            <Section />
          </div>
      </div>
  )
}

export default Navbar;