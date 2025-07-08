"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Search, Mic, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cache } from "@/lib/cache";
import { ScamReport } from "@/lib/types";

interface SearchBarProps {
  onSearch?: (query: string) => void;
  placeholder?: string;
  className?: string;
  type?: string; // 'phone' | 'email' | 'website' | undefined
  reports?: ScamReport[]; // Pass all reports for client-side search
  onResultClick?: (report: ScamReport) => void; // For modal open
}

export function SearchBar({
  onSearch,
  placeholder = "Check phone, email, or website...",
  className,
  type,
  reports = [],
  onResultClick,
}: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [searchResults, setSearchResults] = useState<ScamReport[]>([]);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const router = useRouter();
  const rootRef = React.useRef<HTMLInputElement>(null);
  const resultsRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load recent searches from cache
    const cached = cache.get<string[]>("recent-searches") || [];
    setRecentSearches(cached);
  }, []);

  // Debounce search
  useEffect(() => {
    if (!query.trim()) {
      setSearchResults([]);
      setHighlightedIndex(-1);
      return;
    }
    const handler = setTimeout(() => {
      const q = query.toLowerCase();
      const matches = reports.filter((r) =>
        [
          r.description,
          r.city,
          r.country,
          r.scamType?.name,
          r.phoneNumber,
          r.email,
          r.website,
        ]
          .filter(Boolean)
          .some((field) => field!.toLowerCase().includes(q))
      );
      // Deduplicate by report id
      const uniqueMatches = Array.from(
        new Map(matches.map((r) => [r.id, r])).values()
      );
      setSearchResults(uniqueMatches.slice(0, 10));
      setHighlightedIndex(-1);
    }, 200);
    return () => clearTimeout(handler);
  }, [query, reports]);

  // Click outside to close
  useEffect(() => {
    if (!showDropdown) return;
    function handleClick(e: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [showDropdown]);

  const handleSearch = (searchQuery: string) => {
    if (!searchQuery.trim()) return;
    const updated = [
      searchQuery,
      ...recentSearches.filter((s) => s !== searchQuery),
    ].slice(0, 5);
    setRecentSearches(updated);
    cache.set("recent-searches", updated);
    if (onSearch) {
      onSearch(searchQuery);
    } else {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSearch(query);
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!searchResults.length) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlightedIndex((prev) =>
        prev < searchResults.length - 1 ? prev + 1 : 0
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlightedIndex((prev) =>
        prev > 0 ? prev - 1 : searchResults.length - 1
      );
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (highlightedIndex >= 0 && highlightedIndex < searchResults.length) {
        const selected = searchResults[highlightedIndex];
        if (onResultClick) onResultClick(selected);
        else window.location.hash = `#/reports/${selected.id}`;
      } else {
        handleSearch(query);
      }
    }
  };

  const startVoiceSearch = () => {
    if (!("webkitSpeechRecognition" in window)) {
      alert("Voice search not supported in this browser");
      return;
    }

    const recognition = new (window as any).webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = "en-US";

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      setQuery(transcript); // Only set the query, do not call handleSearch
      // Removed handleSearch(transcript) to prevent navigation
    };

    recognition.onerror = () => {
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.start();
  };

  const clearQuery = () => {
    setQuery("");
    setSearchResults([]);
    setHighlightedIndex(-1);
  };

  return (
    <div ref={rootRef} className={`relative ${className}`}>
      <form onSubmit={handleSubmit} className="relative">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
          <Input
            type={
              type === "email" ? "email" : type === "phone" ? "tel" : "text"
            }
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setShowDropdown(true)}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            className="pl-12 pr-20 py-4 text-lg rounded-xl border-2 focus:border-blue-500 shadow-lg"
            inputMode={type === "phone" ? "tel" : undefined}
            autoFocus
          />
          <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex gap-1">
            {query && (
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={clearQuery}
                className="h-8 w-8 p-0"
              >
                <X className="h-4 w-4" />
              </Button>
            )}
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={startVoiceSearch}
              className={`h-8 w-8 p-0 ${
                isListening ? "text-red-500 animate-pulse" : ""
              }`}
            >
              <Mic className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </form>

      {/* Dropdown: Recent searches (horizontal scroll) + search results */}
      {showDropdown && query.length > 0 && (
        <div className="absolute w-full mt-2 bg-white rounded-lg shadow-md border p-2 z-50">
          {recentSearches.length > 0 && (
            <div>
              <div className="text-xs text-muted-foreground mb-1">
                Recent searches
              </div>
              <div className="flex gap-2 overflow-x-auto scrollbar-none pb-2 mb-2 border-b">
                {recentSearches.map((search, index) => (
                  <button
                    key={index}
                    className="px-3 py-1 text-xs bg-gray-100 rounded-full hover:bg-gray-200 transition-colors whitespace-nowrap"
                    onClick={() => {
                      setQuery(search);
                      handleSearch(search);
                    }}
                  >
                    {search}
                  </button>
                ))}
              </div>
            </div>
          )}
          {/* Search results */}
          <div className="max-h-72 overflow-y-auto">
            {searchResults.length > 0 ? (
              searchResults.map((result, idx) => (
                <div
                  key={result.id}
                  className={`px-3 py-2 rounded cursor-pointer flex flex-col gap-0.5 hover:bg-blue-50 ${
                    highlightedIndex === idx ? "bg-blue-100" : ""
                  }`}
                  onMouseEnter={() => setHighlightedIndex(idx)}
                  onMouseDown={(e) => {
                    e.preventDefault();
                    if (onResultClick) onResultClick(result);
                    else window.location.hash = `#/reports/${result.id}`;
                  }}
                >
                  <span className="text-sm line-clamp-1">
                    {result.description}
                  </span>
                  <span className="font-medium text-xs text-gray-500 line-clamp-1">
                    {result.scamType?.name || "Scam Report"}
                  </span>
                </div>
              ))
            ) : query.trim() ? (
              <div className="text-gray-400 px-3 py-2">No results found</div>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
}
