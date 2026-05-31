
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Trending from "./pages/Trending";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Navbar />
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
      <Route path="/About" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
