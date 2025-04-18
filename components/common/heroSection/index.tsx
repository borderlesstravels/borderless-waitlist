import React from "react";
import Container from "../container";
import HeroSectionBody from "./heroSectionBody";
import JoinWaitlist from "../joinWaitlist";

interface Props {
  header: string;
  subHeader: string;
  type: "general" | "business" | "tourists";
}

const HeroSection = ({ header, subHeader, type }: Props) => {
  return (
    <section className="bg-[#FAF1FA] py-10 md:py-20">
      <Container className="flex flex-col lg:flex-row items-center gap-8">
        <HeroSectionBody header={header} subHeader={subHeader} />
        <div className="flex-1">
          <JoinWaitlist type={type} />
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
