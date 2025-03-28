"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { usePathname } from "next/navigation";

type Perspective = "admin" | "lead" | "member" | "guest";

const navigation = {
  admin: [
    { name: "Dashboard", href: "/admin" },
    { name: "Clubs", href: "/admin/clubs" },
    { name: "Leads", href: "/admin/leads" },
    { name: "Activities", href: "/admin/activities" },
  ],
  lead: [
    { name: "Dashboard", href: "/lead" },
    { name: "Events", href: "/lead/events" },
    { name: "Tasks", href: "/lead/tasks" },
    { name: "Progress", href: "/lead/progress" },
  ],
  member: [
    { name: "Dashboard", href: "/member" },
    { name: "My Tasks", href: "/member/tasks" },
    { name: "Activities", href: "/member/activities" },
  ],
  guest: [
    { name: "Home", href: "/" },
    { name: "Events", href: "/guest/events" },
    { name: "About", href: "/guest/about" },
  ],
};

interface SidebarProps {
  perspective: Perspective;
}

export function Sidebar({ perspective }: SidebarProps) {
  const pathname = usePathname();

  return (
    <div className="h-full w-64 bg-[#BBDEFB] border-r border-gray-200">
      <ScrollArea className="h-full">
        <div className="space-y-4 py-4">
          <div className="px-3 py-2">
            <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
              {perspective.charAt(0).toUpperCase() + perspective.slice(1)} Menu
            </h2>
            <div className="space-y-1">
              {navigation[perspective].map((item) => (
                <Button
                  key={item.href}
                  variant={pathname === item.href ? "secondary" : "ghost"}
                  className="w-full justify-start"
                  asChild
                >
                  <a href={item.href}>{item.name}</a>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
} 