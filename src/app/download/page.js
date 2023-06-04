"use client";
import { DownloadIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";

const Page = () => {
  const rows = [
    {
      id: 1,
      name: "ADUD Paper",
      year: 2021,
      link: "https://utsav173.github.io/samplepaper/31716101.pdf",
    },
    {
      id: 2,
      name: "ADUD Paper",
      year: 2022,
      link: "https://utsav173.github.io/samplepaper/3171610.pdf",
    },
    {
      id: 3,
      name: "VAR Paper",
      year: 2022,
      link: "https://utsav173.github.io/samplepaper/3171612.pdf",
    },
    {
      id: 4,
      name: "VAR Paper",
      year: 2021,
      link: "https://utsav173.github.io/samplepaper/31716121.pdf",
    },
    {
      id: 5,
      name: "ISWA Paper",
      year: 2021,
      link: "https://utsav173.github.io/samplepaper/31716161.pdf",
    },
    {
      id: 6,
      name: "ISWA Paper",
      year: 2022,
      link: "https://utsav173.github.io/samplepaper/3171616.pdf",
    },
    {
      id: 7,
      name: "IOT Paper",
      year: 2022,
      link: "https://utsav173.github.io/samplepaper/3171108.pdf",
    },
    {
      id: 8,
      name: "IOT Paper",
      year: 2021,
      link: "https://utsav173.github.io/samplepaper/31711081.pdf",
    },
    {
      id: 8,
      name: "IOT Paper Ans",
      year: "2021-22",
      link: "https://utsav173.github.io/samplepaper/iotpaper.pdf",
    },
    {
      id: 8,
      name: "ISWA Paper Ans",
      year: "2021-22",
      link: "https://utsav173.github.io/samplepaper/iswapaper.pdf",
    },
    {
      id: 8,
      name: "ADUD Paper Ans",
      year: "2021-22",
      link: "https://utsav173.github.io/samplepaper/adudpaper.pdf",
    },
    {
      id: 8,
      name: "VAR Paper Ans",
      year: "2021-22",
      link: "https://utsav173.github.io/samplepaper/varpaper.pdf",
    },
    {
      id: 8,
      name: "WC Paper Ans",
      year: "2021-22",
      link: "https://utsav173.github.io/samplepaper/wcpaper.pdf",
    },
    {
      id: 8,
      name: "SPM Paper Ans",
      year: "2021-22",
      link: "https://utsav173.github.io/samplepaper/spmpaper.pdf",
    },
  ];

  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
      bg={useColorModeValue("gray.100", "#1B1B1B")}
      w={"100%"}
    >
      <TableContainer my={2}>
        <Table size="sm">
          <Thead>
            <Tr>
              <Th isNumeric>no.</Th>
              <Th>Subject</Th>
              <Th>Year</Th>
              <Th>Download</Th>
            </Tr>
          </Thead>
          <Tbody>
            {rows.map((row, index) => (
              <Tr key={`row_${index + 1}`}>
                <Td>{row.id}</Td>
                <Td>{row.name}</Td>
                <Td>{row.year}</Td>
                <Td isNumeric>
                  <Button
                    aria-label="download Paper"
                    leftIcon={<DownloadIcon />}
                    size={"sm"}
                    as="a"
                    href={row.link}
                  >
                    Download
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Flex>
  );
};

export default Page;
