import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar";
import Service from "./components/services/Service";
import AllDoctors from "./components/AllDoctors";
import AboutPage from "./components/AboutUs/AboutPage";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Contact from "./components/contact/Contact";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/alldoctors" element={<AllDoctors />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
