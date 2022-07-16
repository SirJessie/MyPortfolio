import React, { useState, useEffect } from 'react';

// Components
import Navbar from './components/Navbar.js';
import Section from './components/Section.js';

// Styles
import './styles/App.scss';

function App(){
    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    useEffect(() => {
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    return(
        <div className='app-wrapper'>
          <Navbar ScrollValue={scrollPosition}/>
          <Section />
        </div>
    )
}

export default App;
