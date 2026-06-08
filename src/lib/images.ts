/**
 * Imágenes locales en /public/images/{nombre}.jpg.
 * Cada nombre describe el contenido de la foto (proyecto, taller, material…).
 */
export function projectImage(name: string) {
  return `/images/${name}.jpg`;
}

export const siteImages = {
  hero: projectImage("carpinteria-hero"),
  workshop: projectImage("carpinteria-taller"),
  woodDetail: projectImage("carpinteria-madera"),
} as const;
