import Countdown from "@/components/common/countdown";
import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import PartnersSlider from "@/components/common/partnersSlider";
import SectionWithImage from "@/components/common/sectionWithImage";
import VideoSection from "@/components/common/videoSection";
import React from "react";
import WhyTravel from "./components/whyTravel";
import Meta from "./components/meta";
import HeroSection from "@/components/common/heroSection";

const ToursScreen = () => {
  return (
    <div className="bg-[#FAFBFD]">
      <Meta />
      <Header />
      <HeroSection
        header="STOP Overpaying for Flights -"
        subHeader="Enjoy same luxury and comfort for up to 30% less."
        type="tourists"
      />
      <Countdown />
      <VideoSection />
      <WhyTravel />
      <SectionWithImage
        header="Enjoy 5-Star Travel Without The 5-Star Price"
        image="/images/waitlist-tourists-image.png"
        subHeader="Indulge in an experience that 99.9% will never get at a price that feels almost unbelievable. We handle everything from flight booking, short let reservation, airport transfers. We do the planning, You do the flexing. No last minute - unpleasant surprises."
      />
      <PartnersSlider />
      <Footer />
    </div>
  );
};

export default ToursScreen;
