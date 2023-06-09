import { useEffect } from "react";
import EventListItem from "../EventListItem/EventListItem";
import { ReactComponent as Filter } from "../../assets/icons/filter.svg";
import "./EventList.scss";
const EventList = ({ events, handleSetCurrentVideo }) => {
  //We create a handler to convert the date format to pass it as Day, Month, Year

  const handleDateFormatChange = (numericDate) => {
    const dateWithSlashes = numericDate.split("-");
    const newDate = new Date(
      dateWithSlashes[0],
      dateWithSlashes[1],
      dateWithSlashes[2]
    );
    // request a date with a day and month
    const options = {
      month: "short",
      day: "2-digit",
    };
    return newDate.toLocaleDateString("en-US", options).split(" ");
  };

  return (
    <>
      {/* {events.length ? (
        <div className="events-filter__wrapper">
          <h4 className="events-filter__text">filter by</h4>
          <Filter className="events-filter__icon" />
        </div>
      ) : (
        ""
      )} */}

      <ul className="events-list">
        {events.map((eventItem) => {
          return (
            <li key={eventItem.id} className="events-list__item">
              <EventListItem
                handleSetCurrentVideo={handleSetCurrentVideo}
                id={eventItem.id}
                posterUrl={
                  eventItem.images
                    ? eventItem.images.find((image) => image.ratio === "3_2")
                        .url
                    : "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                }
                date={
                  eventItem.dates
                    ? handleDateFormatChange(eventItem.dates.start.localDate)
                    : ""
                }
                name={eventItem.name}
                location={
                  eventItem._embedded &&
                  eventItem._embedded.venues[0].city.name +
                    ", " +
                    eventItem._embedded.venues[0].country.name +
                    " - " +
                    eventItem._embedded.venues[0].name
                }
                info={eventItem._embedded.venues[0].generalInfo?.generalRule}
                startingPrice={
                  eventItem.priceRanges ? eventItem.priceRanges[0].min : "N/A"
                }
                maxPrice={
                  eventItem.priceRanges ? eventItem.priceRanges[0].max : "N/A"
                }
                ticketSafety={
                  eventItem.ticketing
                    ? eventItem.ticketing.safeTix.enabled
                    : eventItem.url &&
                      eventItem.url.includes("https://www.ticketmaster.com")
                    ? true
                    : false
                }
                purchaseLink={eventItem.url}
                additionalServices={
                  eventItem.products ? eventItem.products[0].url : ""
                }
                artistList={eventItem._embedded.attractions}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default EventList;
