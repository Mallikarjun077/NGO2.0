import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Screens/Home";
import About from "./Screens/About";
import Contact from "./Screens/Contact";
import Gallery from "./Screens/Gallery";
import Donate from "./Screens/Donate";
import  Activity  from "./Screens/Activity";
import Footer from "./Components/Footer";


function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/activity/:type" element={<Activity />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
