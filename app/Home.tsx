"use client";

import React, { useEffect, useState } from "react";
import AppHeader from "./AppHeader/AppHeader";
import { Card } from "@/components/ui/card";
import AppTable from "./AppTable/AppTable";
import { useTheme } from "next-themes";
import { DeleteDialog } from "./DeleteDialog";

export default function Home() {
  const { theme } = useTheme();
  const [isClient, setIsClient] = useState(false);
  const bgColor = theme === "dark" ? "bg-black" : "bg-gray-50";

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div className={`poppins p-5 ${bgColor} border w-full min-h-screen`}>
      <Card className="flex flex-col shadow-none p-4 sm:p-5 space-y-4">
        <DeleteDialog />
        <AppHeader />
        <AppTable />
      </Card>
    </div>
  );
}
