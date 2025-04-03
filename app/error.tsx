"use client";
import ErrorScreen from "@/components/pages/error";

// Error boundaries must be Client Components

export default function Error({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  error,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return <ErrorScreen />;
}
