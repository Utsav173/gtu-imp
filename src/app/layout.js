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
      <MainLay inter={inter}>{children}</MainLay>
    </html>
  );
}
