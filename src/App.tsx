import React from "react";
import Header from "./components/Header";
import Hero from "./pages/Hero";
import About from "./pages/About";
import AppPreview from "./pages/AppPreview";
import TargetAudience from "./pages/TargetAudience";
import WorkerFeatures from "./pages/WorkerFeatures";
import MatchingBenefit from "./pages/MatchingBenefit";
import ReviewSystem from "./pages/ReviewSystem";
import DailyPayment from "./pages/DailyPayment";
import DownloadCTA from "./pages/DownloadCTA";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-400 to-blue-800">
      <Header />
      <Hero />
      <About />
      <AppPreview />
      <TargetAudience />
      <WorkerFeatures />
      <MatchingBenefit />
      <ReviewSystem />
      <DailyPayment />
      <DownloadCTA />
      <Footer />
    </div>
  );
}

export default App;
