import { Inter } from "next/font/google";
import "./globals.css";
import MainLay from "@/components/MainLay";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "7th Sem IMP All Subject",
  description:
    "GTU 7th sem IT Subject all subject imp question and answers for gtu exam",
  icons: {
    icon: "./icon.svg",
  },
  other: {
    "google-site-verification": "4b4H3hr3KG4V1J6eRzWhNZDf84yIPAcR1x32o0EpF8U",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/icon.svg" />
        <link rel="apple-touch-icon" href="/icon.svg" />
        <meta
          name="google-site-verification"
          content="4b4H3hr3KG4V1J6eRzWhNZDf84yIPAcR1x32o0EpF8U"
        />
        <meta
          name="description"
          content="GTU 7th sem IT Subject all subject imp question and answers for gtu exam"
        />
        <meta
          name="keywords"
          content="SPM PAPER, VAR PAPER, ISWA PAPER, ADUD PAPER, GTU paper solution, cheemsbazi paper solution,GTU imp, IT, GTU, 7th sem imp gtu exam 2022, 7th sem imp gtu exam 2022"
        />
        <meta name="author" content="hamcker" />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: light)"
          content="#c9c9c9"
        />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: dark)"
          content="black"
        />
      </head>
      <MainLay inter={inter}>{children}</MainLay>
    </html>
  );
}
