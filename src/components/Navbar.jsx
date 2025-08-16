import '../styles/Navbar.css';
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import IconButton from '@mui/joy/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import logo from '../assets/logotipo.png';
import { isMobile } from 'react-device-detect';

function Navbar() {
  const [expandedNavbar, setExpandedNavbar] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('up');
  const [scrollTop, setScrollTop] = useState(0);
  const [isTop, setIsTop] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === '/' || location.hash === '#';

  useEffect(() => {
    setExpandedNavbar(false);
    setIsTop(true);
    setScrollTop(window.scrollY);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setIsTop(currentScroll === 0);
      setScrollDirection(currentScroll > scrollTop ? 'down' : 'up');
      setScrollTop(currentScroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollTop]);

  useEffect(() => {
    if (expandedNavbar) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [expandedNavbar]);

  const handleLogoClick = () => {
    navigate('/');
  };

  const showNavbar =
    scrollDirection === 'up' || isTop || expandedNavbar;

  const navbarClasses = `
    navbar-container
    ${isTop && isHome && !expandedNavbar ? 'top' : ''}
    ${!isTop && scrollDirection === 'down' && !expandedNavbar ? 'hide' : ''}
    ${!isTop && scrollDirection === 'up' && !expandedNavbar ? 'scrolled-up' : ''}
    ${showNavbar ? 'show' : ''}
    ${!isHome ? 'internal' : ''}
  `;

  return (
    <>
      {isMobile ? (
        <div className={navbarClasses.trim()}>
          <div className="navbar-mobile-header">
            <div onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
              <img className="navbar-logo" src={logo} alt="logotipo" />
            </div>
            <IconButton
              onClick={() => setExpandedNavbar((prev) => !prev)}
              className={`menu-button ${!isTop || expandedNavbar || !isHome ? 'dark' : 'light'}`}
            >
              {expandedNavbar ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          </div>
          <div className={`mobile-menu ${expandedNavbar ? 'expanded' : ''}`}>
            <Link to="/">Inicio</Link>
            <HashLink to="/#tratamientos">Tratamientos</HashLink>
            <Link to="/financiamiento">Financiamiento</Link>
            <Link to="/blog">Blog</Link>
            <HashLink to="/#contacto">Contacto</HashLink>
          </div>
        </div>
      ) : (
        <div className={navbarClasses.trim()}>
          <div className="navbar-desktop">
            <div onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
              <img className="navbar-logo" src={logo} alt="logotipo" />
            </div>
            <div className="links">
              <Link to="/">Inicio</Link>
              <HashLink to="/#tratamientos">Tratamientos</HashLink>
              <Link to="/financiamiento">Financiamiento</Link>
              <Link to="/blog">Blog</Link>
              <HashLink to="/#contacto">Contacto</HashLink>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
