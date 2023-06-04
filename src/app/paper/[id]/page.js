"use client";
import { Container, Flex, useColorModeValue } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { pdfjs, Document, Page } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PaperPage = ({ params: { id } }) => {
  const bookData = `https://utsav173.github.io/samplepaper/${id}.pdf`;
  const [pageWidth, setPageWidth] = useState(0);
  const [numPages, setNumPages] = useState(null);
  const documentRef = useRef(null);
  const [renderedPages, setRenderedPages] = useState([]);

  useEffect(() => {
    function updatePageWidth() {
      if (window.innerWidth < 768) {
        setPageWidth(window.innerWidth - 50);
      } else if (window.innerWidth > 768) {
        setPageWidth(500);
      }
    }
    updatePageWidth();
    window.addEventListener("resize", updatePageWidth);
    return () => {
      window.removeEventListener("resize", updatePageWidth);
    };
  }, []);

  useEffect(() => {
    function loadAdditionalPages() {
      const pagesToRender = [];
      for (let i = 1; i <= numPages; i++) {
        pagesToRender.push(
          <Page key={`page_${i}`} pageNumber={i} width={pageWidth} />
        );
      }
      setRenderedPages(pagesToRender);
    }

    if (numPages) {
      loadAdditionalPages();
    }
  }, [numPages, pageWidth]);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
      bg={useColorModeValue("gray.200", "#1B1B1B")}
      h={"full"}
    >
      <Container
        size={"lg"}
        maxW="container.lg"
        justifyContent={"center"}
        bg={useColorModeValue("gray.200", "#1B1B1B")}
        alignItems={"space-evenly"}
      >
        <Flex
          size={"lg"}
          maxW="container.lg"
          alignItems={"center"}
          bg={useColorModeValue("gray.200", "#1B1B1B")}
          justifyContent={"center"}
          ref={documentRef}
        >
          <Document
            file={bookData}
            onLoadSuccess={onDocumentLoadSuccess}
            loading="Loading..."
          >
            {renderedPages}
          </Document>
        </Flex>
      </Container>
    </Flex>
  );
};

export default PaperPage;
