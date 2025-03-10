import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { CloserLook } from "./components/CloserLook";
import { CoreValues } from "./components/CoreValues";
import { WhyChoose } from "./components/WhyChoose";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <CloserLook />
      <CoreValues />
      <WhyChoose />
    </div>
  );
}

export default App;
