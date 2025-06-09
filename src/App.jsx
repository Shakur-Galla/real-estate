import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from './components/Footer';
function App() {
  return (
    <>
      <div className="bg-[#141414] overflow-x-hidden">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer/>
      </div>
    </>
  );
}

export default App;
