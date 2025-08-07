"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabaseClient";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
  const [pendingScamTypes, setPendingScamTypes] = useState<PendingScamType[]>([]);
  const [processingIds, setProcessingIds] = useState<Set<string>>(new Set());
  const { toast } = useToast();

  useEffect(() => {
    checkAccess();
  }, []);

  const checkAccess = async () => {
    try {
      const supabase = createClient();
      const { data: { session } } = await supabase.auth.getSession();

      if (!session?.access_token) {
        setError("You must be logged in to access this page");
        setIsLoading(false);
        return;
      }

      // Check if user has admin access by calling the API
      const response = await fetch("/api/admin/scam-types/pending", {
        headers: {
          "Authorization": `Bearer ${session.access_token}`,
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
      setProcessingIds(prev => new Set(prev).add(scamTypeId));
      
      const supabase = createClient();
      const { data: { session } } = await supabase.auth.getSession();

      if (!session?.access_token) {
        throw new Error("Not authenticated");
      }

      const response = await fetch("/api/admin/scam-types/approve", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${session.access_token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ scamTypeId }),
      });

      if (response.ok) {
        setPendingScamTypes(prev => prev.filter(st => st.id !== scamTypeId));
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
        description: err instanceof Error ? err.message : "Failed to approve scam type",
        variant: "destructive",
      });
    } finally {
      setProcessingIds(prev => {
        const newSet = new Set(prev);
        newSet.delete(scamTypeId);
        return newSet;
      });
    }
  };

  const handleReject = async (scamTypeId: string) => {
    try {
      setProcessingIds(prev => new Set(prev).add(scamTypeId));
      
      const supabase = createClient();
      const { data: { session } } = await supabase.auth.getSession();

      if (!session?.access_token) {
        throw new Error("Not authenticated");
      }

      const response = await fetch("/api/admin/scam-types/reject", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${session.access_token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ scamTypeId }),
      });

      if (response.ok) {
        setPendingScamTypes(prev => prev.filter(st => st.id !== scamTypeId));
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
        description: err instanceof Error ? err.message : "Failed to reject scam type",
        variant: "destructive",
      });
    } finally {
      setProcessingIds(prev => {
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
              {error || "You don't have permission to access this page. Admin or moderator role required."}
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
          <p className="text-gray-600">Manage scam type submissions and user reports</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Pending Scam Type Submissions</CardTitle>
            <CardDescription>
              Review and moderate user-submitted scam types ({pendingScamTypes.length} pending)
            </CardDescription>
          </CardHeader>
          <CardContent>
            {pendingScamTypes.length === 0 ? (
              <p className="text-gray-500 text-center py-8">No pending submissions to review</p>
            ) : (
              <div className="space-y-4">
                {pendingScamTypes.map((scamType) => (
                  <div key={scamType.id} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">{scamType.name}</h3>
                        <div className="flex items-center gap-2 mt-2">
                          <Badge variant="outline">User Submitted</Badge>
                          <span className="text-sm text-gray-500">
                            Submitted: {new Date(scamType.createdAt).toLocaleDateString()}
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
                          {processingIds.has(scamType.id) ? "Processing..." : "Approve"}
                        </Button>
                        <Button
                          onClick={() => handleReject(scamType.id)}
                          disabled={processingIds.has(scamType.id)}
                          size="sm"
                          variant="destructive"
                        >
                          {processingIds.has(scamType.id) ? "Processing..." : "Reject"}
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
    try {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) {
        return false;
      }

      const response = await fetch("/api/admin/scam-types/pending", {
        headers: {
          Authorization: `Bearer ${session.access_token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setPendingTypes(data);
        return true;
      } else if (response.status === 403) {
        // Access denied - user doesn't have admin/moderator role
        return false;
      } else {
        console.error("Failed to fetch pending types");
        return false;
      }
    } catch (error) {
      console.error("Error fetching pending types:", error);
      return false;
    }
  };

  const moderateScamType = async (
    scamTypeId: string,
    action: "approve" | "reject"
  ) => {
    setProcessing(scamTypeId);

    try {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) return;

      const response = await fetch("/api/admin/scam-types/moderate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session.access_token}`,
        },
        body: JSON.stringify({
          scamTypeId,
          action,
        }),
      });

      if (response.ok) {
        // Remove the moderated type from the list
        setPendingTypes((prev) =>
          prev.filter((type) => type.id !== scamTypeId)
        );

        const result = await response.json();
        console.log(`Scam type ${action}d successfully:`, result.message);
      } else {
        const error = await response.json();
        console.error(`Failed to ${action} scam type:`, error.error);
      }
    } catch (error) {
      console.error(`Error ${action}ing scam type:`, error);
    } finally {
      setProcessing(null);
    }
  };

  const handleLogin = async () => {
    await supabase.auth.signInWithOAuth({ provider: "google" });
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    setPendingTypes([]);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Admin Access Required</h1>
          <p className="mb-4">
            You need to be logged in to access the admin panel.
          </p>
          <button
            onClick={handleLogin}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Login with Google
          </button>
        </div>
      </div>
    );
  }

  if (accessDenied) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🚫</div>
          <h1 className="text-2xl font-bold mb-4 text-red-600">
            Access Denied
          </h1>
          <p className="mb-4 text-gray-600">
            You need admin or moderator privileges to access this panel.
          </p>
          <p className="mb-4 text-sm text-gray-500">
            Logged in as: {user.email}
          </p>
          <div className="space-x-4">
            <button
              onClick={handleLogout}
              className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
            >
              Switch Account
            </button>
            <button
              onClick={() => (window.location.href = "/")}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Return Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Scam Type Moderation
              </h1>
              <p className="text-gray-600 mt-1">
                Review and approve user-submitted scam types
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">
                Logged in as: {user.email}
              </span>
              <button
                onClick={handleLogout}
                className="text-sm bg-gray-600 text-white px-3 py-1 rounded hover:bg-gray-700"
              >
                Logout
              </button>
            </div>
          </div>

          <div className="p-6">
            {pendingTypes.length === 0 ? (
              <div className="text-center py-8">
                <div className="text-gray-400 text-lg mb-2">🎉</div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  No pending scam types
                </h3>
                <p className="text-gray-500">
                  All user-submitted scam types have been reviewed.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="mb-4">
                  <h2 className="text-lg font-semibold text-gray-900">
                    Pending Approval ({pendingTypes.length})
                  </h2>
                  <p className="text-sm text-gray-600">
                    Review each scam type and decide whether to approve or
                    reject it.
                  </p>
                </div>

                {pendingTypes.map((scamType) => (
                  <div
                    key={scamType.id}
                    className="border border-gray-200 rounded-lg p-4 bg-gray-50"
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 text-lg">
                          {scamType.name}
                        </h3>
                        <div className="mt-2 space-y-1 text-sm text-gray-600">
                          <p>
                            <span className="font-medium">Created by:</span>{" "}
                            {scamType.createdBy}
                          </p>
                          <p>
                            <span className="font-medium">Submitted:</span>{" "}
                            {new Date(scamType.createdAt).toLocaleDateString()}
                          </p>
                        </div>
                      </div>

                      <div className="flex space-x-2 ml-4">
                        <button
                          onClick={() =>
                            moderateScamType(scamType.id, "approve")
                          }
                          disabled={processing === scamType.id}
                          className="bg-green-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
                        >
                          {processing === scamType.id
                            ? "Processing..."
                            : "Approve"}
                        </button>
                        <button
                          onClick={() =>
                            moderateScamType(scamType.id, "reject")
                          }
                          disabled={processing === scamType.id}
                          className="bg-red-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-red-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
                        >
                          {processing === scamType.id
                            ? "Processing..."
                            : "Reject"}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
