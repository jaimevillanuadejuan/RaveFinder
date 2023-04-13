import { ReactComponent as Spotify } from "../../assets/social_icons/spotify.svg";
import { ReactComponent as Instagram } from "../../assets/social_icons/instagram.svg";
import { ReactComponent as Youtube } from "../../assets/social_icons/youtube.svg";
import { ReactComponent as Website } from "../../assets/social_icons/website.svg";

import "./ArtistListItem.scss";

const ArtistListItem = ({ name, profilePictureUrl, socialLinks, artistId }) => {
  console.log(socialLinks);
  const spotifyPlayerUrl = `https://open.spotify.com/embed/artist/${artistId}`;
  return (
    <div className="artist">
      <img
        className="artist__profile-picture"
        src={profilePictureUrl}
        alt="artist-profile-picture"
      />
      <h3 className="artist__name">{name}</h3>

      {artistId ? (
        <>
          <ul className="artist__socials-list">
            <li className="artist__socials-item">
              <a
                className="link light-link"
                href={socialLinks.find((link) => link.includes("instagram"))}
              >
                <Instagram className="artist__socials-icon" />
              </a>
            </li>
            <li className="artist__socials-item">
              <a
                className="link light-link"
                href={socialLinks.find((link) => link.includes("youtube"))}
              >
                <Youtube className="artist__socials-icon" />
              </a>
            </li>
            <li className="artist__socials-item">
              <a
                className="link light-link"
                href={socialLinks.find((link) => link.includes("spotify"))}
              >
                <Spotify className="artist__socials-icon" />
              </a>
            </li>
            <li className="artist__socials-item">
              <a
                className="link light-link"
                href={socialLinks[socialLinks.length - 1]}
              >
                <Website className="artist__socials-icon" />
              </a>
            </li>
          </ul>
          <iframe
            className="artist__best-tracks-player"
            src={spotifyPlayerUrl}
            allowtransparency="true"
            allow="encrypted-media"
            allowFullScreen=""
          />
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default ArtistListItem;
