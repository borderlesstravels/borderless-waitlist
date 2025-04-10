import ToursScreen from "@/components/pages/tours";
import { Path } from "@/navigations/routes";
import { generateMetadataObj } from "@/utils/generateMetadataObj";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = generateMetadataObj({
  description: "",
  title: "Tours",
  urlPath: Path.Tours,
  image: "/images/your-next-adventure-awaits.jpg",
});

const Tours = () => {
  return <ToursScreen />;
};

export default Tours;
