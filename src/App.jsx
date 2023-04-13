import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import video from "./assets/videos";

import Home from "./pages/Home/Home";
import Events from "./pages/Events/Events";
import Event from "./pages/Event/Event";
import Support from "./pages/Support/Support";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { useState } from "react";
import { Helmet } from "react-helmet";

function App() {
  <Helmet>
    <title>RaveFinder</title>
    <meta
      name="description"
      content="Ravefinder application is a promotional search engine where users can look for concerts where their favorite artists are playing, find a safe purchase link to buy the ticket for that event and find out about other upcoming events."
    />
  </Helmet>;

  // We declare our state variables to pass the corresponding data to each page
  const [events, setEvents] = useState([]);
  const [currentEvent, setCurrentEvent] = useState({});
  const [searchedArtist, setSearchedArtist] = useState("");

  /*We create our handlers to set the EventList and currentEvent state 
  variables from other components passing them through props */

  const handleSetEvents = (events) => {
    setEvents(events);
  };

  const handleSetCurrentVideo = (currentEvent) => {
    setCurrentEvent(currentEvent);
    console.log(currentEvent);
  };

  const handleSetSearchedArtist = (searchedTerm) => {
    setSearchedArtist(searchedTerm);
    console.log(searchedArtist);
  };

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              handleSetEvents={handleSetEvents}
              handleSetSearchedArtist={handleSetSearchedArtist}
            />
          }
        />
        <Route
          path="/events"
          element={
            <Events
              events={events}
              handleSetEvents={handleSetEvents}
              handleSetCurrentVideo={handleSetCurrentVideo}
              handleSetSearchedArtist={handleSetSearchedArtist}
              searchedArtist={searchedArtist}
            />
          }
        />
        <Route
          path="/events/:id"
          element={
            <Event
              searchedArtist={searchedArtist}
              posterUrl={currentEvent.posterUrl}
              date={currentEvent.date}
              name={currentEvent.name}
              location={currentEvent.location}
              info={currentEvent.info}
              startingPrice={currentEvent.startingPrice}
              maxPrice={currentEvent.maxPrice}
              ticketSafety={currentEvent.ticketSafety}
              purchaseLink={currentEvent.purchaseLink}
              additionalServices={currentEvent.additionalServices}
              artistList={currentEvent.artistList}
            />
          }
        />
        <Route path="/support" element={<Support />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
