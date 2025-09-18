"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { CircleArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

const GoBackButton = ({ className }: { className?: string }) => {
  const router = useRouter();

  return (
    <Button
      size="icon"
      className={cn(
        "bg-card text-foreground border-border hover:text-card size-7 rounded-full border transition-colors",
        className,
      )}
      onClick={() => router.back()}
    >
      <CircleArrowLeft />
    </Button>
  );
};
export default GoBackButton;
