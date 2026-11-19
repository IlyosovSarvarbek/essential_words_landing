import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Essential Words — English, one unit at a time",
  description:
    "Build your English vocabulary with Uzbek translations. Explore 3,600 words, animated flashcards, pronunciation, two-way quizzes, and progress saved on your device.",
  applicationName: "Essential Words",
  icons: { icon: "/app/icon.png", apple: "/app/icon.png" },
  openGraph: {
    title: "Essential Words — Small steps. Stronger English.",
    description:
      "English + Uzbek. Explore 3,600 vocabulary entries, practice flashcards, and learn one unit at a time.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.variable}>
      <body>{children}</body>
    </html>
  );
}
