import { clsx, type ClassValue } from 'clsx'

/** Merges conditional class names. A thin wrapper so call sites never import `clsx` directly. */
export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs)
}
