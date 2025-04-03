"use client";

import React from "react";
import Container from "../container";
import Typography from "../typography";
import ButtonLink from "../buttonLink";
import { Path } from "@/navigations/routes";
import Button from "../button";
import Image from "next/image";

interface Props {
  bigHeader?: string;
  header: string;
  paragraph: string;
  showReloadBtn?: boolean;
}

const ErrorUi = ({
  header,
  bigHeader = "OOPS!",
  paragraph,
  showReloadBtn,
}: Props) => {
  const handleRefresh = () => {
    window?.location?.reload();
  };

  return (
    <section className="relative py-16 text-grey-text">
      <Container className="relative">
        <div className="flex flex-col items-center">
          <Image
            alt=""
            src="/images/logo-black.png"
            width={150}
            height={40}
            className="w-[150px] h-[40px] object-contain"
          />
          <Typography className="font-bold !text-[50px] md:!text-[120px] text-purple-base">
            {bigHeader}
          </Typography>
          <Typography
            variant="heading-4"
            tabletVariant="heading-1"
            className="font-bold text-center"
          >
            {header}
          </Typography>
          <Typography
            variant="body"
            tabletVariant="body-large"
            className="text-center font-medium mb-10 max-w-[650px]"
          >
            {paragraph}
          </Typography>
          <div className="flex items-center gap-5">
            {showReloadBtn && (
              <Button
                onClick={handleRefresh}
                label="Try again"
                variant="purple-outline"
              />
            )}
            <ButtonLink href={Path.Home} label="Go to Homepage" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ErrorUi;
