import React from "react";
import { Nav } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import Paper from "./Paper";

const Home = (props) => {
  return (
    <Container className={`text-${props.mode === "light" ? "dark" : "light"}`}>
      <Container className="text-center">
        <h1 variant="secondary" className="my-4 p-2 text-capitalize">
          Click below button to read document
        </h1>
        <Nav className="me-auto d-flex justify-content-evenly my-4 gap-4">
          <Link
            to="/gtuimp"
            className={`btn-op-${props.mode}`}
          >
            GTU IMP QUESTIONS
          </Link>
          <Link
            to="/iswapaper"
            className="btn gg"
          >
            ISWA Previous Years papers
          </Link>
          <Link to="/iotpaper" className="btn text-capitalize my-1 fd">
            IOT Previous Years papers
          </Link>
          <Link
            to="/varpaper"
            className={`btn btn-outline-${
              props.mode === "light" ? "dark" : "light"
            } shadow rounded text-capitalize my-1`}
          >
            VAR Previous Years papers
          </Link>
        </Nav>
      </Container>
      <Routes>
        <Route exact path="/gtuimp" element={<Paper linka="gtuimp" />} />
        <Route exact path="/adudpaper" element={<Paper linka="adudpaper" />} />
        <Route exact path="/iswapaper" element={<Paper linka="iswapaper" />} />
        <Route exact path="/varpaper" element={<Paper linka="varpaper" />} />
        <Route exact path="/cvpaper" element={<Paper linka="cvpaper" />} />
        <Route exact path="/iotpaper" element={<Paper linka="iotpaper" />} />
        <Route exact element={<Navigate to="/about" />} />
      </Routes>
    </Container>
  );
};

export default Home;
