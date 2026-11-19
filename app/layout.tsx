import { site } from "@/config/site";
import { pageMetadata } from "@/lib/metadata";
import localFont from "next/font/local";
import "./globals.css";

const roboto = localFont({
  src: [
    {
      path: "../public/fonts/roboto-regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/roboto-medium.ttf",
      weight: "500",
      style: "normal",
    },
    { path: "../public/fonts/roboto-bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata = {
  ...pageMetadata(site.seo.homeTitle, site.description, "/"),
  icons: { icon: site.brand.icon, apple: site.brand.icon },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang={site.seo.language} className={roboto.variable}>
      <body>{children}</body>
    </html>
  );
}
