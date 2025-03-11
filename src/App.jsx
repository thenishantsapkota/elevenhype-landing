import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import Home from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiesPolicy from "./pages/CookiesPolicy";
import DataDeletion from "./pages/DataDeletion";
import InvestorRelations from "./pages/InvestorRelations";
import MarketingDisclaimer from "./pages/MarketingDisclaimer";
import Accessibility from "./pages/Accessibility";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes
      
      >
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/cookies-policy" element={<CookiesPolicy />} />
        <Route path="/data-deletion" element={<DataDeletion />} />
        <Route path="/investor-relations" element={<InvestorRelations />} />
        <Route path="/marketing-disclaimer" element={<MarketingDisclaimer />} />
        <Route path="/accessibility" element={<Accessibility />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;