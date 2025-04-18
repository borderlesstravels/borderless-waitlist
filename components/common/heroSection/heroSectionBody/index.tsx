import React from "react";
import Typography from "../../typography";
import Image from "next/image";

interface Props {
  header: string;
  subHeader: string;
}

const HeroSectionBody = ({ header, subHeader }: Props) => {
  return (
    <div className="flex-1 max-w-[500px]">
      <Typography
        as="h1"
        variant="heading-3"
        tabletVariant="heading-1"
        xlDesktopVariant="display-1"
        className="text-center lg:text-left font-bold max-w-[750px] mx-auto text-black/80 mb-0"
      >
        {header}
        <br className="hidden md:inline" />
      </Typography>
      <Typography
        as="h1"
        variant="body-medium"
        tabletVariant="body-large"
        desktopVariant="heading-4"
        className="text-center lg:text-left max-w-[750px] mx-auto text-grey-text mb-8"
      >
        <span className="">{subHeader}</span>
      </Typography>
      <div className="flex justify-center lg:justify-start">
        <Image
          alt=""
          src="/images/hero-partners.png"
          width={200}
          height={60}
          className="w-auto h-[30px] md:h-[60px] object-contain"
        />
      </div>
    </div>
  );
};

export default HeroSectionBody;
