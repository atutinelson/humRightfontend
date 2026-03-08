"use client";

import Link from "next/link";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { NAVBAR_HEIGHT } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Building, FileText, ListChecks, LucideLayoutDashboard, Menu, Settings, Star, X } from "lucide-react";
import { usePathname } from "next/navigation";
import React from "react";

export function AppSidebar() {
  const { toggleSidebar, open } = useSidebar();
  const pathname = usePathname() ?? "/";

  type NavLink = {
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    label: string;
    href: string;
  };

  const navLinks: NavLink[] = React.useMemo(
    () => [
      { icon: LucideLayoutDashboard, label: "Dashboard", href: "/admin" },
      { icon: ListChecks, label: "FreeBets", href: "/admin/freebets" },
      { icon: Star, label: "Premium Tips", href: "/admin/plan" },
      { icon: Settings, label: "Settings", href: "/admin/settings" },
    ],
    []
  );

  return (
    <Sidebar
      collapsible="icon"
      className="fixed left-0 bg-white shadow-lg border-r border-gray-100"
      style={{
        top: `${NAVBAR_HEIGHT}px`,
        height: `calc(100vh - ${NAVBAR_HEIGHT}px)`,
      }}
    >
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <div
              className={cn(
                "flex min-h-[56px] w-full items-center pt-3 mb-3",
                open ? "justify-between px-6" : "justify-center"
              )}
            >
              {open ? (
                <>
                  <div className="p-6 border-b border-sidebar-border">
                    <h1 className="font-display text-2xl font-bold">Hum
                        <span className="text-[#057857]">Right</span>
                </h1>
                <p className="text-xs text-muted-foreground mt-1">Admin Dashboard</p>
                 </div>
                  <button
                    className="hover:bg-gray-100 p-2 rounded-md"
                    onClick={toggleSidebar}
                    aria-label="Close sidebar"
                  >
                    <X className="h-6 w-6 text-gray-600" />
                  </button>
                </>
              ) : (
                <button
                  className="hover:bg-gray-100 p-2 rounded-md"
                  onClick={toggleSidebar}
                  aria-label="Open sidebar"
                >
                  <Menu className="h-6 w-6 text-gray-600" />
                </button>
              )}
            </div>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarMenu>
          {navLinks.map((link) => {
            const isActive = pathname.startsWith(link.href);

            return (
              <SidebarMenuItem key={link.href}>
                <SidebarMenuButton
                  asChild
                  className={cn(
                    "flex items-center px-6 py-3 transition-colors",
                    isActive
                      ? "bg-gray-100 text-[#057857]"
                      : "text-gray-600 hover:bg-gray-100"
                  )}
                >
                  <Link href={link.href} className="w-full" 
                  aria-current={isActive ? "page" : undefined}>
                    <div className="flex items-center gap-3">
                      <link.icon
                        className={cn(
                          "h-5 w-5",
                          isActive ? "text-[#057857]" : "text-gray-600"
                        )}
                        title={!open ? link.label : undefined}
                        aria-hidden={open ? undefined : true}
                      />
                      {open && (
                        <span className="font-medium">
                          {link.label}
                        </span>
                      )}
                    </div>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter />
    </Sidebar>
  );
}