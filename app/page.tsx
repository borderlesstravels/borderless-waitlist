import HomeScreen from "@/components/pages/home";
import { Path } from "@/navigations/routes";
import { generateMetadataObj } from "@/utils/generateMetadataObj";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = generateMetadataObj({
  description: "",
  title: "",
  urlPath: Path.Home,
  image: "/images/fly-more.jpg",
});

const Home = () => {
  return <HomeScreen />;
};

export default Home;
