import React from "react";
import Container from "@/components/common/container";
import Typography from "@/components/common/typography";
import { partnersData } from "./data/partners";

const PartnersSlider = () => {
  return (
    <section className="pb-20 overflow-hidden">
      <Container>
        <Typography
          as="h2"
          variant="heading-4"
          tabletVariant="heading-3"
          xlDesktopVariant="heading-1"
          className="text-blue-base text-center font-bold mb-3 lg:mb-10"
        >
          Accreditations and <span className="text-purple-base">Partners</span>
        </Typography>
      </Container>
      <div className="flex gap-10 md:gap-20 items-center">
        <div className="flex items-center gap-10 md:gap-20 animate-marquee w-max">
          {[...partnersData, ...partnersData, ...partnersData].map(
            (item, index) => (
              <div key={index}>{item.item}</div>
            )
          )}
        </div>
        <div className="flex items-center gap-10 md:gap-20 animate-marquee w-max">
          {[...partnersData, ...partnersData, ...partnersData].map(
            (item, index) => (
              <div key={index}>{item.item}</div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default PartnersSlider;
