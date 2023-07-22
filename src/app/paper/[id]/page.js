"use client";
import React, { useEffect, useState } from "react";
import { ProgressBar, Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const PaperPage = ({ params: { id } }) => {
  const [isTabletOrSmaller, setIsTabletOrSmaller] = useState(false);
  const bookData = `https://utsav173.github.io/samplepaper/${id}.pdf`;
  const workerUrl =
    "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.8.162/pdf.worker.min.js";

  useEffect(() => {
    const handleResize = () => {
      setIsTabletOrSmaller(window.innerWidth <= 768);
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  const renderLoader = (percentages) => (
    <div style={{ width: "100%" }}>
      <ProgressBar progress={Math.round(percentages)} />
    </div>
  );

  return (
    <div className="w-full">
      <Worker workerUrl={workerUrl}>
        <Viewer
          fileUrl={bookData}
          enableSmoothScroll
          defaultScale={isTabletOrSmaller ? 0.6 : 1}
          renderLoader={renderLoader}
          style={{
            width: isTabletOrSmaller ? `${window.innerWidth}px` : "100%",
          }}
        />
      </Worker>
    </div>
  );
};

export default PaperPage;
