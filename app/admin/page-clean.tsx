"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

interface PendingScamType {
  id: string;
  name: string;
  createdBy: string | null;
  createdAt: string;
  isUserCreated: boolean;
  isApproved: boolean;
}

export default function AdminPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [pendingScamTypes, setPendingScamTypes] = useState<PendingScamType[]>(
    []
  );
  const [processingIds, setProcessingIds] = useState<Set<string>>(new Set());
  const { toast } = useToast();

  useEffect(() => {
    checkAccess();
  }, []);

  const checkAccess = async () => {
    try {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session?.access_token) {
        setError("You must be logged in to access this page");
        setIsLoading(false);
        return;
      }

      // Check if user has admin access by calling the API
      const response = await fetch("/api/admin/scam-types/pending", {
        headers: {
          Authorization: `Bearer ${session.access_token}`,
        },
      });

      if (response.ok) {
        setIsAuthorized(true);
        const data = await response.json();
        setPendingScamTypes(data);
      } else {
        const errorData = await response.json();
        setError(errorData.error || "Access denied");
      }
    } catch (err) {
      console.error("Error checking access:", err);
      setError("Failed to verify access");
    } finally {
      setIsLoading(false);
    }
  };

  const handleApprove = async (scamTypeId: string) => {
    try {
      setProcessingIds((prev) => new Set(prev).add(scamTypeId));

      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session?.access_token) {
        throw new Error("Not authenticated");
      }

      const response = await fetch("/api/admin/scam-types/approve", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${session.access_token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ scamTypeId }),
      });

      if (response.ok) {
        setPendingScamTypes((prev) =>
          prev.filter((st) => st.id !== scamTypeId)
        );
        toast({
          title: "Success",
          description: "Scam type approved successfully",
        });
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to approve scam type");
      }
    } catch (err) {
      console.error("Error approving scam type:", err);
      toast({
        title: "Error",
        description:
          err instanceof Error ? err.message : "Failed to approve scam type",
        variant: "destructive",
      });
    } finally {
      setProcessingIds((prev) => {
        const newSet = new Set(prev);
        newSet.delete(scamTypeId);
        return newSet;
      });
    }
  };

  const handleReject = async (scamTypeId: string) => {
    try {
      setProcessingIds((prev) => new Set(prev).add(scamTypeId));

      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session?.access_token) {
        throw new Error("Not authenticated");
      }

      const response = await fetch("/api/admin/scam-types/reject", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${session.access_token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ scamTypeId }),
      });

      if (response.ok) {
        setPendingScamTypes((prev) =>
          prev.filter((st) => st.id !== scamTypeId)
        );
        toast({
          title: "Success",
          description: "Scam type rejected and removed",
        });
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to reject scam type");
      }
    } catch (err) {
      console.error("Error rejecting scam type:", err);
      toast({
        title: "Error",
        description:
          err instanceof Error ? err.message : "Failed to reject scam type",
        variant: "destructive",
      });
    } finally {
      setProcessingIds((prev) => {
        const newSet = new Set(prev);
        newSet.delete(scamTypeId);
        return newSet;
      });
    }
  };

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto"></div>
          <p className="mt-4">Checking access...</p>
        </div>
      </div>
    );
  }

  if (error || !isAuthorized) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-md mx-auto">
          <CardHeader>
            <CardTitle className="text-red-600">Access Denied</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              {error ||
                "You don't have permission to access this page. Admin or moderator role required."}
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Panel</h1>
          <p className="text-gray-600">
            Manage scam type submissions and user reports
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Pending Scam Type Submissions</CardTitle>
            <CardDescription>
              Review and moderate user-submitted scam types (
              {pendingScamTypes.length} pending)
            </CardDescription>
          </CardHeader>
          <CardContent>
            {pendingScamTypes.length === 0 ? (
              <p className="text-gray-500 text-center py-8">
                No pending submissions to review
              </p>
            ) : (
              <div className="space-y-4">
                {pendingScamTypes.map((scamType) => (
                  <div key={scamType.id} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">
                          {scamType.name}
                        </h3>
                        <div className="flex items-center gap-2 mt-2">
                          <Badge variant="outline">User Submitted</Badge>
                          <span className="text-sm text-gray-500">
                            Submitted:{" "}
                            {new Date(scamType.createdAt).toLocaleDateString()}
                          </span>
                          {scamType.createdBy && (
                            <span className="text-sm text-gray-500">
                              by: {scamType.createdBy}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="flex gap-2 ml-4">
                        <Button
                          onClick={() => handleApprove(scamType.id)}
                          disabled={processingIds.has(scamType.id)}
                          size="sm"
                          className="bg-green-600 hover:bg-green-700"
                        >
                          {processingIds.has(scamType.id)
                            ? "Processing..."
                            : "Approve"}
                        </Button>
                        <Button
                          onClick={() => handleReject(scamType.id)}
                          disabled={processingIds.has(scamType.id)}
                          size="sm"
                          variant="destructive"
                        >
                          {processingIds.has(scamType.id)
                            ? "Processing..."
                            : "Reject"}
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
