import React from 'react';
import './Nav.css';


const Nav = props => {
  return (
    <React.Fragment>
      <nav id="navbar">
        <div className="nav-wrapper">
          <a href="home" id="#welcome-section">
          <p className="brand">
            ASRORBEK
            <strong>DEV</strong>
          </p>
          </a>
          
          <a
          onClick={props.toggleMenu}
          className={props.showMenu === 'active' ? 'menu-button active' : 'menu-button'}>
            <span/>
          </a>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Nav;