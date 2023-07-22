import Link from "next/link";

export default function Home() {
  const obj = [
    { link: "varpaper", title: "var previous year paper" },
    { link: "adudpaper", title: "adud previous year paper" },
    { link: "iswapaper", title: "iswa previous year paper" },
    { link: "iotpaper", title: "iot previous year paper" },
    { link: "wcpaper", title: "wc previous year paper" },
    { link: "cvpaper", title: "cv previous year paper" },
    { link: "spmpaper", title: "spm previous year paper" },
    { link: "gtuimp", title: "gtu imp questions" },
  ];

  return (
    <div className="flex flex-col gap-3 px-5 bg-gray-100 min-h-full">
      <h1 className="text-center text-4xl font-bold my-10 bg-gradient-to-r from-purple-700 to-pink-500 bg-clip-text">
        Click Below Button To Read Document
      </h1>
      <div className="flex gap-5 flex-wrap justify-center">
        {obj.map((item) => (
          <Link href={`/paper/${item.link}`}>
            <button
              key={item.link}
              className="py-2 px-3 rounded-md shadow-md bg-gray-200 text-black hover:bg-gradient-to-tr hover:from-blue-200 hover:to-blue-800 hover:shadow-lg uppercase"
            >
              {item.title}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
}
