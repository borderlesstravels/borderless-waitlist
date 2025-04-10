import BusinessScreen from "@/components/pages/business";
import { Path } from "@/navigations/routes";
import { generateMetadataObj } from "@/utils/generateMetadataObj";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = generateMetadataObj({
  description: "",
  title: "Business Travel",
  urlPath: Path.Business,
  image: "/images/business-travel.jpg",
});

const Business = () => {
  return <BusinessScreen />;
};

export default Business;
