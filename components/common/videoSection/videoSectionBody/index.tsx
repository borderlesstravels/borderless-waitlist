import React from "react";
import Typography from "../../typography";
import Image from "next/image";

interface Props {
  header: string;
  subHeader: string;
}

const VideoSectionBody = ({ header, subHeader }: Props) => {
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
      <div className="flex justify-center lg:justify-start items-center gap-4">
        <Typography
          variant="body-large"
          className="font-semibold text-grey-text"
        >
          Accredited by:
        </Typography>
        <Image
          alt=""
          src="/images/partner-iata.png"
          width={60}
          height={60}
          className="w-auto h-[30px] md:h-[60px] relative top-[-4px]"
        />
        <Image
          alt=""
          src="/images/partner-ncaa.png"
          width={60}
          height={60}
          className="w-auto h-[30px] md:h-[60px]"
        />
      </div>
    </div>
  );
};

export default VideoSectionBody;
