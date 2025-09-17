import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const date = new Date().toLocaleDateString("en-CA", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
});
