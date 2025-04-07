import Container from "@/components/common/container";
import Typography from "@/components/common/typography";
import Image from "next/image";
import React from "react";
import WhyTravelList from "../whyTravelList";

const WhyTravel = () => {
  return (
    <section className="py-14">
      <Container className="flex flex-col lg:flex-row gap-10">
        <div className="flex-1 flex justify-center lg:block lg:max-w-[500px]">
          <Image
            alt=""
            src="/images/business-why-travel.png"
            width={500}
            height={500}
            className="w-full h-[300px] md:h-[500px] object-contain"
          />
        </div>
        <div className="flex-1">
          <Typography
            as="h2"
            variant="heading-4"
            tabletVariant="heading-3"
            xlDesktopVariant="heading-1"
            className="font-bold mb-5"
          >
            Why Travel With Borderless?
          </Typography>
          <Typography className="mb-8">
            Borderless provides you with a{" "}
            <span className="font-bold">
              top-notch dedicated customer service
            </span>{" "}
            agent that takes care of all your travel needs meticulously without
            having to send multiple DM&apos;s, several calls or worry about fl
            ight delays, hotel issues, transfers or any last minute surprises.
            The only thing you have to do is show up and travel like a boss that
            you are.
          </Typography>
          <WhyTravelList />
        </div>
      </Container>
    </section>
  );
};

export default WhyTravel;
