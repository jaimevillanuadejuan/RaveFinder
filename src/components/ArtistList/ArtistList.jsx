import ArtistListItem from "../ArtistListItem/ArtistListItem";

import axios from "axios";

import "./ArtistList.scss";
const ArtistList = ({ artistList }) => {
  return (
    <ul className="artist-list">
      {artistList?.map((artist) => {
        return (
          <li key={artist.id} className="artist-list__item">
            <ArtistListItem
              name={artist.name}
              profilePictureUrl={
                artist.images.find((image) => image.ratio === "3_2").url
              }
              socialLinks={[
                artist.externalLinks?.instagram[0].url,
                artist.externalLinks?.youtube[0].url,
                artist.externalLinks?.spotify[0].url,
                artist.externalLinks?.homepage[0].url,
              ]}
              artistId={artist.externalLinks?.spotify[0].url.substring(32, 54)}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ArtistList;
