import EventList from "../../components/EventList/EventList";
import SearchForm from "../../components/SearchForm/SearchForm";
import { Helmet } from "react-helmet";

import "./Events.scss";

const Events = ({
  events,
  handleSetEvents,
  handleSetCurrentVideo,
  handleSetSearchedArtist,
  searchedArtist,
}) => {
  <Helmet>
    <title>RaveFinder Events Page</title>
    <meta name="description" content="RaveFinder Events Page" />
  </Helmet>;
  return (
    <>
      <SearchForm
        handleSetEvents={handleSetEvents}
        handleSetSearchedArtist={handleSetSearchedArtist}
      />
      <div className="events">
        <EventList
          events={events}
          handleSetCurrentVideo={handleSetCurrentVideo}
          handleSetEvents={handleSetEvents}
          searchedArtist={searchedArtist}
        />
      </div>
    </>
  );
};

export default Events;
