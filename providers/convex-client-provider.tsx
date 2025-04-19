"use client";

import { ClerkProvider, useAuth } from "@clerk/nextjs";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { AuthLoading, Authenticated, ConvexReactClient } from "convex/react";
import Loading from "components/auth/loading";

// Wrapper - provider which protects all children
interface ConvexClientProviderProps {
  children: React.ReactNode;
}

const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL!;

// Create convex client
const convex = new ConvexReactClient(convexUrl);

export const ConvexClientProvider = ({
  children,
}: ConvexClientProviderProps) => {
  return (
    <ClerkProvider>
      <ConvexProviderWithClerk useAuth={useAuth} client={convex}>
        <AuthLoading>
          <Loading />
        </AuthLoading>
        <Authenticated>
          {children}
        </Authenticated>
      </ConvexProviderWithClerk>
    </ClerkProvider>
  );
};
