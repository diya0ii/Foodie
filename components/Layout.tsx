"use client";

import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";
import { usePathname } from "next/navigation";

type Perspective = "admin" | "lead" | "member" | "guest";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const pathname = usePathname();
  const perspective = pathname.split("/")[1] as Perspective || "guest";

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex h-[calc(100vh-4rem)]">
        <Sidebar perspective={perspective} />
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
} 