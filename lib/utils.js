import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function isProductionMode() {
  return process.env.NODE_ENV === "production";
}

export function isDevelopmentMode() {
  return process.env.NODE_ENV === "development";
}

export function isSafariBrowser() {
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}
