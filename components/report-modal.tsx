"use client";

import React, { useEffect, useRef, useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { ReportModalCard } from "@/components/report-modal-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle } from "lucide-react";
import { ScamReport } from "@/lib/types";
import { supabase } from "@/lib/supabaseClient";
import VisuallyHidden from "./ui/visually-hidden";

interface Comment {
  id: string;
  content: string;
  createdAt: string;
  author?: string;
  parentId?: string;
  replies?: Comment[];
}

interface ReportModalProps {
  reportId: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onVote?: (reportId: string, voteType: "helpful" | "not_helpful") => void;
  onFlag?: (reportId: string, flag: boolean) => void;
  flagged?: boolean; // <-- add flagged prop
}

export function ReportModal({
  reportId,
  open,
  onOpenChange,
  onVote,
  onFlag,
  flagged = false, // <-- use flagged prop, default false
}: ReportModalProps) {
  const [report, setReport] = useState<ScamReport | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [commentText, setCommentText] = useState("");
  const [loading, setLoading] = useState(false);
  const [posting, setPosting] = useState(false);
  const [replyingTo, setReplyingTo] = useState<string | null>(null);
  const [replyText, setReplyText] = useState("");
  const inputRef = useRef<HTMLTextAreaElement>(null);
  // Supabase auth state
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data?.user || null);
    };
    getUser();
  }, []);
  const isAuthenticated = !!user;

  useEffect(() => {
    if (open) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 300);
      fetchReport();
      fetchComments();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, reportId]);

  const fetchReport = async () => {
    setLoading(true);
    try {
      // Prefer the dedicated endpoint to load any report by id
      const res = await fetch(`/api/reports/${reportId}`);
      const data = await res.json();
      if (data?.success && data?.data) {
        setReport(data.data as ScamReport);
        return;
      }
      // Fallback to list endpoint (older behavior)
      const resList = await fetch(`/api/reports?id=${reportId}`);
      const json = await resList.json();
      if (json.success && Array.isArray(json.data?.reports)) {
        const found = json.data.reports.find(
          (r: ScamReport) => r.id === reportId
        );
        if (found) setReport(found);
      }
    } finally {
      setLoading(false);
    }
  };

  // Helper to group comments into a tree (replies nested under parent)
  function groupComments(comments: Comment[]): Comment[] {
    const map: { [id: string]: Comment & { replies: Comment[] } } = {};
    const roots: (Comment & { replies: Comment[] })[] = [];

    comments.forEach((c) => {
      map[c.id] = { ...c, replies: [] };
    });

    Object.values(map).forEach((c) => {
      if (c.parentId) {
        if (map[c.parentId]) {
          map[c.parentId].replies.push(c);
        }
      } else {
        roots.push(c);
      }
    });

    return roots;
  }

  const fetchComments = async () => {
    try {
      const res = await fetch(`/api/reports/${reportId}/comments`);
      const data = await res.json();
      if (data.success && data && data.comments) {
        setComments(groupComments(data.comments));
      }
    } catch {}
  };

  const postComment = async () => {
    if (!isAuthenticated || !commentText.trim()) return;
    setPosting(true);
    try {
      const res = await fetch(`/api/reports/${reportId}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: commentText }),
      });
      const data = await res.json();
      if (data.success) {
        setCommentText("");
        fetchComments();
      }
    } finally {
      setPosting(false);
    }
  };

  const postReply = async (parentId: string) => {
    if (!isAuthenticated || !replyText.trim()) return;
    setPosting(true);
    try {
      const res = await fetch(`/api/reports/${reportId}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: replyText, parentId }),
      });
      const data = await res.json();
      if (data.success) {
        setReplyText("");
        setReplyingTo(null);
        fetchComments();
      }
    } finally {
      setPosting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        aria-describedby="modal-desc"
        className="lg:max-w-3xl mx-auto h-full max-h-full overflow-y-auto p-0"
      >
        <div id="modal-desc" className="p-6">
          <VisuallyHidden>
            <DialogTitle></DialogTitle>
          </VisuallyHidden>
          {loading && (
            <div className="p-2 text-sm text-gray-500">Loading report…</div>
          )}
          {!loading && !report && (
            <div className="p-2 text-sm text-gray-500">Report not found.</div>
          )}
          {report && (
            <ReportModalCard
              report={report}
              onVote={onVote}
              onFlag={onFlag}
              flagged={flagged}
            />
          )}
          <div className="mt-6">
            {/* <h3 className="font-semibold text-lg flex items-center gap-2 mb-2">
              <MessageCircle className="h-5 w-5" /> Comments
              <span className="ml-2 text-xs bg-gray-100 px-2 py-0.5 rounded">
                {comments.length}
              </span>
            </h3> */}
            {/* Comment form first */}
            {isAuthenticated ? (
              <div className="flex flex-col gap-2 mb-6">
                <Textarea
                  ref={inputRef}
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  placeholder="Write a comment..."
                  rows={3}
                  className="resize-none"
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      postComment();
                    }
                  }}
                  aria-label="Write a comment"
                />
                <div className="flex justify-end">
                  <Button
                    onClick={postComment}
                    disabled={posting || !commentText.trim()}
                    size="sm"
                  >
                    {posting ? "Posting..." : "Post Comment"}
                  </Button>
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-2 mb-6 p-4 bg-gray-50 rounded-lg border">
                <div className="flex items-center gap-2">
                  <MessageCircle className="h-4 w-4 text-gray-400" />
                  <p className="text-gray-600 text-sm font-medium">
                    Sign in to comment
                  </p>
                </div>
                <p className="text-gray-500 text-xs">
                  You can view all reports without signing in, but commenting,
                  voting, and flagging require authentication.
                </p>
                <Button
                  onClick={() =>
                    supabase.auth.signInWithOAuth({ provider: "google" })
                  }
                  size="sm"
                  className="w-fit"
                >
                  Sign in
                </Button>
              </div>
            )}
            {/* Comments list after form */}
            <div className="space-y-4 mb-4">
              {comments.length === 0 && (
                <div className="text-gray-400 text-sm">No comments yet.</div>
              )}
              {comments.map((c) => (
                <div key={c.id} className="bg-gray-50 rounded p-3 text-sm">
                  <div className="mb-1 text-gray-700">{c.content}</div>
                  <div className="text-xs text-gray-400 flex items-center gap-2">
                    {/* Show username if available, else fallback to author/userId */}
                    {c.author ? <span>{c.author} · </span> : null}
                    {new Date(c.createdAt).toLocaleString()}
                    {isAuthenticated && (
                      <Button
                        variant="link"
                        size="sm"
                        className="ml-2 px-1 py-0 text-xs"
                        onClick={() => setReplyingTo(c.id)}
                      >
                        Reply
                      </Button>
                    )}
                  </div>
                  {/* Reply form */}
                  {replyingTo === c.id && (
                    <div className="mt-2 flex flex-col gap-2">
                      <Textarea
                        value={replyText}
                        onChange={(e) => setReplyText(e.target.value)}
                        placeholder="Write a reply..."
                        rows={2}
                        className="resize-none"
                        onKeyDown={(e) => {
                          if (e.key === "Enter" && !e.shiftKey) {
                            e.preventDefault();
                            postReply(c.id);
                          }
                        }}
                        aria-label="Write a reply"
                        autoFocus
                      />
                      <div className="flex gap-2 justify-end">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => setReplyingTo(null)}
                        >
                          Cancel
                        </Button>
                        <Button
                          size="sm"
                          onClick={() => postReply(c.id)}
                          disabled={posting || !replyText.trim()}
                        >
                          {posting ? "Replying..." : "Reply"}
                        </Button>
                      </div>
                    </div>
                  )}
                  {/* Replies (single-level, indented) */}
                  {c.replies && c.replies.length > 0 && (
                    <div className="ml-3 mt-3 pl-4 border-l-2 border-gray-200 space-y-2">
                      {c.replies.map((r) => (
                        <div
                          key={r.id}
                          className="bg-gray-100 rounded p-2 text-xs"
                        >
                          <div className="mb-1 text-gray-700">{r.content}</div>
                          <div className="text-xs text-gray-400">
                            {r.author ? <span>{r.author} · </span> : null}
                            {new Date(r.createdAt).toLocaleString()}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
