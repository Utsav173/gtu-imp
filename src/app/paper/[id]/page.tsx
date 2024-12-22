"use client";

import { useParams } from "next/navigation";
import { useState } from "react";

import { pdfjs, Document, Page } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "../../globals.css";

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.mjs`;

const options = {
  cMapUrl: "cmaps/",
  cMapPacked: true,
  standardFontDataUrl: "standard_fonts/",
};

const Paper = () => {
  const { id } = useParams();

  const [numPages, setNumPages] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  if (!id) {
    return null;
  }

  const file = `https://utsav173.github.io/gtu-sample-paper/${id}.pdf`;

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setLoading(false);
    setNumPages(numPages);
    setError(null);
  }

  function onDocumentLoadError(error: Error) {
    console.error("PDF load error:", error);
    setLoading(false);
    setError("Failed to load PDF. Please try again later.");
  }

  return (
    <div className="rounded-lg overflow-hidden h-full w-full relative mx-auto my-6 px-4 max-w-4xl">
      <div className="absolute max-w-max mx-auto w-full h-full inset-0 overflow-y-auto rounded-lg custom-scrollbar">
        <Document
          file={file}
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={onDocumentLoadError}
          options={options}
        >
          {loading ? (
            <p className="text-center text-gray-500">Loading...</p>
          ) : error ? (
            <p className="text-center text-red-500">{error}</p>
          ) : (
            <div className="flex flex-col items-center gap-4">
              {Array.from(new Array(numPages), (_, index) => (
                <div
                  key={`page_${index + 1}`}
                  className="shadow-md border rounded-lg overflow-hidden"
                >
                  <Page pageNumber={index + 1} className="w-full" />
                </div>
              ))}
            </div>
          )}
        </Document>
      </div>
    </div>
  );
};

export default Paper;
