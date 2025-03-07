import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { CloserLook } from "./components/CloserLook";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <CloserLook />
    </div>
  );
}

export default App;
