import React from "react";
import ReactDOM from "react-dom/client";
import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar.jsx";
import History from "./components/History.jsx";
import Climb from "./components/Climb.jsx";
import Footer from "./components/Footer.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <Hero />
    <History />
    <Climb />
    <Footer />
  </React.StrictMode>
);
