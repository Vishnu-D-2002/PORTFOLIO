import React, { useState } from 'react';
import './Navbar.css';
import '@fortawesome/fontawesome-free/css/all.css';

function Navbar() {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <div>
      <nav>
        <h1 id='portfolio'>Portfolio</h1>
        <ul className={menu ? 'show' : 'hide'}>
          <li><a href='/' onClick={closeMenu}>Intro</a></li>
          <li><a href='#about' onClick={closeMenu}>About</a></li>
          <li><a href='#intro' onClick={closeMenu}>Projects</a></li>
          <li><a href='#skills' onClick={closeMenu}>Skills</a></li>
          <li><a href='#education' onClick={closeMenu}>Education</a></li>
          <li><a href='#certification' onClick={closeMenu}>Certification</a></li>
          <li><a href='#contact' onClick={closeMenu}>Contact</a></li>
        </ul>
        <div id='right'>
          <input id="checkbox" type="checkbox" onChange={toggleMenu} checked={menu} />
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
