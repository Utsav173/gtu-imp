import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Form, FormGroup, Row } from "react-bootstrap";
import { Input } from "@mui/material";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("loki");

  let term;
  // https://www.omdbapi.com/?i=tt3896198&apikey=485c72dd

  const API_LINK = "https://www.omdbapi.com/?apikey=677e5307"

  useEffect( () => {
        searchMovies();
    }, [] );
 
    const searchMovies = async () => {
        const response = await fetch(`${API_LINK}&s=${searchTerm}`);
        const data = await response.json();

        setMovies(data.Search);
        console.log(data);
    };



  return (
    <Container className="d-flex flex-column justify-content-center mx-3 mt-4">
    <Row className="my-2 d-flex flex-row justify-content-center">
    
      <Input placeholder="Search Movie here"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)} 
                    />
 <Button variant="success" className="ms-auto" onClick={() => searchMovies(searchTerm)}>Search movie</Button>
    </Row>
      <Row gap={2}>
      {
        movies.map((mv, index)=>{
          return (
            <Col>
              <Card style={{ width: "18rem" }} key={index} className="m-2">
                <Card.Img variant="top" src={mv.Poster} alt={mv.Title} />
                <Card.Body>
                  <Card.Title>{mv.Title}</Card.Title>
                  <Card.Text>{mv.Year}</Card.Text>
                  <Card.Text>TYPE: {mv.Type}</Card.Text>
                  <Button variant="primary">go</Button>
                </Card.Body>
              </Card>
            </Col>
          )
        })
      }
          
      </Row>
    </Container>
  );
};

export default Movies;
