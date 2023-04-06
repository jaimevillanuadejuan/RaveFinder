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
            events.map(
              (eventItem) => (
                console.log(eventItem),
                (
                  <EventListItem
                    key={eventItem.id}
                    id={eventItem.id}
                    posterUrl={eventItem.images[1].url}
                    date={handleDateFormatChange(
                      eventItem.dates.start.localDate
                    )}
                    name={eventItem.name}
                    location={
                      eventItem._embedded.venues[0].city.name +
                      ", " +
                      eventItem._embedded.venues[0].country.name
                    }
                    startingPrice={
                      eventItem.priceRanges
                        ? eventItem.priceRanges[0].min
                        : "N/A"
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
                )
              )
            )}
        </li>
        ;
      </ul>
    </div>
  );
};

export default EventList;
