"use client";

import Container from "@/components/common/container";
import Typography from "@/components/common/typography";
import React, { useEffect, useState } from "react";
import CountdownItem from "./countdownItem";
import { calculateTimeLeft } from "@/utils/calculateTimeLeft";

const TARGET_DATE = "2025-05-15T00:00:00";

export interface ITimeLeft {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState<ITimeLeft>();

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(TARGET_DATE));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="pt-14 pb-20 text-grey-text">
      <Container>
        <Typography
          as="h2"
          variant="heading-4"
          tabletVariant="heading-3"
          xlDesktopVariant="heading-1"
          className="underline uppercase text-grey-text mb-8 font-bold mx-auto w-max"
        >
          Launching SOON
        </Typography>
        <div className="max-w-[800px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-7 md:gap-10">
          <CountdownItem label="Days" value={timeLeft?.days || "--"} />
          <CountdownItem label="Hours" value={timeLeft?.hours || "--"} />
          <CountdownItem label="Minutes" value={timeLeft?.minutes || "--"} />
          <CountdownItem label="Seconds" value={timeLeft?.seconds || "--"} />
        </div>
      </Container>
    </section>
  );
};

export default Countdown;
