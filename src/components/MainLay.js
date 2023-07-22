import WithSubnavigation from "@/components/Navbar";
import { Analytics } from "@vercel/analytics/react";

const MainLay = ({ children, inter }) => {
  return (
    <>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-Z025D87MC5"
      />
        <body className={inter.className}>
          <WithSubnavigation />
          {children}
          <Analytics />
        </body>
    </>
  );
};

export default MainLay;
