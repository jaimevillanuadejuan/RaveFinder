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
function App() {
  // We declare our state variables to pass the corresponding data to each page
  const [events, setEvents] = useState([]);
  const [currentEvent, setCurrentEvent] = useState({});

  /*We create our handlers to set the EventList and currentEvent state 
  variables from other components passing them through props */

  const handleSetEvents = (events) => {
    setEvents(events);
  };

  const handleSetCurrentVideo = (currentEvent) => {
    setCurrentEvent(currentEvent);
    console.log(currentEvent);
  };

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home handleSetEvents={handleSetEvents} />} />
        <Route
          path="/events"
          element={
            <Events
              events={events}
              handleSetEvents={handleSetEvents}
              handleSetCurrentVideo={handleSetCurrentVideo}
            />
          }
        />
        <Route
          path="/events/:id"
          element={
            <Event
              id={currentEvent.id}
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
