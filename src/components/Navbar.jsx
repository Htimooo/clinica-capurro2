import '../styles/Navbar.css';
import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import IconButton from '@mui/joy/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import logo from '../assets/logotipo.png';
import { isMobile } from 'react-device-detect';
import LoginModal from './LoginModal';
import { useAuth } from '../auth/AuthProvider';

function Navbar() {
  const [expandedNavbar, setExpandedNavbar] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('up');
  const scrollTopRef = useRef(0);
  const [isTop, setIsTop] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [loginOpen, setLoginOpen] = useState(false);
  const [loginMode, setLoginMode] = useState('login');
  const openLogin = (mode = 'login') => {
    setLoginMode(mode);
    setLoginOpen(true);
  };

  const isHome = location.pathname === '/' || location.hash === '#';

  useEffect(() => {
    setExpandedNavbar(false);
    setIsTop(true);
    scrollTopRef.current = window.scrollY;
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setIsTop(currentScroll === 0);
      setScrollDirection(currentScroll > scrollTopRef.current ? 'down' : 'up');
      scrollTopRef.current = currentScroll;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
            {user ? (
              <>
                <button className="login-button" onClick={() => openLogin('change')}>
                  Cambiar contraseña
                </button>
                <button className="login-button" onClick={logout}>
                  Salir
                </button>
              </>
            ) : (
              <button className="login-button" onClick={() => openLogin('login')}>
                Ingresar
              </button>
            )}
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
              {user ? (
                <>
                  <button className="login-button" onClick={() => openLogin('change')}>
                    Cambiar contraseña
                  </button>
                  <button className="login-button" onClick={logout}>Salir</button>
                </>
              ) : (
                <button className="login-button" onClick={() => openLogin('login')}>
                  Ingresar
                </button>
              )}
            </div>
          </div>
        </div>
      )}
      <LoginModal open={loginOpen} onClose={() => setLoginOpen(false)} mode={loginMode} />
    </>
  );
}

export default Navbar;
