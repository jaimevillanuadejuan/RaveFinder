import { ReactComponent as Facebook } from "../../assets/social_icons/facebook.svg";
import { ReactComponent as Instagram } from "../../assets/social_icons/instagram.svg";

import { FACEBOOK_PAGE_ID, INSTAGRAM_PAGE_ID } from "../../constants/constants";

import "./SocialMedias.scss";
const SocialMedias = () => {
  return (
    <div className="social-medias">
      <a
        className="dark-link link"
        href={`https://www.facebook.com/${FACEBOOK_PAGE_ID}`}
        aria-label="Facebook"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Facebook />
      </a>
      <a
        className="dark-link link"
        href={`http://instagram.com/${INSTAGRAM_PAGE_ID}`}
        aria-label="Instagram"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Instagram />
      </a>
    </div>
  );
};

export default SocialMedias;
