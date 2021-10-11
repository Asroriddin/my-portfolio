import React from 'react';
import './Header.css';

const Header = props => {
  return (
    <header id="welcome-section">
      <div className="forest" />
      <div className="silhouette"/>
      <div className="moon" />
      <div className="container">
        <h1>
          <span className="line">I am</span>
          <span className="line">Web developer</span>
          <span className="line">
          <span className="color">&</span> coder.
          </span>
        </h1>
        <div className="buttons">
          <a href="#projects">My portfolio</a>
          <a href="#contact" className="cta">
            get in touch
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;