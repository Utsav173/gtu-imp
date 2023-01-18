import React from "react";
import { Container } from "react-bootstrap";
import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";
import Table from "react-bootstrap/Table";
import "./style.css";

const Download = (props) => {
  return (
    <Container
      className={`container d-flex justify-content-center align-items-center flex-column text-${
        props.mode === "light" ? "dark" : "light"
      }`}
    >
      <h1 className="text-center my-3 p-2 text-capitalize">
        Download available content
      </h1>
      <Container className="d-flex justify-content-center align-items-center">
        <Table
          className={`table my-2 mx-5 md-mx-0 text-capitalize w-90 text-${
            props.mode === "light" ? "dark" : "light"
          }`}
        >
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
              <td>
                <Button
                className={`btn bg-${props.mode}`}
                  variant="outlined"
                  color="success"
                  startIcon={<DownloadIcon />}
                  href="https://utsav173.github.io/samplepaper/31716101.pdf"
                >
                  Download
                </Button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>ADUD paper</td>
              <td>2022</td>
              <td>
                <Button
                className={`btn bg-${props.mode}`}
                  variant="outlined"
                  color="success"
                  startIcon={<DownloadIcon />}
                  href="https://utsav173.github.io/samplepaper/3171610.pdf"
                >
                  Download
                </Button>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>var paper</td>
              <td>2021</td>
              <td>
                <Button
                className={`btn bg-${props.mode}`}
                  variant="outlined"
                  color="success"
                  startIcon={<DownloadIcon />}
                  href="https://utsav173.github.io/samplepaper/31716121.pdf"
                >
                  Download
                </Button>
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>var paper</td>
              <td>2022</td>
              <td>
                <Button
                className={`btn bg-${props.mode}`}
                  variant="outlined"
                  color="success"
                  startIcon={<DownloadIcon />}
                  href="https://utsav173.github.io/samplepaper/3171612.pdf"
                >
                  Download
                </Button>
              </td>
            </tr>
            <tr>
              <td>5</td>
              <td>iswa paper</td>
              <td>2021</td>
              <td>
                <Button
                className={`btn bg-${props.mode}`}
                  variant="outlined"
                  color="success"
                  startIcon={<DownloadIcon />}
                  href="https://utsav173.github.io/samplepaper/31716161.pdf"
                >
                  Download
                </Button>
              </td>
            </tr>
            <tr>
              <td>6</td>
              <td>iswa paper</td>
              <td>2022</td>
              <td>
                <Button
                className={`btn bg-${props.mode}`}
                  variant="outlined"
                  color="success"
                  startIcon={<DownloadIcon />}
                  href="https://utsav173.github.io/samplepaper/3171616.pdf"
                >
                  Download
                </Button>
              </td>
            </tr>
            <tr>
              <td>7</td>
              <td>iot paper</td>
              <td>2021</td>
              <td>
                <Button
                className={`btn bg-${props.mode}`}
                  variant="outlined"
                  color="success"
                  startIcon={<DownloadIcon />}
                  href="https://utsav173.github.io/samplepaper/31711081.pdf"
                >
                  Download
                </Button>
              </td>
            </tr>
            <tr>
              <td>8</td>
              <td>iot paper</td>
              <td>2022</td>
              <td>
                <Button
                className={`btn bg-${props.mode}`}
                  variant="outlined"
                  color="success"
                  startIcon={<DownloadIcon />}
                  href="https://utsav173.github.io/samplepaper/3171108.pdf"
                >
                  Download
                </Button>
              </td>
            </tr>
            <tr>
              <td>9</td>
              <td>GTU imp answers</td>
              <td>all</td>
              <td>
                <Button
                className={`btn bg-${props.mode}`}
                  variant="outlined"
                  color="success"
                  startIcon={<DownloadIcon />}
                  href="https://utsav173.github.io/samplepaper/gtuimp.pdf"
                >
                  Download
                </Button>
              </td>
            </tr>
            <tr>
              <td>10</td>
              <td>var paper answer</td>
              <td>2021-22</td>
              <td>
                <Button
                className={`btn bg-${props.mode}`}
                  variant="outlined"
                  color="success"
                  startIcon={<DownloadIcon />}
                  href="https://utsav173.github.io/samplepaper/varpaper.pdf"
                >
                  Download
                </Button>
              </td>
            </tr>
            <tr>
              <td>11</td>
              <td>ADUD paper answer</td>
              <td>2021-22</td>
              <td>
                <Button
                className={`btn bg-${props.mode}`}
                  variant="outlined"
                  color="success"
                  startIcon={<DownloadIcon />}
                  href="https://utsav173.github.io/samplepaper/adudpaper.pdf"
                >
                  Download
                </Button>
              </td>
            </tr>
            <tr>
              <td>12</td>
              <td>iswa paper answer</td>
              <td>2021-22</td>
              <td>
                <Button
                className={`btn bg-${props.mode}`}
                  variant="outlined"
                  color="success"
                  startIcon={<DownloadIcon />}
                  href="https://utsav173.github.io/samplepaper/iswapaper.pdf"
                >
                  Download
                </Button>
              </td>
            </tr>
            <tr>
              <td>13</td>
              <td>iot paper answer</td>
              <td>2021-22</td>
              <td>
                <Button
                className={`btn bg-${props.mode}`}
                  variant="outlined"
                  color="success"
                  startIcon={<DownloadIcon />}
                  href="https://utsav173.github.io/samplepaper/iotpaper.pdf"
                >
                  Download
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </Container>
  );
};

export default Download;