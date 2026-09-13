import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function fetcher(url: string, options?: RequestInit) {
  const res = await fetch(url, options);
  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.error || 'An error occurred');
  }
  return res.json();
}

export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';
