import { WEBSITE_NAME, WEBSITE_URL } from "@/constants/socialLinks";
import { Metadata } from "next";

interface GenerateMetadataObjOptions {
  title?: string;
  description: string;
  keywords?: string[];
  urlPath: string;
  image?: string;
  tags?: string[];
}

export const generateMetadataObj = ({
  description,
  keywords,
  title,
  urlPath,
  image = "/images/your-gateway-to-cheaper-flights.jpg",
}: GenerateMetadataObjOptions): Metadata => {
  const updatedTitle = title ? `${title} - ${WEBSITE_NAME}` : `${WEBSITE_NAME}`;

  return {
    title: updatedTitle,
    description,
    keywords,
    openGraph: {
      type: "website",
      siteName: WEBSITE_NAME,
      title: updatedTitle,
      description,
      url: `${WEBSITE_URL}${urlPath}`,
      images: [
        {
          url: `${WEBSITE_URL}${image}`,
          width: 800,
          height: 600,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: updatedTitle,
      description,
      images: [`${WEBSITE_URL}${image}`],
    },
    icons: {
      icon: "/icons/favicon-32x32.png",
      shortcut: "/icons/favicon-32x32.png",
      apple: "/icons/apple-touch-icon.png",
    },
  };
};
