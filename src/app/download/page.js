import { BsDownload } from "react-icons/bs";
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
    <div className="flex justify-center items-center flex-col bg-gray-100 w-full">
      <div className="container mx-auto px-4">
        <div className="overflow-x-auto">
          <table className="table-fixed w-full text-center">
            <thead>
              <tr>
                <th className="w-1/4 max-sm:w-1/6 py-3">no.</th>
                <th className="w-1/4 py-3">Subject</th>
                <th className="w-1/4 py-3">Year</th>
                <th className="w-1/4 py-3">Download</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr
                  key={`row_${index + 1}`}
                  className="bg-white hover:bg-gray-100 transition-all"
                >
                  <td className="w-1/4 max-sm:w-1/6 py-3">{row.id}</td>
                  <td className="w-1/4 max-sm:min-w-max py-3">{row.name}</td>
                  <td className="w-1/4 py-3">{row.year}</td>
                  <td className="w-1/4 py-3">
                    <a
                      href={row.link}
                      className="px-4 py-2 text-sm bg-blue-500 text-white rounded-md flex items-center justify-center transition-all hover:bg-blue-600"
                      aria-label="download Paper"
                    >
                      <BsDownload className="mr-1" color="white" />
                      <span className="max-sm:hidden">Download</span>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Page;
