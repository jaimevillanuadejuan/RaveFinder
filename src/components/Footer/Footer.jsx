import logo from "../../assets/logos/RaveFinderLogo.svg";
import { Link } from "react-router-dom";
import SocialMedias from "../SocialMedias/SocialMedias";

import "./Footer.scss";
import "../../App.scss";

import { EMAIL_ADDRESS } from "../../constants/constants";

const Footer = () => {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-container footer-container--left">
          <Link className="footer-link" to="/">
            <img src={logo} alt="Ravefinder" className="footer-logo" />
          </Link>
        </div>
        <div className="footer-container footer-container--middle">
          <ul className="footer-links">
            <li className="footer-links__item">
              <Link className="footer-link" to="/support">
                Support
              </Link>
            </li>
            <li className="footer-links__item">
              <a className="footer-link" href={`mailto:${EMAIL_ADDRESS}`}>
                Contact us
              </a>
            </li>
            <li className="footer-links__item">
              <a className="footer-link" href="https://edm.com/">
                Edm News
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-container footer-container--right">
          <div className="social-medias-title">Social medias</div>
          <div className="social-medias-wrapper">
            <SocialMedias />
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; RAVEFINDER -&nbsp;
        {new Date().getFullYear()}
      </div>
    </footer>
  );
};

export default Footer;
