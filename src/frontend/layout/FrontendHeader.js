import { Link } from "react-router-dom"
import React, { useState } from "react";

const FrontendHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header id="header" className={`header dark-background d-flex flex-column ${isMenuOpen ? 'header-show' : ''}`}>
        
        <button 
          className="header-toggle d-xl-none"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <i className="header-toggle d-xl-none bi bi-x"></i> : <i className="header-toggle d-xl-none bi bi-list"></i>}
        </button>
        <div className="profile-img">
          <img src="assets/img/1.jpeg" alt="" className="img-fluid rounded-circle" />
        </div>

        <Link to="index.html" className="logo d-flex align-items-center justify-content-center">
          {/* <img src="assets/img/logo.png" alt="" /> */}
            <h1 className="sitename">Bapi Swarnakar</h1>
        </Link>

        <div className="social-links text-center">
          <Link to="https://www.facebook.com/share/1CDewxPr1w" target="blank" className="facebook"><i className="bi bi-facebook"></i></Link>
          <Link to="https://www.instagram.com/swarnakarbapi/profilecard/?igsh=MmhxbDNzbjZyaDV3" target="blank" className="instagram"><i className="bi bi-instagram"></i></Link>
          <Link to="https://www.linkedin.com/in/bapi-swarnakar-814974231" target="blank" className="linkedin"><i className="bi bi-linkedin"></i></Link>
          <Link to="https://www.youtube.com/@bapi.swarnakar" target="blank" className="google-plus"><i className="bi bi-youtube"></i></Link>
        </div>

        <nav id="navmenu" className="navmenu">
          <ul>
            <li><a href="#hero" onClick={toggleMenu} className="active"><i className="bi bi-house navicon"></i>Home</a></li>
            <li><a href="#about" onClick={toggleMenu}><i className="bi bi-person navicon"></i> About</a></li>
            <li><a href="#resume" onClick={toggleMenu}><i className="bi bi-file-earmark-text navicon"></i> Resume</a></li>
            {/* <li><a href="#portfolio"><i className="bi bi-images navicon"></i> Portfolio</a></li> */}
            <li><a href="#contact" onClick={toggleMenu}><i className="bi bi-envelope navicon"></i> Contact</a></li>
          </ul>
        </nav>

      </header>
    </>

  )
}

export default FrontendHeader