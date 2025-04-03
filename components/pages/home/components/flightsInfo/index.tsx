import Container from "@/components/common/container";
import Typography from "@/components/common/typography";
import Image from "next/image";
import React from "react";
import WaitlistFlightCurve1Icon from "@/assets/svgs/waitlist-flight-curve.svg";
import WaitlistFlightCurve2Icon from "@/assets/svgs/waitlist-flight-curve-2.svg";
import WaitlistFlightPlaneIcon from "@/assets/svgs/waitlist-flight-plane.svg";
import WaitlistFlightLocationIcon from "@/assets/svgs/waitlist-flight-location.svg";

const FlightsInfo = () => {
  return (
    <section className="pt-8 md:py-10">
      <Container>
        <div className="relative bg-purple-base overflow-hidden text-white rounded-3xl px-6 pt-10 pb-2">
          <WaitlistFlightCurve1Icon className="opacity-40 lg:opacity-70 absolute w-[200px] md:w-[300px] h-[300px] md:h-[400px] top-[73px] md:top-0 left-[-44px] md:left-0" />
          <WaitlistFlightPlaneIcon className="opacity-40 lg:opacity-70 absolute w-[35px] h-[35px] top-[253px] md:top-[256px] left-[155px] md:left-[296px]" />
          <WaitlistFlightCurve2Icon className="opacity-40 lg:opacity-70 absolute w-[200px] md:w-[250px] h-[300px] md:h-[400px] top-[76px] md:top-0 right-[-31px] md:right-0" />
          <WaitlistFlightLocationIcon className="opacity-40 lg:opacity-70 absolute w-[25px] h-[25px] top-[313px] right-[107px] md:right-[184px]" />
          <Typography
            variant="body-large"
            className="text-center relative font-bold mb-5 max-w-[650px] mx-auto"
          >
            Book flights with ease and let&apos;s turn every of your journey to
            a memorable adventure.
          </Typography>
          <Typography className="text-center relative mb-10 max-w-[720px] mx-auto">
            Borderless Travels is launching soon and we are offering up to 30%
            less for both local and international flights. Exclusive to the
            first 1,000 people. Join the waitlist NOW to get early access!
          </Typography>
          <div className="w-full md:w-[400px] h-[320px] relative mx-auto">
            <Image
              alt=""
              src="/images/waitlist-flight-treasure.png"
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

export default FlightsInfo;
