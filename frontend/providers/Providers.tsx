"use client";

import { AuthProvider } from "@/context/authContext";
import { UserProvider } from "@/context/userContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <UserProvider>{children}</UserProvider>
    </AuthProvider>
  );
}
