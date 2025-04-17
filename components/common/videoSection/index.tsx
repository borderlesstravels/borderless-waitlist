"use client";

import Container from "@/components/common/container";
import React, { Suspense } from "react";
import ReactPlayer from "react-player";
import useSettle from "@/hooks/utils/useSettle";
import VideoSectionBody from "./videoSectionBody";

interface Props {
  header: string;
  subHeader: string;
}

const WAITLIST_VIDEO_URL = "https://youtu.be/EIgqKUASR3A";

const VideoSection = ({ header, subHeader }: Props) => {
  const { isSettled } = useSettle();

  return (
    <section className="bg-[#FAF1FA] py-20">
      <Container className="flex items-center gap-8">
        <VideoSectionBody header={header} subHeader={subHeader} />
        <div className="flex-1 relative bg-grey-text rounded-xl overflow-hidden min-h-[300px] md:min-h-[480px]">
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
