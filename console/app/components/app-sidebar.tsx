"use client";

import * as React from "react";
import {
  BookOpen,
  Bot,
  Command,
  Frame,
  LifeBuoy,
  Map,
  PieChart,
  Send,
  Settings2,
  SquareTerminal,
  Folder,
  ChartBarStacked,
  Album,
  FileBadge,
  UserStar,
  ImageUp,
  Layers,
  NotebookTabs,
  BookCopy,
  ChartPie,
  Table2,
  Globe,
} from "lucide-react";
import { NavMain } from "~/components/nav-main";
import { NavProjects } from "~/components/nav-projects";
import { NavSecondary } from "~/components/nav-secondary";
import { NavUser } from "~/components/nav-user";
import { Briefcase } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "~/components/ui/sidebar";
import { useUserProfile } from "~/features/user/userApi";
import { useSelector } from "react-redux";
import type { RootState } from "~/redux/store";
import { useLocation } from "react-router";

type NavItem = {
  title: string;
  url: string;
  icon?: any;
  isActive?: boolean;
  items?: {
    title: string;
    url: string;
  }[];
};

type SidebarData = Record<string, NavItem[]>;

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { isLoading } = useUserProfile();
  const user = useSelector((state: RootState) => state.user);
  const location = useLocation();

  // ✅ Determine active route
  const isActive = (path: string) => location.pathname.includes(path);

  const data = {
    user: {
      name: "shadcn",
      email: "m@example.com",
      avatar: "/avatars/shadcn.jpg",
    },

    analyticsNav: [
      {
        title: "Dashboard",
        url: "/admin/dashboard",
        icon: ChartPie,
        isActive: isActive("/admin/dashboard"),
      },
    ],

    legalComplianceNav: [
      {
        title: "Policy",
        url: "/admin/policy",
        icon: FileBadge,
        isActive: isActive("/admin/policy"),
      },
    ],

    serviceManagementNav: [
      {
        title: "Policy",
        url: "/admin/policy",
        icon: Album,
        isActive: isActive("/admin/policy"),
      },

      {
        title: "Domains",
        url: "/admin/domains",
        icon: Globe,
        isActive: isActive("/admin/domains"),
      },
    ],

    customerFeedbackNav: [
      {
        title: "Testimonials",
        url: "/admin/testimonials",
        icon: UserStar,
        isActive: isActive("/admin/testimonials"),
      },
    ],

    mediaLibraryNav: [
      {
        title: "cta banner",
        url: "/admin/cta",
        icon: Table2,
        isActive: isActive("/admin/cta"),
      },
      
    ],

    communicationCenterNav: [
      {
        title: "Contact",
        url: "/admin/contact",
        icon: NotebookTabs,
        isActive: isActive("/admin/contact"),
      },
    ],
    careerManagementNav: [
      {
        title: "Careers",
        url: "/admin/career",
        icon: Briefcase,
        isActive: isActive("/admin/career"),
      },
    ],

    clientShowcaseNav: [
      {
        title: "Admissions",
        url: "/admin/admissions",
        icon: Layers,
        isActive: isActive("/admin/admissions"),
      },
    ],

    contentManagementNav: [
      {
        title: "Articles",
        url: "/admin/blogs",
        icon: BookCopy,
        isActive: isActive("/admin/blogs"),
        items: [
          { title: "All Articles", url: "/admin/blogs?filter=all" },
          { title: "Active Articles", url: "/admin/blogs?filter=active" },
          { title: "Inactive Articles", url: "/admin/blogs?filter=inactive" },
          { title: "Featured Articles", url: "/admin/blogs?filter=featured" },
          {
            title: "Non-Featured Articles",
            url: "/admin/blogs?filter=nonfeatured",
          },
        ],
      },
{
  title: "Courses",
  url: "/admin/courses",
  icon: BookCopy,
  isActive: isActive("/admin/courses"),  // ✅ ye bhi fix karo
  items: [
    { title: "All Course", url: "/admin/courses?filter=all" },
    { title: "Active Course", url: "/admin/courses?filter=active" },
    { title: "Inactive Course", url: "/admin/courses?filter=inactive" },
    { title: "Featured Course", url: "/admin/courses?filter=featured" },
    { title: "Non-Featured Course", url: "/admin/courses?filter=nonfeatured" },
  ],
},
      {
        title: "Categories",
        url: "/admin/category",
        icon: ChartBarStacked,
        isActive: isActive("/admin/category"),
      },
    ],

    appSettingsNav: [
      {
        title: "App Configuration",
        url: "/admin/app-config",
        icon: Settings2,
        isActive: isActive("/admin/app-config"),
      },
    ],

    navSecondary: [
      { title: "Support", url: "/admin/support", icon: LifeBuoy },
      { title: "Feedback", url: "/admin/feedback", icon: Send },
      { title: "Domains", url: "/admin/domains", icon: Send },
    ],
  };

  return (
    <Sidebar variant="floating" collapsible="icon" {...props}>
      {/* Header */}

      {/* Main Content */}
      <SidebarContent className="scrollbar-hide">
        {/* <NavMain items={data.analyticsNav} groupName="Analytics Center" /> */}
        <NavMain
          items={data.contentManagementNav}
          groupName="Content Management"
        />
        <NavMain
          items={data.serviceManagementNav}
          groupName="Service Management"
        />
        <NavMain
          items={data.customerFeedbackNav}
          groupName="Customer Feedback"
        />

        <NavMain items={data.mediaLibraryNav} groupName="Media Library" />

        <NavMain
          items={data.communicationCenterNav}
          groupName="Communication Center"
        />
        <NavMain
          items={data.legalComplianceNav}
          groupName="Legal & Compliance"
        />
        <NavMain
          items={data.careerManagementNav}
          groupName="Career Management"
        />

        <NavMain items={data.clientShowcaseNav} groupName="Client Showcase" />

        <NavMain items={data.appSettingsNav} groupName="Application Settings" />

        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>

      {/* Footer */}
      <SidebarFooter>
        {isLoading ? (
          <div className="p-2 text-xs text-muted-foreground">
            Loading user...
          </div>
        ) : user?.name ? (
          <NavUser
            user={{
              name: user.name!,
              email: user.email!,
              avatar: user.avatar || "/avatars/default.jpg",
            }}
          />
        ) : (
          <div className="p-2 text-xs text-muted-foreground">No user data</div>
        )}
      </SidebarFooter>
    </Sidebar>
  );
}
