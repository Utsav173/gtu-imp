import type { Metadata } from "next";
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
  title: "7th Sem IMP All Subject",
  description:
    "GTU 7th sem IT Subject all subject imp question and answers for GTU exam",
  keywords: [
    "SPM PAPER",
    "VAR PAPER",
    "ISWA PAPER",
    "ADUD PAPER",
    "GTU paper solution",
    "cheemsbazi paper solution",
    "GTU imp",
    "IT",
    "GTU",
    "7th sem imp gtu exam 2022",
  ],
  authors: { name: "hamcker" },
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
  verification: {
    google: "4b4H3hr3KG4V1J6eRzWhNZDf84yIPAcR1x32o0EpF8U",
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#c9c9c9" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
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
