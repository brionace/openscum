"use client";
import Link from "next/link";
import { SearchBar } from "@/components/search-bar";
import { Button } from "@/components/ui/button";
import { Shield, Plus, EllipsisVertical, ArrowLeft } from "lucide-react";
import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { FeaturesBar } from "@/components/features-bar";
import { useMediaQuery } from "@/hooks/use-media-query";
import { ScamReport } from "@/lib/types";
import Logo from "./logo";

export function HeaderPages() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-2 md:px-4 py-2 gap-2">
        {/* Back Button */}
        {/* <Button variant="ghost" onClick={() => window.history.back()}>
          <ArrowLeft className="h-4 w-4" />
          Back
        </Button> */}

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-lg text-red-600"
        >
          <Logo />
        </Link>
        <Button variant="ghost" size="icon">
          <EllipsisVertical className="h-4 w-4" />
        </Button>
      </div>
    </header>
  );
}
