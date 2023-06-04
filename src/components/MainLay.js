"use client";
import WithSubnavigation from "@/components/Navbar";
import { ChakraProvider } from "@chakra-ui/react";
import { Analytics } from "@vercel/analytics/react";

const MainLay = ({ children, inter }) => {
  return (
    <>
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
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-Z025D87MC5"
      />
      <ChakraProvider>
        <body className={inter.className}>
          <WithSubnavigation />
          {children}
          <Analytics />
        </body>
      </ChakraProvider>
    </>
  );
};

export default MainLay;
