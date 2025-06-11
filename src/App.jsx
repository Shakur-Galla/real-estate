import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from './components/Footer';
import About from "./pages/About";
import Properties from "./pages/Properties";
import PropertyDetail from './pages/PropertyDetail'
function App() {
  return (
    <>
      <div className="bg-[#141414] overflow-x-hidden">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/property-detail" element={<PropertyDetail />} />
        </Routes>
        <Footer/>
      </div>
    </>
  );
}

export default App;
