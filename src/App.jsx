import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import video from "./assets/videos";

import Home from "./pages/Home/Home";
import Events from "./pages/Events/Events";
import EventInfo from "./pages/EventInfo/EventInfo";
import Support from "./pages/Support/Support";
import Header from "./components/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:id" element={<EventInfo />} />
        <Route path="/support" element={<Support />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
