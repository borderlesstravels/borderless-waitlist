"use client";

import Container from "@/components/common/container";
import Typography from "@/components/common/typography";
import React, { Suspense } from "react";
import ReactPlayer from "react-player";
import useSettle from "@/hooks/utils/useSettle";

interface Props {
  header: string;
  subHeader: string;
}

const WAITLIST_VIDEO_URL = "https://youtu.be/EIgqKUASR3A";

const VideoSection = ({ header, subHeader }: Props) => {
  const { isSettled } = useSettle();

  return (
    <section className="bg-[#FAF1FA] py-10">
      <Container>
        <Typography
          as="h1"
          variant="heading-4"
          tabletVariant="heading-1"
          className="text-center font-bold max-w-[750px] mx-auto text-grey-text mb-0"
        >
          {header}
          <br className="hidden md:inline" />
        </Typography>
        <Typography
          as="h1"
          variant="body-large"
          tabletVariant="heading-4"
          className="text-center font-bold max-w-[750px] mx-auto text-grey-text mb-8"
        >
          <span className="text-purple-base">{subHeader}</span>
        </Typography>
        <div className="relative bg-grey-text rounded-xl overflow-hidden min-h-[300px] md:min-h-[550px]">
          {isSettled && (
            <Suspense fallback={null}>
              <ReactPlayer
                url={WAITLIST_VIDEO_URL}
                controls
                className="absolute top-0 left-0 w-full h-full object-cover"
                width="100%"
                height="100%"
                config={{
                  youtube: {
                    playerVars: {
                      /**
                       * This will show related videos from the channel
                       * https://developers.google.com/youtube/player_parameters?playerVersion=HTML5#rel
                       */
                      rel: 0,
                    },
                  },
                }}
              />
            </Suspense>
          )}
        </div>
      </Container>
    </section>
  );
};

export default VideoSection;
