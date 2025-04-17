import Container from "@/components/common/container";
import Typography from "@/components/common/typography";
import Image from "next/image";
import React, { ReactNode } from "react";
import WaitlistFlightCurve1Icon from "@/assets/svgs/waitlist-flight-curve.svg";
import WaitlistFlightCurve2Icon from "@/assets/svgs/waitlist-flight-curve-2.svg";
import WaitlistFlightPlaneIcon from "@/assets/svgs/waitlist-flight-plane.svg";
import WaitlistFlightLocationIcon from "@/assets/svgs/waitlist-flight-location.svg";
import cs from "classnames";
import ButtonLink from "../buttonLink";
import { JOIN_WAITLIST_SECTION_ID } from "../joinWaitlist";

interface Props {
  header: string;
  subHeader: ReactNode;
  image: string;
  bgColor?: "purple" | "blue";
  showIcons?: boolean;
  showBtnLink?: boolean;
}

const SectionWithImage = ({
  showIcons,
  header,
  subHeader,
  image,
  bgColor = "purple",
  showBtnLink = true,
}: Props) => {
  return (
    <section className="pt-8 md:py-10">
      <Container>
        <div
          className={cs(
            "relative overflow-hidden text-white rounded-3xl px-6 pt-10 pb-2",
            {
              "bg-purple-base": bgColor === "purple",
              "bg-blue-base": bgColor === "blue",
            }
          )}
        >
          {showIcons && (
            <>
              <WaitlistFlightCurve1Icon className="opacity-40 lg:opacity-70 absolute w-[200px] md:w-[300px] h-[300px] md:h-[400px] top-[73px] md:top-0 left-[-44px] md:left-0" />
              <WaitlistFlightPlaneIcon className="opacity-40 lg:opacity-70 absolute w-[35px] h-[35px] top-[253px] md:top-[256px] left-[155px] md:left-[296px]" />
              <WaitlistFlightCurve2Icon className="opacity-40 lg:opacity-70 absolute w-[200px] md:w-[250px] h-[300px] md:h-[400px] top-[76px] md:top-0 right-[-31px] md:right-0" />
              <WaitlistFlightLocationIcon className="opacity-40 lg:opacity-70 absolute w-[25px] h-[25px] top-[313px] right-[107px] md:right-[184px]" />
            </>
          )}
          <Typography
            variant="body-large"
            className="text-center relative font-bold mb-5 max-w-[650px] mx-auto"
          >
            {header}
          </Typography>
          <Typography className="text-center relative mb-10 max-w-[720px] mx-auto">
            {subHeader}
          </Typography>
          {showBtnLink && (
            <div className="flex justify-center mb-4">
              <ButtonLink
                href={`#${JOIN_WAITLIST_SECTION_ID}`}
                label="Join Waitlist"
                variant="white"
              />
            </div>
          )}
          <div className="w-full md:w-[400px] h-[320px] relative mx-auto">
            <Image
              alt=""
              src={image}
              width={400}
              height={320}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SectionWithImage;
