import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import Slider from "./components/Slider";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Slider />
        <Menu />
        <About />
        <Contact />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
