import type { Metadata } from "next";
import "./globals.css";
import { generateMetadataObj } from "@/utils/generateMetadataObj";
import { Path } from "@/navigations/routes";
import RootLayoutInner from "@/layouts/root";

export const metadata: Metadata = generateMetadataObj({
  description: "",
  title: "",
  urlPath: Path.Home,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <RootLayoutInner>{children}</RootLayoutInner>
      </body>
    </html>
  );
}
