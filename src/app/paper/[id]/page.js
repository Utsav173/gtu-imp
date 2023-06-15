"use client";
import { Container } from "@chakra-ui/react";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

const PaperPage = ({ params: { id } }) => {
  const bookData = `https://utsav173.github.io/samplepaper/${id}.pdf`;
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <Worker workerUrl="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.7.107/pdf.worker.min.js">
      <Container>
        <Viewer fileUrl={bookData} />
      </Container>
    </Worker>
  );
};

export default PaperPage;
