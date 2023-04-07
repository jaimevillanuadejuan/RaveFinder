import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import video from "./assets/videos";

import Home from "./pages/Home/Home";
import Events from "./pages/Events/Events";
import EventInfo from "./pages/EventInfo/EventInfo";
import Support from "./pages/Support/Support";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { useState } from "react";
function App() {
  // We declare our state variables to pass the corresponding data to each page
  const [events, setEvents] = useState([]);

  const handleSetEvents = (events) => {
    setEvents(events);
  };
  // console.log(events);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home handleSetEvents={handleSetEvents} />} />
        <Route
          path="/events"
          element={<Events events={events} handleSetEvents={handleSetEvents} />}
        />
        <Route path="/events/:id" element={<EventInfo />} />
        <Route path="/support" element={<Support />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
