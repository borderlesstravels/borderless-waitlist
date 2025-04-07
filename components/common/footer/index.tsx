import Container from "@/components/common/container";
import Typography from "@/components/common/typography";
import { SUPPORT_EMAIL } from "@/constants/socialLinks";
import Image from "next/image";
import React from "react";
import FacebookIcon from "@/assets/svgs/facebook.svg";
import InstagramIcon from "@/assets/svgs/instagram.svg";
import TwitterIcon from "@/assets/svgs/twitter.svg";
import LinkedInIcon from "@/assets/svgs/linkedin.svg";
import {
  FACEBOOK_URL,
  INSTAGRAM_URL,
  TWITTER_URL,
  LINKEDIN_URL,
} from "@/constants/socialLinks";
import cs from "classnames";

interface Props {
  bgColor?: "purple" | "blue";
}

const Footer = ({ bgColor = "purple" }: Props) => {
  return (
    <footer
      className={cs("py-14 md:py-20 text-white", {
        "bg-purple-base": bgColor === "purple",
        "bg-blue-base": bgColor === "blue",
      })}
    >
      <Container className="flex flex-col lg:flex-row lg:items-center justify-between gap-10">
        <div>
          <Image
            alt="Logo"
            src="/images/logo-white.png"
            width={200}
            height={50}
            className="w-auto h-[60px] md:h-[80px] relative top-[4px] left-[-4px] object-contain"
          />
          <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
        </div>
        <div className="flex-1 ml-auto max-w-[600px]">
          <Typography className="text-right mb-7">
            Plan and book your perfect trip with expert advice, travel tips,
            destination information and inspiration from us!
          </Typography>
          <div className="flex justify-end items-center gap-5">
            <a href={FACEBOOK_URL} target="_blank">
              <FacebookIcon className="w-[20px] h-[20px]" />
            </a>
            <a href={INSTAGRAM_URL} target="_blank">
              <InstagramIcon className="w-[20px] h-[20px]" />
            </a>
            <a href={TWITTER_URL} target="_blank">
              <TwitterIcon className="w-[20px] h-[20px]" />
            </a>
            <a href={LINKEDIN_URL} target="_blank">
              <LinkedInIcon className="w-[20px] h-[20px]" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
