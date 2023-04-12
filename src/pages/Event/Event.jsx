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
}) => {
  return (
    <>
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
                  <div className="event-page__ticket-info">
                    <p className="event__start-price">
                      Price range:
                      <span className="event__start-price-value">
                        {" " + startingPrice + " "}
                      </span>
                      to
                      <span className="event__max-price-value">
                        {" " + maxPrice}
                      </span>
                    </p>
                    <p className="event__website-safety">
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
                </div>
                <div className="event-page__buttons">
                  <a className="event__link" href={purchaseLink}>
                    <button
                      className="event__button button event__purchase-button"
                      type="button"
                    >
                      PURCHASE
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="event-page__description">{info}</p>
      </div>
      <ArtistList />
    </>
  );
};

export default Event;
