import React from 'react';

// Components
import Navbar from './components/Navbar.js';
import Section from './components/Section.js';

// Styles
import './styles/App.scss';

function App(){

    return(
        <div className='app-wrapper'>
          <Navbar />
          <Section />
        </div>
    )
}

export default App;
