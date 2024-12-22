import DotPattern from "@/components/ui/dot-pattern";
import HyperText from "@/components/ui/hyper-text";
import { PdfButton } from "@/components/ui/pdf-button";
import { cn } from "@/lib/utils";

const obj = [
  { link: "varpaper", title: "VAR previous year paper" },
  { link: "adudpaper", title: "ADUD previous year paper" },
  { link: "iswapaper", title: "ISWA previous year paper" },
  { link: "iotpaper", title: "IOT previous year paper" },
  { link: "wcpaper", title: "WC previous year paper" },
  { link: "cvpaper", title: "CV previous year paper" },
  { link: "spmpaper", title: "SPM previous year paper" },
  { link: "gtuimp", title: "GTU imp questions" },
];

export default function Page() {
  return (
    <div className="relative flex size-full flex-1 flex-col gap-4 p-4">
      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className={cn("custom-mask")}
      />
      <HyperText
        as="h1"
        className="font-semibold mx-auto text-3xl max-md:text-xl"
        animateOnHover={false}
        duration={40}
      >
        Click below button to read document
      </HyperText>

      {/** create grid of button for desktop view set as auto column and mobile view auto row */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-4 px-1 md:px-3">
        {obj.map((item, index) => (
          <PdfButton key={index} href={`/paper/${item.link}`}>
            {item.title}
          </PdfButton>
        ))}
      </div>
    </div>
  );
}
