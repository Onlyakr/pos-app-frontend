"use client";

import { Button } from "@/components/ui/button";

import Link from "next/link";

const ErrorPage = ({ error }: { error: Error }) => {
  return (
    <div className="flex h-svh w-full flex-col items-center justify-center gap-3">
      <h1>Error</h1>
      <p>{error.message}</p>
      <Link href="/products">
        <Button variant="destructive">Go back</Button>
      </Link>
    </div>
  );
};
export default ErrorPage;
