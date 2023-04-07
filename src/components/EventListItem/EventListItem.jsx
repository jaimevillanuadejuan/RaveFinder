import { Link } from "react-router-dom";
import "./EventListItem.scss";

const EventListItem = ({
  id,
  posterUrl,
  date,
  name,
  location,
  startingPrice,
  ticketSafety,
  purchaseLink,
}) => {
  return (
    <Link to={`/events${id}`}>
      <div className="event">
        <img className="event-poster" src={posterUrl} alt="event-poster" />
        <div className="event-data">
          <p>{date}</p>
          <h3 className="event-title">{name}</h3>
          <p className="event-location">{location}</p>
          <p className="event-start-price">
            Tickets starting at: {startingPrice}
          </p>
        </div>
        <div className="event-buttons">
          <button className="event__purchase-button event__button">
            purchase
          </button>
        </div>
      </div>
    </Link>
  );
};

export default EventListItem;
