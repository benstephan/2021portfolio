import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../Assets/Logo";
import ThemeColorToggle from './ThemeColorToggle/ThemeColorToggle';

export default function Header() {
  const [navStatus, setNavStatus] = useState(false);
  const [headerChange, setHeaderChange] = useState(false);
  const headerScroll = () => {
    if(window.scrollY > 0){
      setHeaderChange(true);
    }
    if(window.scrollY === 0){
      setHeaderChange(false);
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', headerScroll);
  }, [])
  return (
    <div className={headerChange ? 'main-header fixed' : 'main-header'}>
      <div className="main-header__logo">
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <div className="main-header__nav">
        <div className="main-header__nav__mobile-menu">
          <button onClick={() => setNavStatus(!navStatus)}>
            <FontAwesomeIcon icon={navStatus ? faTimes : faBars} />
          </button>
        </div>
        <nav className={navStatus && "show"}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/posts">Blog</Link>
          <ThemeColorToggle />
        </nav>
      </div>
      <div className={navStatus ? `overlay show` : `overlay`}></div>
    </div>
  );
}
