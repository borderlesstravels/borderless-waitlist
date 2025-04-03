import Container from "@/components/common/container";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FACEBOOK_URL,
  INSTAGRAM_URL,
  TWITTER_URL,
} from "@/constants/socialLinks";

const Header = () => {
  return (
    <header className="py-4">
      <Container className="flex justify-between items-center gap-10">
        <Image
          alt="Logo"
          src="/images/logo-yellow-blue.png"
          width={200}
          height={50}
          className="left-[-8px] md:left-[-21px] w-auto h-[30px] md:h-[50px] relative top-[4px] object-contain"
          priority
        />
        <div className="flex items-center gap-5">
          <Link href={FACEBOOK_URL} target="_blank">
            <Image
              alt="Logo"
              src="/images/facebook-2.png"
              width={50}
              height={50}
              className="w-[30px] md:w-[50px] h-[30px] md:h-[50px] relative top-[4px] object-contain"
              priority
            />
          </Link>
          <Link href={TWITTER_URL} target="_blank">
            <Image
              alt="Logo"
              src="/images/twitter-2.png"
              width={50}
              height={50}
              className="w-[30px] md:w-[50px] h-[30px] md:h-[50px] relative top-[4px] object-contain"
              priority
            />
          </Link>
          <Link href={INSTAGRAM_URL} target="_blank">
            <Image
              alt="Logo"
              src="/images/instagram-2.png"
              width={50}
              height={50}
              className="w-[30px] md:w-[50px] h-[30px] md:h-[50px] relative top-[4px] object-contain"
              priority
            />
          </Link>
        </div>
      </Container>
    </header>
  );
};

export default Header;
