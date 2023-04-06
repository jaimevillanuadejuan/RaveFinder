import EventList from "../../components/EventList/EventList";
import SearchForm from "../../components/SearchForm/SearchForm";
import "./Events.scss";

const Events = ({ events, handleSetEvents }) => {
  return (
    <>
      <SearchForm handleSetEvents={handleSetEvents} />
      <div className="events">
        <EventList events={events} />
      </div>
    </>
  );
};

export default Events;
