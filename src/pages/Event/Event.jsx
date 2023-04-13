import "./Event.scss";
import ArtistList from "../../components/ArtistList/ArtistList";
const Event = ({
  id,
  posterUrl,
  date,
  name,
  location,
  info,
  startingPrice,
  maxPrice,
  ticketSafety,
  purchaseLink,
  additionalServices,
  artistList,
}) => {
  return (
    <div className="event-page">
      <div className="event-page__wrapper">
        <h3 className="event-page__title">Event Info</h3>
        <div className="event-page__block">
          <img
            className="event-page__poster"
            src={posterUrl}
            alt="event-page-poster"
          />
          <div className="event-page__info">
            <h2 className="event-page__name">{name}</h2>
            <div className="event-page__container">
              <div className="event-page__text">
                <h4 className="event-page__location">{location}</h4>
                <p className="event-page__start-price">
                  Price range:
                  <span className="event__start-price-value">
                    {" " + startingPrice + " "}
                  </span>
                  to
                  <span className="event__max-price-value">
                    {" " + maxPrice}
                  </span>
                </p>
                <p className="event-page__website-safety">
                  Vendor website's safety:
                  <span
                    className={
                      ticketSafety
                        ? "event__website-safety--safe"
                        : "event__website-safety--unknown"
                    }
                  >
                    {ticketSafety ? "  SAFE" : " UNKNOWN"}
                  </span>
                </p>
              </div>
              <div className="event-page__buttons">
                <a className="event__link" href={purchaseLink}>
                  <button className="button event__dark-button" type="button">
                    purchase
                  </button>
                </a>
                <a
                  /*If there's a parking services url in the event we'll apply the style to the
                  additional services button link. If not we'll make the link that
                  wraps the additional services button invisible*/
                  className={
                    additionalServices !== ""
                      ? "event__link"
                      : "event__link--modifier"
                  }
                  href={additionalServices}
                >
                  <button className="button event__light-button" type="button">
                    additional services
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <p className="event-page__description">{info}</p>
      </div>
      <section className="event-page__artists">
        <h3 className="event-page__artists-title">Performing Artists</h3>
        <ArtistList artistList={artistList} />
      </section>
    </div>
  );
};

export default Event;
