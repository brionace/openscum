import { supabaseAdmin } from "@/lib/supabaseAdmin";
import prisma from "@/lib/prisma";

export type UserRole = "user" | "moderator" | "admin";

export const ROLE_PERMISSIONS = {
  user: ["read"],
  moderator: ["read", "moderate"],
  admin: ["read", "moderate", "admin"],
} as const;

/**
 * Check if a user has the required role for accessing admin features
 */
export async function checkUserRole(authToken: string): Promise<{
  isAuthorized: boolean;
  user: any;
  role: UserRole;
  error?: string;
}> {
  try {
    // Verify the auth token with Supabase
    const { data: authData, error: authError } =
      await supabaseAdmin.auth.getUser(authToken);

    if (authError || !authData.user) {
      return {
        isAuthorized: false,
        user: null,
        role: "user",
        error: "Invalid authentication token",
      };
    }

    // Get user role from database
    const dbUser = await prisma.user.findUnique({
      where: { email: authData.user.email! },
      select: { id: true, email: true, role: true, name: true },
    });

    if (!dbUser) {
      return {
        isAuthorized: false,
        user: authData.user,
        role: "user",
        error: "User not found in database",
      };
    }

    const userRole = dbUser.role as UserRole;
    const isAuthorized = userRole === "admin" || userRole === "moderator";

    return {
      isAuthorized,
      user: { ...authData.user, dbRole: userRole, dbId: dbUser.id },
      role: userRole,
      error: isAuthorized ? undefined : "Insufficient permissions",
    };
  } catch (error) {
    console.error("Error checking user role:", error);
    return {
      isAuthorized: false,
      user: null,
      role: "user",
      error: "Failed to verify permissions",
    };
  }
}

/**
 * Check if a user has specific permission
 */
export function hasPermission(
  userRole: UserRole,
  requiredPermission: string
): boolean {
  const permissions = ROLE_PERMISSIONS[userRole];
  return permissions.includes(requiredPermission as any);
}

/**
 * Admin-only permission check
 */
export function isAdmin(userRole: UserRole): boolean {
  return userRole === "admin";
}

/**
 * Moderator or Admin permission check
 */
export function canModerate(userRole: UserRole): boolean {
  return userRole === "admin" || userRole === "moderator";
}
