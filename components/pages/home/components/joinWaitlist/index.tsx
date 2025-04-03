import Container from "@/components/common/container";
import React from "react";
import JoinWaitlistForm from "./joinWaitlistForm";
import Typography from "@/components/common/typography";

const JoinWaitlist = () => {
  return (
    <section className="py-20">
      <Container>
        <div className="w-full max-w-[650px] shadow-lg bg-white mx-auto pt-7 pb-14 px-7 rounded-xl">
          <Typography
            as="h2"
            variant="heading-4"
            tabletVariant="heading-3"
            xlDesktopVariant="heading-1"
            className="text-blue-base text-center font-bold mb-10"
          >
            Join Waitlist <span className="text-purple-base">Now</span>
          </Typography>
          <JoinWaitlistForm />
        </div>
      </Container>
    </section>
  );
};

export default JoinWaitlist;
