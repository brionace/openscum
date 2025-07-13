import React from "react";
import { Outcome } from "@/lib/types";

export default function SocialMediaAccountFields({
  value,
  onChange,
}: {
  value: Partial<Outcome>;
  onChange: (data: Partial<Outcome>) => void;
}) {
  return (
    <div className="space-y-2">
      <label>Platform</label>
      <input
        type="text"
        value={value.socialMediaPlatform || ""}
        onChange={(e) => onChange({ socialMediaPlatform: e.target.value })}
        className="border rounded px-2 py-1 w-full"
        placeholder="e.g. Instagram"
      />
      <label>Account Username</label>
      <input
        type="text"
        value={value.accountUsername || ""}
        onChange={(e) => onChange({ accountUsername: e.target.value })}
        className="border rounded px-2 py-1 w-full"
        placeholder="@username"
      />
      <label>Account Email</label>
      <input
        type="email"
        value={value.accountEmail || ""}
        onChange={(e) => onChange({ accountEmail: e.target.value })}
        className="border rounded px-2 py-1 w-full"
        placeholder="user@email.com"
      />
      <label>Account Recovered</label>
      <input
        type="checkbox"
        checked={!!value.accountRecovered}
        onChange={(e) => onChange({ accountRecovered: e.target.checked })}
      />
    </div>
  );
}
