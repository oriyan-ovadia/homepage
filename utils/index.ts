const BASE_FONT_SIZE = 16; // Default base font size in pixels

export const isBrowser = typeof window !== 'undefined';

export function toRem(px: number): string {
  const rem = px / BASE_FONT_SIZE;
  return `${rem}rem`;
}
