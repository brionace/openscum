"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

interface SupabaseUserContextValue {
  user: any;
  session: any;
  loading: boolean;
  signIn: (opts: { email: string; password: string }) => Promise<any>;
  signOut: () => Promise<void>;
}

const SupabaseUserContext = createContext<SupabaseUserContextValue | undefined>(
  undefined
);

export function SupabaseUserProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<any>(null);
  const [session, setSession] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        setLoading(false);
      }
    );
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setUser(data.session?.user ?? null);
      setLoading(false);
    });
    return () => {
      listener?.subscription.unsubscribe();
    };
  }, []);

  const signIn = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw error;
    return data;
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
    setSession(null);
  };

  return (
    <SupabaseUserContext.Provider
      value={{ user, session, loading, signIn, signOut }}
    >
      {children}
    </SupabaseUserContext.Provider>
  );
}

export function useSupabaseUser() {
  const ctx = useContext(SupabaseUserContext);
  if (!ctx)
    throw new Error("useSupabaseUser must be used within SupabaseUserProvider");
  return ctx;
}
