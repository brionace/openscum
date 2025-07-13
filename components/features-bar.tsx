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
      <Card className="min-w-[260px] lg:min-w-0 flex-shrink-0">
        <CardContent className="space-y-3 mt-5 text-sm">
          <p>
            We are a public, community-powered spam reporting and lookup site.
            Search spam by spammer credentials or content, report scams in real
            time, and help expose con artists. Comment, vote, and flag
            suspicious posts to keep the database clean and up to date.
          </p>
          <div className="flex items-start gap-2 p-2 bg-green-50 rounded border border-green-200">
            <Shield className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
            <div className="text-xs">
              <span className="font-medium text-green-800">
                Anonymous Reports Welcome:
              </span>
              <span className="text-green-700">
                {" "}
                Submit reports without signing in. Authentication only required
                for voting, flagging, and commenting.
              </span>
            </div>
          </div>
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
      <Card className="min-w-[260px] lg:min-w-0 flex-shrink-0">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5 text-green-500" /> Learn & Protect
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <Button variant="outline" className="w-full justify-between">
            <span className="flex items-center">
              <Shield className="h-4 w-4 mr-2" /> Common Scam Tactics
            </span>
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button variant="outline" className="w-full justify-between">
            <span className="flex items-center">
              <AlertTriangle className="h-4 w-4 mr-2" /> How to Verify Contacts
            </span>
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button variant="outline" className="w-full justify-between">
            <span className="flex items-center">
              <Phone className="h-4 w-4 mr-2" /> Report to Authorities
            </span>
            <ArrowRight className="h-4 w-4" />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
