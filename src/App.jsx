import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BringToCity from "./components/BringToCity";
import Download from "./components/Download";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <div className="h-screen flex flex-col">
        <Navbar />
        <div className="flex-1">
          <Hero />
        </div>
      </div>
      <BringToCity />
      <Download />
      <Footer />
    </div>
  );
}

export default App;
