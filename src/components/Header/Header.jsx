import React, { useState } from "react";

import { Link } from "react-router-dom";

import { ReactComponent as Bars } from "../../assets/icons/bars.svg";
import { ReactComponent as Times } from "../../assets/icons/times.svg";
import SocialMedias from "../SocialMedias/SocialMedias";

import logo from "../../assets/logos/RaveFinderLogo.svg";
import icon from "../../assets/icons/RaveFinderIcon.svg";

import { EMAIL_ADDRESS } from "../../constants/constants";

import "./Header.scss";

const Header = () => {
  const [showSideDrawer, setShowSideDrawer] = useState(false);

  const sideDrawerOpenHandler = () => {
    setShowSideDrawer(true);
  };

  const sideDrawerCloseHandler = () => {
    setShowSideDrawer(false);
  };

  return (
    <header>
      <div className="header">
        <Bars className="bars" onClick={sideDrawerOpenHandler} />
        <Link to="/" className="logo-link">
          <img src={logo} alt="RaveFinder Logo" className="logo" />
        </Link>
      </div>

      {showSideDrawer && (
        <div className="header-block">
          <div className="header-content">
            <div className="header-container">
              <Times className="times" onClick={sideDrawerCloseHandler} />
            </div>
            <nav className="header-container">
              <Link
                to="/support"
                className="nav-link"
                onClick={sideDrawerCloseHandler}
              >
                Support
              </Link>
              <a className="nav-link" href={`mailto:${EMAIL_ADDRESS}`}>
                Contact us
              </a>
              <Link
                to="/"
                className="logo-link"
                onClick={sideDrawerCloseHandler}
              >
                <img src={icon} alt="icon" className="icon" />
              </Link>
            </nav>
            <div className="header-container">
              <div className="social-medias-container">
                <SocialMedias />
              </div>
            </div>
            <div className="header-container"></div>
            <div className="header-container"></div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
