import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Card, Col, Container, Form, FormGroup, Row } from "react-bootstrap";
import { Input } from "@mui/material";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [titile, setTitile] = useState('movies');

  // https://www.omdbapi.com/?i=tt3896198&apikey=485c72dd

  const API_LINK = "https://www.omdbapi.com/?apikey=677e5307"

  const searchMvies = async () => {
    const response = await axios.get(
      `${API_LINK}&s=${titile}`
    );
    const data = await response.data.Search;
    console.log(data);
    setMovies(data);
    console.log(movies);
  };

  useEffect(() => {
    searchMvies();
  }, [titile]);

  return (
    <Container className="m-4">
    <Row className="my-2 justify-content-center">
    <Input placeholder="enter movie name" name="Search title" value={titile} onChange={e=> setTitile(e.target.value)}/>
    </Row>
      <Row gap={2}>
      {
        movies.map((mv, index)=>{
          return (
            <Col>
              <Card style={{ width: "18rem" }} key={index}>
                <Card.Img variant="top" src={mv.Poster} />
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
