import React from "react";
import Navbar from "./components/Navbar";
import Wish from "./components/Wish";
import Bestdeals from "./components/Bestdeals";
import Donates from "./Donates";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";


function App() {
  return (
    <>
    <Navbar/>
    <Wish/>
    <Bestdeals/>
    <Donates/>
    <Testimonial/>
    <Contact/>
    </>
  );
}

export default App;
