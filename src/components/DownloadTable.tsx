import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

// Define the data structure
type DownloadRow = {
  no: number;
  subject: string;
  year: string | number;
  linka: string;
};

const rows: DownloadRow[] = [
  {
    no: 1,
    subject: "ADUD Paper",
    year: 2021,
    linka: "https://utsav173.github.io/gtu-sample-paper/31716101.pdf",
  },
  {
    no: 2,
    subject: "ADUD Paper",
    year: 2022,
    linka: "https://utsav173.github.io/gtu-sample-paper/3171610.pdf",
  },
  {
    no: 3,
    subject: "VAR Paper",
    year: 2022,
    linka: "https://utsav173.github.io/gtu-sample-paper/3171612.pdf",
  },
  {
    no: 4,
    subject: "VAR Paper",
    year: 2021,
    linka: "https://utsav173.github.io/gtu-sample-paper/31716121.pdf",
  },
  {
    no: 5,
    subject: "ISWA Paper",
    year: 2021,
    linka: "https://utsav173.github.io/gtu-sample-paper/31716161.pdf",
  },
  {
    no: 6,
    subject: "ISWA Paper",
    year: 2022,
    linka: "https://utsav173.github.io/gtu-sample-paper/3171616.pdf",
  },
  {
    no: 7,
    subject: "IOT Paper",
    year: 2022,
    linka: "https://utsav173.github.io/gtu-sample-paper/3171108.pdf",
  },
  {
    no: 8,
    subject: "IOT Paper",
    year: 2021,
    linka: "https://utsav173.github.io/gtu-sample-paper/31711081.pdf",
  },
  {
    no: 9,
    subject: "IOT Paper Ans",
    year: "2021-22",
    linka: "https://utsav173.github.io/gtu-sample-paper/iotpaper.pdf",
  },
  {
    no: 10,
    subject: "ISWA Paper Ans",
    year: "2021-22",
    linka: "https://utsav173.github.io/gtu-sample-paper/iswapaper.pdf",
  },
  {
    no: 11,
    subject: "ADUD Paper Ans",
    year: "2021-22",
    linka: "https://utsav173.github.io/gtu-sample-paper/adudpaper.pdf",
  },
  {
    no: 12,
    subject: "VAR Paper Ans",
    year: "2021-22",
    linka: "https://utsav173.github.io/gtu-sample-paper/varpaper.pdf",
  },
  {
    no: 13,
    subject: "WC Paper Ans",
    year: "2021-22",
    linka: "https://utsav173.github.io/gtu-sample-paper/wcpaper.pdf",
  },
  {
    no: 14,
    subject: "SPM Paper Ans",
    year: "2021-22",
    linka: "https://utsav173.github.io/gtu-sample-paper/spmpaper.pdf",
  },
];

export default function DownloadTable() {
  return (
    <div className="w-full py-10">
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-24">No.</TableHead>
              <TableHead className="text-center">Subject</TableHead>
              <TableHead className="text-center">Year</TableHead>
              <TableHead className="text-center">Download</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.no}>
                <TableCell>{row.no}</TableCell>
                <TableCell className="text-center">{row.subject}</TableCell>
                <TableCell className="text-center">{row.year}</TableCell>
                <TableCell className="text-center">
                  <a href={row.linka} target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="outline"
                      size="sm"
                      className="rounded-full"
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                  </a>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
