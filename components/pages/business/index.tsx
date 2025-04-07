import Countdown from "@/components/common/countdown";
import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import JoinWaitlist from "@/components/common/joinWaitlist";
import PartnersSlider from "@/components/common/partnersSlider";
import SectionWithImage from "@/components/common/sectionWithImage";
import VideoSection from "@/components/common/videoSection";
import React from "react";
import WhyTravel from "./components/whyTravel";

const BusinessScreen = () => {
  return (
    <div className="bg-[#FAFBFD]">
      <Header />
      <VideoSection
        header="We Handle Everything, You Just Show Up"
        subHeader="No stress, confusion or last-minute surprises."
      />
      <JoinWaitlist bgColor="blue" type="business" />
      <WhyTravel />
      <SectionWithImage
        header="We're launching exclusively for a select few business travelers who value efficiency, class, and peace of mind."
        image="/images/waitlist-business-image.png"
        subHeader="Join our waitlist so you can be the first to know when we launch."
        bgColor="blue"
      />
      <Countdown />
      <PartnersSlider />
      <Footer bgColor="blue" />
    </div>
  );
};

export default BusinessScreen;
