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

export function FeaturesBar() {
  return (
    <div className="flex flex-col gap-4 lg:gap-6 lg:flex-col w-full lg:w-80">
      {/* About */}
      <Card className="min-w-[260px] lg:min-w-0 flex-shrink-0 mt-12 lg:mt-0 border-0 lg:border">
        <CardContent className="space-y-3 mt-5 text-sm">
          <p>
            We are a public, community-powered scam reporting and lookup site.
            Search scams by scammer credentials or content, report scams to help
            expose con artists. Comment, vote, and flag suspicious posts to keep
            the database clean and up to date.
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
        <CardContent className="flex flex-col gap-2">
          <Link href="/learn/category/prevention">
            <Button asChild variant="outline" className="w-full justify-start">
              <span>
                <Shield className="h-4 w-4 mr-2" />
                <span>Common Scam Tactics</span>
              </span>
            </Button>
          </Link>
          <Link href="/learn/category/guide">
            <Button asChild variant="outline" className="w-full justify-start">
              <span>
                <AlertTriangle className="h-4 w-4 mr-2" />
                <span>How to Verify</span>
              </span>
            </Button>
          </Link>
          <Link href="/learn/category/report_to_authorities">
            <Button asChild variant="outline" className="w-full justify-start">
              <span>
                <Phone className="h-4 w-4 mr-2" />
                <span>Report to Authorities</span>
              </span>
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
