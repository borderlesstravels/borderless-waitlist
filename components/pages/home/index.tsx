import React from "react";
import JoinWaitlist from "@/components/common/joinWaitlist";
import PartnersSlider from "@/components/common/partnersSlider";
import Header from "@/components/common/header";
import VideoSection from "@/components/common/videoSection";
import Countdown from "@/components/common/countdown";
import Footer from "@/components/common/footer";
import SectionWithImage from "@/components/common/sectionWithImage";
import Meta from "./components/meta";

const HomeScreen = () => {
  return (
    <div className="bg-[#FAFBFD]">
      <Meta />
      <Header />
      <VideoSection
        header="STOP Overpaying for Flights -"
        subHeader="Enjoy same luxury and comfort for up to 30% less."
      />
      <Countdown />
      <SectionWithImage
        header="Book flights with ease and let's turn every of your journey to
            a memorable adventure."
        image="/images/waitlist-flight-treasure.png"
        subHeader="Borderless Travels is launching soon and we are offering up to 30%
            less for both local and international flights. Exclusive to the
            first 1,000 people. Join the waitlist NOW to get early access!"
        showIcons
      />
      <JoinWaitlist type="general" />
      <PartnersSlider />
      <Footer />
    </div>
  );
};

export default HomeScreen;
