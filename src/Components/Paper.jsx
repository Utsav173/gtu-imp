import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Document, Page } from "react-pdf/dist/esm/entry.vite";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

const options = {
  cMapUrl: "cmaps/",
  cMapPacked: true,
  standardFontDataUrl: "standard_fonts/",
};
import "./style.css";

const Paper = ({ linka }) => {
  const file = `https://utsav173.github.io/samplepaper/${linka}.pdf`;
  const [numPages, setNumPages] = useState(null);
  const [loading, setloading] = useState(false);

  function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    setloading(true);
    setNumPages(nextNumPages);
    setloading(false);
  }
  return (
    <Container className="ada">
      <div className="shadow p-1 my-4 bg-body-tertiary">
        <Document
          file={file}
          onLoadSuccess={onDocumentLoadSuccess}
          options={options}
          className="w-100 overflow-auto"
        >
          {Array.from(new Array(numPages), (el, index) => (
            <Page key={`page_${index + 1}`} pageNumber={index + 1} />
          ))}
        </Document>
      </div>
    </Container>
  );
};

export default Paper;
