import React, { useState } from 'react';
import './Navbar.css';
import '@fortawesome/fontawesome-free/css/all.css';

function Navbar() {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div>
      <nav>
          <h1 id='portfolio'>Portfolio</h1>
          <ul className={menu ? 'show' : 'hide'}>
          <li><a href='/'>Intro</a></li>
          <li><a href='#about'> About</a></li>
          <li><a href='#intro'>Projects</a></li>
          <li><a href='#skills'>Skills</a></li>
          <li><a href='#education'>Education</a></li>
          <li><a href='#certification'>Certification</a></li>
          <li><a href='#contact'>Contact</a></li>
        </ul>
        <div id='right'>
          <input id="checkbox" type="checkbox" onClick={toggleMenu} />
          <label className="toggle" htmlFor="checkbox">
            <div id="bar1" className="bars"></div>
            <div id="bar2" className="bars"></div>
            <div id="bar3" className="bars"></div>
          </label>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
