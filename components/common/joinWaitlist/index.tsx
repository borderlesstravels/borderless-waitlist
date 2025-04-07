import Container from "@/components/common/container";
import React from "react";
import JoinWaitlistForm from "./joinWaitlistForm";
import Typography from "@/components/common/typography";
import { Api } from "@/types";

interface Props {
  bgColor?: "purple" | "blue";
  type: Api.Contact.WaitlistSubscription.Request["type"];
}

export const JOIN_WAITLIST_SECTION_ID = "join-waitlist";

const JoinWaitlist = ({ bgColor = "purple", type }: Props) => {
  return (
    <section className="py-20" id={JOIN_WAITLIST_SECTION_ID}>
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
          <JoinWaitlistForm bgColor={bgColor} type={type} />
        </div>
      </Container>
    </section>
  );
};

export default JoinWaitlist;
