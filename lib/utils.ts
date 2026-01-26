import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatWhatsAppLink(phone: string) {
  // Remove hyphens and leading 0, prepend 60
  const cleanNumber = phone.replace(/-/g, "").replace(/^0/, "");
  return `https://wa.me/60${cleanNumber}`;
}