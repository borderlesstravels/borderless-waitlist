import React from "react";
import Header from "./components/header";
import VideoSection from "./components/videoSection";
import JoinWaitlist from "./components/joinWaitlist";
import Footer from "./components/footer";
import Countdown from "./components/countdown";
import FlightsInfo from "./components/flightsInfo";
import PartnersSlider from "./components/partnersSlider";

const HomeScreen = () => {
  return (
    <div className="bg-[#FAFBFD]">
      <Header />
      <VideoSection />
      <Countdown />
      <FlightsInfo />
      <JoinWaitlist />
      <PartnersSlider />
      <Footer />
    </div>
  );
};

export default HomeScreen;
