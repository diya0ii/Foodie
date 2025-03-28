"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";

type Perspective = "admin" | "lead" | "member" | "guest";

export function Navbar() {
  const router = useRouter();
  const [currentPerspective, setCurrentPerspective] = useState<Perspective>("guest");

  const perspectives: Perspective[] = ["admin", "lead", "member", "guest"];

  const handlePerspectiveChange = (perspective: Perspective) => {
    setCurrentPerspective(perspective);
    router.push(`/${perspective}`);
  };

  return (
    <nav className="bg-[#FFF9C4] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold text-gray-800">Foodie</span>
          </div>
          <div className="flex items-center space-x-2">
            {perspectives.map((perspective) => (
              <Button
                key={perspective}
                variant={currentPerspective === perspective ? "default" : "outline"}
                onClick={() => handlePerspectiveChange(perspective)}
                className="capitalize"
              >
                {perspective}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
} 