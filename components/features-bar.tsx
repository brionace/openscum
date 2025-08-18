"use client";
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Users,
  ArrowRight,
  Shield,
  AlertTriangle,
  Phone,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { TrendingBar } from "@/components/trending-bar";
import Logo from "./logo";
import { LearnActions } from "@/components/learn-actions";

export function FeaturesBar() {
  return (
    <div className="flex flex-col gap-4 lg:gap-6 lg:flex-col w-full lg:w-80">
      {/* About */}
      <Card className="min-w-[260px] lg:min-w-0 flex-shrink-0 mt-12 lg:mt-0 border-0 lg:border rounded-none lg:rounded-lg">
        <CardContent className="space-y-3 text-sm">
          <Link
            href="/"
            className="flex lg:hidden items-center gap-2 font-bold text-lg text-red-600"
          >
            <Logo />
            <span>Openscum</span>
          </Link>
          <p>
            We are a community-powered scam reporting and lookup site. Search
            scams by scammer credentials or content, report scams to help expose
            con artists. Comment, vote, and flag suspicious posts to keep the
            database clean and up to date.
          </p>
          <p>
            <a href="/about" className="text-blue-500 hover:underline">
              Learn more about us
            </a>
          </p>
        </CardContent>
      </Card>
      {/* Trending Scams */}
      {/* <Card className="min-w-[260px] lg:min-w-0 flex-shrink-0">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-orange-500" /> Trending
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <TrendingBar rowStyle />
          <Link href="/search">
            <Button variant="link" className="p-0 h-auto text-sm">
              View all trending →
            </Button>
          </Link>
        </CardContent>
      </Card> */}
      {/* Regional Alerts */}
      {/* <Card className="min-w-[260px] lg:min-w-0 flex-shrink-0">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-blue-500" /> Your Area Alerts
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="flex items-center justify-between">
            <span>Fake Utility Bills</span>
            <Badge variant="outline">Local</Badge>
          </div>
          <div className="flex items-center justify-between">
            <span>Job Scam Emails</span>
            <Badge variant="outline">Regional</Badge>
          </div>
          <Link href="/search">
            <Button variant="link" className="p-0 h-auto text-sm">
              View area dashboard →
            </Button>
          </Link>
        </CardContent>
      </Card> */}
      {/* Education */}
      <Card className="min-w-[260px] lg:min-w-0 flex-shrink-0 border-0 lg:border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5 text-green-500" /> Learn & Protect
          </CardTitle>
        </CardHeader>
        <CardContent>
          <LearnActions />
        </CardContent>
      </Card>
    </div>
  );
}
