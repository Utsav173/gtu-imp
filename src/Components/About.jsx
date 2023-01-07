import React from "react";
import { Container, Alert } from "react-bootstrap";

const About = () => {
  return (
    <Container className="d-flex align-items-center justify-content-center p-4 text-capitalize">
      <Alert variant="success">
      <Alert.Heading>Hey, nice to see you</Alert.Heading>
      <p>
        This app only make for educatinal purpose all content are gathered from various part of internet
      </p>
      <hr />
      <p className="mb-0">
        Whenever you need to, be sure to use margin utilities to keep things
        nice and tidy.
      </p>
    </Alert>
    </Container>
  );
};

export default About;
