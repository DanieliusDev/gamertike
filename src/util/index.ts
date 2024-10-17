import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export * from "./spotify";

export function cn(...input: ClassValue[]) {
  return twMerge(clsx(input));
}
