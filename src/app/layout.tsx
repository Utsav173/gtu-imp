import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Separator } from "@/components/ui/separator";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ThemeToggler } from "@/components/theme-toggler";
import PathItem from "@/components/PathItem";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GTU 7th Sem IT Papers | Important Materials",
  description:
    "Access GTU 7th semester IT important questions, solved papers, and exam resources. Prepare for GTU exams with the best study material for SPM, VAR, ISWA, ADUD, and more.",
  keywords: [
  "GTU question paper",
  "GTU imp",
  "GTU important questions",
  "GTU 7th sem IT",
  "GTU exam papers",
  "GTU paper solution",
  "GTU study material",
  "GTU exam preparation",
  "GTU 2022 papers",
  "GTU SPM paper",
  "GTU VAR paper",
  "GTU ISWA paper",
  "GTU ADUD paper",
  "GTU IT imp questions",
  "GTU exam resources",
  "GTU previous year papers",
  "GTU syllabus",
  "GTU exam tips",
  "GTU solved papers",
  "GTU model papers",
  "GTU sample papers",
  "GTU question bank",
  "GTU exam guide",
  "GTU preparation material",
  "GTU important topics",
  "GTU exam strategy",
  "GTU paper analysis",
  "GTU exam pattern",
  "GTU marking scheme",
  "GTU exam schedule",
  "GTU exam notification",
  "GTU exam results",
  "GTU exam FAQs",
  "GTU exam center",
  "GTU exam admit card",
  "GTU exam registration",
  "GTU exam fee",
  "GTU exam eligibility",
  "GTU exam books",
  "GTU exam notes",
  "GTU exam tips and tricks",
  "GTU exam preparation plan",
  "GTU exam success stories",
  "GTU exam preparation apps",
  "GTU exam online resources"
],
  authors: [{ name: "hamcker", url: "https://gtu-imp.vercel.app/" }],
  creator: "hamcker",
  publisher: "GTU IMP",
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
  verification: {
    google: "4b4H3hr3KG4V1J6eRzWhNZDf84yIPAcR1x32o0EpF8U",
  },
  openGraph: {
    title: "GTU Important Questions & Papers | 7th Sem IT IMP | GTU Exam Resources",
    description:
      "Access GTU 7th semester IT important questions, solved papers, and exam resources. Prepare for GTU exams with the best study material for SPM, VAR, ISWA, ADUD, and more.",
    url: "https://gtu-imp.vercel.app/",
    siteName: "GTU IMP",
    images: [
      {
        url: "https://gtu-imp.vercel.app/icon.png", 
        width: 1200,
        height: 630,
        alt: "GTU IMP OG Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GTU Important Questions & Papers | 7th Sem IT IMP | GTU Exam Resources",
    description:
      "Access GTU 7th semester IT important questions, solved papers, and exam resources. Prepare for GTU exams with the best study material for SPM, VAR, ISWA, ADUD, and more.",
    images: ["https://gtu-imp.vercel.app/icon.png"], 
  },
  alternates: {
    canonical: "https://gtu-imp.vercel.app/",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#c9c9c9" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
              <header className="flex sticky top-0 bg-background h-16 shrink-0 items-center gap-2 border-b px-4">
                <SidebarTrigger className="-ml-1" />
                <Separator orientation="vertical" className="mr-2 h-4" />
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem className="hidden md:block">
                      <BreadcrumbLink href="/">GTU Imp</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator className="hidden md:block" />
                    <BreadcrumbItem>
                      <BreadcrumbPage className="capitalize">
                        <PathItem />
                      </BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>

                <div className="ml-auto">
                  <ThemeToggler />
                </div>
              </header>

              {children}
            </SidebarInset>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
