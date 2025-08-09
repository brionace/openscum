"use client";
import Link from "next/link";
import { SearchBar } from "@/components/search-bar";
import { Button } from "@/components/ui/button";
import { Shield, Plus, EllipsisVertical } from "lucide-react";
import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { FeaturesBar } from "@/components/features-bar";
import { useMediaQuery } from "@/hooks/use-media-query";
import { ScamReport } from "@/lib/types";

interface HeaderProps {
  onReportClick: () => void;
  reports: ScamReport[];
}

export function Header({ onReportClick, reports }: HeaderProps) {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-2 md:px-4 py-2 gap-2">
        {/* Left: Logo and name */}
        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-lg text-red-600"
        >
          <Shield className="h-7 w-7" />
          <span className="hidden lg:inline">Openscum</span>
        </Link>
        {/* Mobile: Sidebar Drawer Trigger */}
        {!isDesktop && (
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <EllipsisVertical className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0 w-80 max-w-full">
              <FeaturesBar />
            </SheetContent>
          </Sheet>
        )}
        {/* Center: SearchBar */}
        <div className="flex-1 flex justify-center">
          <div className="w-full max-w-lg">
            <SearchBar placeholder="Search scams..." reports={reports} />
          </div>
        </div>
        {/* Right: Report button */}
        <Button
          onClick={onReportClick}
          size="default"
          variant="secondary"
          className="flex items-center gap-2 bg-gradient-to-br from-blue-50 via-red-50 to-green-50"
        >
          <Plus className="h-4 w-4" />
          <span className="hidden lg:inline">Report Scam</span>
        </Button>
      </div>
    </header>
  );
}
