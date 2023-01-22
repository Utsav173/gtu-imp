import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import DownloadIcon from "@mui/icons-material/Download";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Container } from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(no, subject, year, linka) {
  return { no, subject, year, linka };
}

const rows = [
  createData(
    1,
    "ADUD Paper",
    2021,
    "https://utsav173.github.io/samplepaper/31716101.pdf"
  ),
  createData(
    2,
    "ADUD Paper",
    2022,
    "https://utsav173.github.io/samplepaper/3171610.pdf"
  ),
  createData(
    3,
    "VAR Paper",
    2022,
    "https://utsav173.github.io/samplepaper/3171612.pdf"
  ),
  createData(
    4,
    "VAR Paper",
    2021,
    "https://utsav173.github.io/samplepaper/31716121.pdf"
  ),
  createData(
    5,
    "ISWA Paper",
    2021,
    "https://utsav173.github.io/samplepaper/31716161.pdf"
  ),
  createData(
    6,
    "ISWA Paper",
    2022,
    "https://utsav173.github.io/samplepaper/3171616.pdf"
  ),
  createData(
    7,
    "IOT Paper",
    2022,
    "https://utsav173.github.io/samplepaper/3171108.pdf"
  ),
  createData(
    8,
    "IOT Paper",
    2021,
    "https://utsav173.github.io/samplepaper/31711081.pdf"
  ),
  createData(
    8,
    "IOT Paper Ans",
    "2021-22",
    "https://utsav173.github.io/samplepaper/iotpaper.pdf"
  ),
  createData(
    8,
    "ISWA Paper Ans",
    "2021-22",
    "https://utsav173.github.io/samplepaper/iswapaper.pdf"
  ),
  createData(
    8,
    "ADUD Paper Ans",
    "2021-22",
    "https://utsav173.github.io/samplepaper/adudpaper.pdf"
  ),
  createData(
    8,
    "VAR Paper Ans",
    "2021-22",
    "https://utsav173.github.io/samplepaper/varpaper.pdf"
  ),
  createData(
    8,
    "WC Paper Ans",
    "2021-22",
    "https://utsav173.github.io/samplepaper/wcpaper.pdf"
  ),
  createData(
    8,
    "SPM Paper Ans",
    "2021-22",
    "https://utsav173.github.io/samplepaper/spmpaper.pdf"
  ),
];

export default function Download() {
  return (
    <Container sx={{ pt: 5, display: "flex", mb:6,mt:3, lg:{my:2} }}>
      <TableContainer
        component={Paper}
        sx={{ display: "flex", lg: { width: 200 } }}
      >
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>no.</StyledTableCell>
              <StyledTableCell align="center">Subject</StyledTableCell>
              <StyledTableCell align="center">Year</StyledTableCell>
              <StyledTableCell align="center">Download</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.no}>
                <StyledTableCell component="th" scope="row">
                  {row.no}
                </StyledTableCell>
                <StyledTableCell align="center">{row.subject}</StyledTableCell>
                <StyledTableCell align="center">{row.year}</StyledTableCell>
                <StyledTableCell align="center">
                  <Button
                    variant="outlined"
                    pill
                    href={row.linka}
                    startIcon={<DownloadIcon />}
                    target="_blank"
                    sx={{borderRadius:50, ":hover":{
                      color:"white", backgroundColor:"black", borderColor:"black"
                    }}}
                  >
                    Download
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
