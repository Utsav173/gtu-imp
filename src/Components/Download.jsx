import React from "react";
import { Button, Container, Image } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import "./style.css"

const Download = () => {
  return (
    <Container className="container d-flex justify-content-center flex-column">
      <h1 className="text-center my-3 p-2 text-capitalize">Download available content</h1>
      <Container className="d-flex justify-content-center">
      <Table className="table table-hover my-2 text-capitalize w-90">
        <thead>
          <tr>
            <th>#</th>
            <th>Subject Name</th>
            <th>year</th>
            <th>download</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>ADUD paper</td>
            <td>2021</td>
            <td><Button variant="primary" href="https://utsav173.github.io/samplepaper/31716101.pdf"><p className="jak">Download</p><img className="icon" src="https://img.icons8.com/color/48/null/downloads.png" style={{"width":30}}/></Button></td>
          </tr>
          <tr>
            <td>2</td>
            <td>ADUD paper</td>
            <td>2022</td>
            <td><Button variant="primary" href="https://utsav173.github.io/samplepaper/3171610.pdf"><p className="jak" >Download</p><img className="icon" src="https://img.icons8.com/color/48/null/downloads.png" style={{"width":30}}/></Button></td>
          </tr>
          <tr>
            <td>3</td>
            <td>var paper</td>
            <td>2021</td>
            <td><Button variant="primary" href="https://utsav173.github.io/samplepaper/31716121.pdf"><p className="jak">Download</p><img className="icon" src="https://img.icons8.com/color/48/null/downloads.png" style={{"width":30}}/></Button></td>
          </tr>
          <tr>
            <td>4</td>
            <td>var paper</td>
            <td>2022</td>
            <td><Button variant="primary" href="https://utsav173.github.io/samplepaper/3171612.pdf"><p className="jak">Download</p><img className="icon" src="https://img.icons8.com/color/48/null/downloads.png" style={{"width":30}}/></Button></td>
          </tr>
          <tr>
            <td>5</td>
            <td>iswa paper</td>
            <td>2021</td>
            <td><Button variant="primary" href="https://utsav173.github.io/samplepaper/31716161.pdf"><p className="jak">Download</p><img className="icon" src="https://img.icons8.com/color/48/null/downloads.png" style={{"width":30}}/></Button></td>
          </tr>
          <tr>
            <td>6</td>
            <td>iswa paper</td>
            <td>2022</td>
            <td><Button variant="primary" href="https://utsav173.github.io/samplepaper/3171616.pdf"><p className="jak">Download</p><img className="icon" src="https://img.icons8.com/color/48/null/downloads.png" style={{"width":30}}/></Button></td>
          </tr>
          <tr>
            <td>7</td>
            <td>iot paper</td>
            <td>2021</td>
            <td><Button variant="primary" href="https://utsav173.github.io/samplepaper/31711081.pdf"><p className="jak">Download</p><img className="icon" src="https://img.icons8.com/color/48/null/downloads.png" style={{"width":30}}/></Button></td>
          </tr>
          <tr>
            <td>8</td>
            <td>iot paper</td>
            <td>2022</td>
            <td><Button variant="primary" href="https://utsav173.github.io/samplepaper/3171108.pdf"><p className="jak">Download</p><img className="icon" src="https://img.icons8.com/color/48/null/downloads.png" style={{"width":30}}/></Button></td>
          </tr>
          <tr>
            <td>9</td>
            <td>GTU imp answers</td>
            <td>all</td>
            <td><Button variant="primary" href="https://utsav173.github.io/samplepaper/gtuimp.pdf"><p className="jak">Download</p><img className="icon" src="https://img.icons8.com/color/48/null/downloads.png" style={{"width":30}}/></Button></td>
          </tr>
          <tr>
            <td>10</td>
            <td>var paper answer</td>
            <td>2021-22</td>
            <td><Button variant="primary" href="https://utsav173.github.io/samplepaper/varpaper.pdf"><p className="jak">Download</p><img className="icon" src="https://img.icons8.com/color/48/null/downloads.png" style={{"width":30}}/></Button></td>
          </tr>
          <tr>
            <td>11</td>
            <td>ADUD paper answer</td>
            <td>2021-22</td>
            <td><Button variant="primary" href="https://utsav173.github.io/samplepaper/adudpaper.pdf"><p className="jak">Download</p><img className="icon" src="https://img.icons8.com/color/48/null/downloads.png" style={{"width":30}}/></Button></td>
          </tr>
          <tr>
            <td>12</td>
            <td>iswa paper answer</td>
            <td>2021-22</td>
            <td><Button variant="primary" href="https://utsav173.github.io/samplepaper/iswapaper.pdf"><p className="jak">Download</p><img className="icon" src="https://img.icons8.com/color/48/null/downloads.png" style={{"width":30}}/></Button></td>
          </tr>
        </tbody>
      </Table></Container>
    </Container>
  );
};

export default Download;
