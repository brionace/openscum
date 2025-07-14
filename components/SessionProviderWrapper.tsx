"use client";

import React from "react";
import { SupabaseUserProvider } from "./SupabaseUserContext";

interface SessionProviderWrapperProps {
  children: React.ReactNode;
}

export function SessionProviderWrapper({
  children,
}: SessionProviderWrapperProps) {
  return <SupabaseUserProvider>{children}</SupabaseUserProvider>;
}
