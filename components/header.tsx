"use client";
import Link from "next/link";
import { SearchBar } from "@/components/search-bar";
import { Button } from "@/components/ui/button";
import { Plus, Menu, Search } from "lucide-react";
import React, { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { FeaturesBar } from "@/components/features-bar";
import { useMediaQuery } from "@/hooks/use-media-query";
import { ScamReport } from "@/lib/types";
import Logo from "@/components/logo";

interface HeaderProps {
  onReportClick: () => void;
  reports: ScamReport[];
}

export function Header({ onReportClick, reports }: HeaderProps) {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const [showSearchModal, setShowSearchModal] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-2 md:px-4 py-2 gap-2">
        {/* Left: Logo and name */}
        <div className="flex items-center">
          {isDesktop && (
            <Link
              href="/"
              className="flex items-center gap-2 font-bold text-lg text-red-600"
            >
              <Logo />
              <span>Openscum</span>
            </Link>
          )}
          {/* Mobile: Sidebar Drawer Trigger */}
          {!isDesktop && (
            <>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="p-0 w-80 max-w-full">
                  <FeaturesBar />
                </SheetContent>
              </Sheet>
              <Link href="/" className="text-red-600">
                <Logo size={6} />
              </Link>
            </>
          )}
        </div>
        {/* Center: SearchBar */}
        {isDesktop && (
          <div className="flex-1 flex justify-center">
            <div className="w-full max-w-lg">
              <SearchBar placeholder="Search" reports={reports} />
            </div>
          </div>
        )}
        {/* Right: Report button */}
        <div className="flex gap-2 items-center">
          {!isDesktop && (
            <div>
              <Button
                variant="ghost"
                // size="icon"
                aria-label="Open search"
                onClick={() => setShowSearchModal(true)}
                className="flex items-center gap-2 rounded-full hover:bg-gray-100"
              >
                <Search className="h-6 w-6" />{" "}
                <span className="text-gray-500">Search</span>
              </Button>
              <Sheet open={showSearchModal} onOpenChange={setShowSearchModal}>
                <SheetContent
                  side="top"
                  className="p-0 w-full max-w-full h-screen flex flex-col"
                >
                  <div className="pt-16 px-2">
                    <SearchBar
                      placeholder="Search"
                      reports={reports}
                      className="w-full"
                    />
                  </div>
                  {/* Optionally, show results below or inside SearchBar */}
                </SheetContent>
              </Sheet>
            </div>
          )}
          <Button
            onClick={onReportClick}
            variant="ghost"
            className="flex items-center gap-2 rounded-full hover:bg-gray-100"
          >
            <Plus className="h-4 w-4" />
            <span className="hidden lg:inline">Report Scam</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
