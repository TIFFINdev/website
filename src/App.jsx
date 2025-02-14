import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BringToCity from "./components/BringToCity";
import Download from "./components/Download";
import Footer from "./components/Footer";
import CertificateVerifier from "./components/CertificateVerifier";
import CertificateViewer from "./components/CertificateViewer";
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="min-h-screen bg-white">
              <div
                className="lg:h-screen flex flex-col"
                style={{
                  backgroundImage: `url('/GROUP150.png')`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center top -70px",
                }}
              >
                <Navbar />
                <div className="flex-1">
                  <Hero />
                </div>
              </div>
              <BringToCity />
              <Download />
              <Footer />
              <Analytics/>
            </div>
          }
        />
        <Route
          path="/certificates"
          element={
            <>
              <Navbar />
              <CertificateVerifier />
              <Footer/>
              <Analytics/>
            </>
          }
        />
        <Route
          path="/certificate/:id"
          element={
            <>
              <Navbar />
              <CertificateViewer />
              <Footer/>
              <Analytics/>
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;