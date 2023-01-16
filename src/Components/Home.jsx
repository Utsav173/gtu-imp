import React from "react";
import { Nav } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import Paper from "./Paper";

const Home = (props) => {
  return (
    <Container className={`text-${props.mode === "light" ? "dark" : "light"}`}>
      <Container className="text-center">
        <h1 variant="secondary" className="my-2 p-2 text-capitalize">
          Click below button to read document
        </h1>
        <Nav className="me-auto d-flex justify-content-evenly my-4 gap-2">
          <Link
            to="/gtuimp"
            className={`btn btn-outline-${
              props.mode === "light" ? "dark" : "light"
            } shadow rounded text-capitalize my-1`}
          >
            GTU IMP QUESTIONS
          </Link>
          {/* <Link to="/adudpaper" className='btn btn-outline-${props.mode === "light" ? "dark" : "light"} text-capitalize my-1'>ADUD Previous Years papers</Link> */}
          <Link
            to="/iswapaper"
            className="btn text-capitalize my-1 fd"
          >
            ISWA Previous Years papers
          </Link>
          <Link
            to="/varpaper"
            className={`btn btn-outline-${
              props.mode === "light" ? "dark" : "light"
            } shadow rounded text-capitalize my-1`}
          >
            VAR Previous Years papers
          </Link>
          <Link
            to="/cvpaper"
            className={`btn btn-outline-${
              props.mode === "light" ? "dark" : "light"
            } shadow rounded text-capitalize my-1`}
          >
            CV Previous Years papers
          </Link>
        </Nav>
      </Container>
      <Routes>
        <Route exact path="/gtuimp" element={<Paper linka="gtuimp" />} />
        <Route exact path="/adudpaper" element={<Paper linka="adudpaper" />} />
        <Route exact path="/iswapaper" element={<Paper linka="iswapaper" />} />
        <Route exact path="/varpaper" element={<Paper linka="varpaper" />} />
        <Route exact path="/cvpaper" element={<Paper linka="cvpaper" />} />
        <Route exact element={<Navigate to="/about" />} />
      </Routes>
    </Container>
  );
};

export default Home;
