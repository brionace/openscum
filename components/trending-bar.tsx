import React, { useEffect, useState } from "react";
import { Flame } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface TrendingType {
  scamTypeId: string | null;
  name: string;
  count: number;
}

export function TrendingBar({ rowStyle = false }: { rowStyle?: boolean }) {
  const [trending, setTrending] = useState<TrendingType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/trends")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setTrending(data.data.trending);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading)
    return (
      <div className="flex items-center gap-2 p-2 text-gray-500">
        <Flame className="h-4 w-4 animate-pulse" /> Loading trends…
      </div>
    );

  if (!trending.length) return null;

  if (rowStyle) {
    return (
      <div className="space-y-2 overflow-x-auto scrollbar-none">
        {trending.map((t) => (
          <div key={t.scamTypeId} className="flex items-center justify-between">
            <span>{t.name}</span>
            <Badge variant="outline">{t.count}</Badge>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2 p-2 bg-orange-50 rounded-lg mb-4">
      <Flame className="h-4 w-4 text-orange-600" />
      <span className="font-semibold text-orange-800 text-sm">Trending:</span>
      {trending.map((t) => (
        <Badge
          key={t.scamTypeId}
          variant="outline"
          className="text-xs bg-white text-orange-700 border-orange-200"
        >
          {t.name} <span className="ml-1 text-orange-400">({t.count})</span>
        </Badge>
      ))}
    </div>
  );
}
