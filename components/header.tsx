"use client";
import Link from "next/link";
import { SearchBar } from "@/components/search-bar";
import { Button } from "@/components/ui/button";
import { Shield, AlertTriangle, Menu } from "lucide-react";
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
        {/* Center: SearchBar */}
        <div className="flex-1 flex justify-center">
          <div className="w-full max-w-lg">
            <SearchBar placeholder="Search scams..." reports={reports} />
          </div>
        </div>
        {/* Mobile: Sidebar Drawer Trigger */}
        {!isDesktop && (
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="mr-1">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="p-0 w-80 max-w-full">
              <FeaturesBar />
            </SheetContent>
          </Sheet>
        )}
        {/* Right: Report button */}
        <Button onClick={onReportClick} className="ml-2" size="lg">
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-6 w-6" />
            <span className="hidden lg:inline">Report Scam</span>
          </div>
        </Button>
      </div>
    </header>
  );
}
