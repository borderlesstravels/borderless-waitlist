import Container from "@/components/common/container";
import Typography from "@/components/common/typography";
import Image from "next/image";
import React from "react";
import WhyTravelItem from "../whyTravelItem";

const WhyTravel = () => {
  return (
    <section className="py-14 bg-white">
      <Container className="flex flex-col lg:flex-row items-center gap-10">
        <div className="flex-1 max-w-[500px]">
          <Typography variant="body-small" className="uppercase font-semibold">
            Take A Tour
          </Typography>
          <Typography
            as="h2"
            variant="heading-4"
            tabletVariant="heading-3"
            xlDesktopVariant="heading-1"
            className="font-bold mb-5"
          >
            Why Travel With Borderless?
          </Typography>
          <div className="space-y-8">
            <WhyTravelItem label="At Borderless, we give you not just an escape but an experience that will “blow your mind” and make your loved one's scream “God When”" />
            <WhyTravelItem label="You work so hard, you deserve to disappear somewhere beautiful and receive that Baby Girl and Odogwu Treatment your heart truly desires.”" />
          </div>
        </div>
        <div className="flex-1 flex justify-center lg:block lg:max-w-[500px]">
          <Image
            alt=""
            src="/images/tours-why-travel.png"
            width={500}
            height={500}
            className="w-full h-[300px] md:h-[500px] object-contain"
          />
        </div>
      </Container>
    </section>
  );
};

export default WhyTravel;
