import * as React from "react";
import { ChevronRight } from "lucide-react";

import { SearchForm } from "@/components/search-form";
import { VersionSwitcher } from "@/components/version-switcher";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import Link from "next/link";

// This is sample data.
const data = {
  versions: ["1.0.0"],
  navMain: [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "About",
      url: "/about",
    },
    {
      title: "Download",
      url: "/download",
    },
    {
      title: "Old Papers",
      url: "#",
      items: [
        {
          title: "ADUD Paper",
          url: "https://7-it-paper.vercel.app/adud-paper/",
        },
        {
          title: "VAR Paper",
          url: "https://7-it-paper.vercel.app/var-paper/",
        },
        {
          title: "ISWA Paper",
          url: "https://7-it-paper.vercel.app/iswa-paper/",
        },
        {
          title: "CV Paper",
          url: "https://7-it-paper.vercel.app/cv-paper/",
        },
        {
          title: "IoT Paper",
          url: "https://7-it-paper.vercel.app/iot-paper/",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <VersionSwitcher
          versions={data.versions}
          defaultVersion={data.versions[0]}
        />
        <SearchForm />
      </SidebarHeader>
      <SidebarContent className="gap-0">
        {data.navMain.map((item) =>
          item.items ? (
            // Render Collapsible for items with children
            <Collapsible
              key={item.title}
              title={item.title}
              defaultOpen
              className="group/collapsible"
            >
              <SidebarGroup>
                <SidebarGroupLabel
                  asChild
                  className="group/label text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                >
                  <CollapsibleTrigger>
                    {item.title}{" "}
                    <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
                  </CollapsibleTrigger>
                </SidebarGroupLabel>
                <CollapsibleContent>
                  <SidebarGroupContent>
                    <SidebarMenu>
                      {item.items.map((subItem) => (
                        <SidebarMenuItem key={subItem.title}>
                          <SidebarMenuButton asChild pathname={subItem.url}>
                            <a href={subItem.url}>{subItem.title}</a>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      ))}
                    </SidebarMenu>
                  </SidebarGroupContent>
                </CollapsibleContent>
              </SidebarGroup>
            </Collapsible>
          ) : (
            // Render simple menu item for items without children
            <SidebarGroup key={item.title}>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild pathname={item.url}>
                    <Link href={item.url}>{item.title}</Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroup>
          )
        )}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
