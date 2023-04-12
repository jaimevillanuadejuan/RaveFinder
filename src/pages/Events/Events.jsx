import EventList from "../../components/EventList/EventList";
import SearchForm from "../../components/SearchForm/SearchForm";
import "./Events.scss";

const Events = ({
  events,
  handleSetEvents,
  handleSetCurrentVideo,
  startingPrice,
}) => {
  return (
    <>
      <SearchForm handleSetEvents={handleSetEvents} />
      <div className="events">
        <EventList
          events={events}
          handleSetCurrentVideo={handleSetCurrentVideo}
        />
      </div>
    </>
  );
};

export default Events;
