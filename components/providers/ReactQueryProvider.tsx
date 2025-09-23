"use client";

import { getAccessToken } from "@/lib/users";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ReactQueryProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: true,
            retry: false,
          },
        },
      }),
  );

  useEffect(() => {
    const interval = setInterval(
      async () => {
        try {
          await getAccessToken();
          console.log("Access token refreshed");
        } catch (error) {
          const e = error as Error;
          console.error("Failed to refresh token", e.message);
        } finally {
          router.refresh();
        }
      },
      1000 * 60 * 0.5,
    );

    return () => clearInterval(interval);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
