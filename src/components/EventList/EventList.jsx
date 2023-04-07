import EventListItem from "../EventListItem/EventListItem";
import "./EventList.scss";
const EventList = ({ events }) => {
  //We create a handler to convert the date format to pass it as Day, Month, Year

  const handleDateFormatChange = (numericDate) => {
    const dateWithSlashes = numericDate.split("-");
    const newDate = new Date(
      dateWithSlashes[0],
      dateWithSlashes[1],
      dateWithSlashes[2]
    );
    // request a weekday along with a long date
    const options = {
      weekday: "long",
      month: "long",
      day: "numeric",
    };
    return newDate.toLocaleDateString("en-US", options);
  };
  return (
    <div className="events-list--big-screens">
      <ul className="events-list">
        <li className="events-list__item">
          {events.length &&
            events.map((eventItem) => {
              return (
                <EventListItem
                  key={eventItem.id}
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
                      eventItem._embedded.venues[0].country.name
                  }
                  startingPrice={
                    eventItem.priceRanges ? eventItem.priceRanges[0].min : "N/A"
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
                  // moreInfoLink={eventItem?.products[0].url}
                />
              );
            })}
        </li>
        ;
      </ul>
    </div>
  );
};

export default EventList;
