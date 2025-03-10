import React from "react";
import { Hero } from "../components/Hero";
import { Features } from "../components/Features";
import { CloserLook } from "../components/CloserLook";
import { CoreValues } from "../components/CoreValues";
import { WhyChoose } from "../components/WhyChoose";
import { HowItWorks } from "../components/HowItWorks";
import { Contact } from "../components/Contact";

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <CloserLook />
      <CoreValues />
      <WhyChoose />
      <HowItWorks />
      <Contact />
    </div>
  );
};

export default Home;
