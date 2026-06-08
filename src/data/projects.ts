import { projectImage } from "@/lib/images";

export type Project = {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  gallery: string[];
  materials: string[];
  category: string;
  year: number;
  blurDataURL: string;
};

const blur =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIhAAAgEDBAMBAAAAAAAAAAAAAQIDAAQRBRIhMQYTQVFh/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAZEQACAwEAAAAAAAAAAAAAAAABAgADESH/2gAMAwEAAhEDEEA/ALu3u7W4tY7i3uI5oJ1EkciqysrDKgg8EEEEEGorR//9k=";

export const projects: Project[] = [
  {
    slug: "mesa-roble-macizo",
    title: "Mesa de Roble Macizo",
    description: "Mesa comedor de 2.4 m con patas torneadas y acabado aceite-cera natural.",
    longDescription:
      "Diseñada para un comedor familiar en Madrid, esta mesa combina tablones de roble europeo seleccionado a mano con uniones tradicionales. El acabado en aceite-cera realza la veta sin ocultar el carácter del material.",
    image: projectImage("mesa-roble-macizo"),
    gallery: [projectImage("mesa-roble-macizo"), projectImage("mesa-roble-macizo-2")],
    materials: ["Roble europeo macizo", "Aceite-cera natural", "Uniones espiga y cola"],
    category: "Muebles a medida",
    year: 2025,
    blurDataURL: blur,
  },
  {
    slug: "reforma-loft",
    title: "Reforma Loft Industrial",
    description: "Biblioteca empotrada y revestimiento en nogal para loft de 120 m².",
    longDescription:
      "Proyecto integral de carpintería para un loft en Barcelona: biblioteca a medida de suelo a techo, panelados en nogal americano y puertas correderas ocultas que maximizan la luz natural.",
    image: projectImage("reforma-loft"),
    gallery: [projectImage("reforma-loft"), projectImage("reforma-loft-2")],
    materials: ["Nogal americano", "Herrajes ocultos Blum", "Laca mate al agua"],
    category: "Carpintería estructural",
    year: 2024,
    blurDataURL: blur,
  },
  {
    slug: "restauracion-sillon-noveno",
    title: "Restauración Sillón del S. XIX",
    description: "Recuperación de estructura de haya y tapizado en lino orgánico.",
    longDescription:
      "Intervención conservativa sobre un sillón isabelino: consolidación de la estructura de haya, sustitución selectiva de piezas dañadas y tapizado artesanal en lino teñido con pigmentos naturales.",
    image: projectImage("restauracion-sillon"),
    gallery: [projectImage("restauracion-sillon"), projectImage("restauracion-sillon-2")],
    materials: ["Haya europea", "Cola animal", "Lino orgánico teñido"],
    category: "Restauración",
    year: 2024,
    blurDataURL: blur,
  },
  {
    slug: "cocina-integral-cerezo",
    title: "Cocina Integral en Cerezo",
    description: "Mobiliario bajo y alto con encimera de roble ahumado y tiradores de latón.",
    longDescription:
      "Cocina a medida para vivienda unifamiliar: frentes en cerezo claro, encimera maciza de roble ahumado y cajones con sistema soft-close. Diseño pensado para envejecer con dignidad.",
    image: projectImage("cocina-cerezo"),
    gallery: [projectImage("cocina-cerezo"), projectImage("cocina-cerezo-2")],
    materials: ["Cerezo americano", "Roble ahumado", "Latón cepillado"],
    category: "Muebles a medida",
    year: 2025,
    blurDataURL: blur,
  },
  {
    slug: "puerta-entrada-roble",
    title: "Puerta de Entrada en Roble",
    description: "Puerta maciza de doble hoja con herrajes de forja artesanal.",
    longDescription:
      "Puerta de acceso principal fabricada en roble macizo de 60 mm de espesor, con refuerzos interiores ocultos y herrajes de forja diseñados a medida. Aislamiento térmico integrado sin comprometer la estética.",
    image: projectImage("puerta-roble"),
    gallery: [projectImage("puerta-roble"), projectImage("puerta-roble-2")],
    materials: ["Roble macizo 60 mm", "Forja artesanal", "Junta perimetral"],
    category: "Carpintería estructural",
    year: 2023,
    blurDataURL: blur,
  },
  {
    slug: "escritorio-nogal",
    title: "Escritorio de Nogal",
    description: "Escritorio minimalista con cajón oculto y patas de acero negro.",
    longDescription:
      "Pieza de autor para estudio creativo: tablero de nogal con canto vivo, cajón push-to-open y estructura en acero negro mate. Acabado satinado resistente al uso diario.",
    image: projectImage("escritorio-nogal"),
    gallery: [projectImage("escritorio-nogal"), projectImage("escritorio-nogal-2")],
    materials: ["Nogal americano", "Acero negro mate", "Barniz poliuretano satinado"],
    category: "Muebles a medida",
    year: 2025,
    blurDataURL: blur,
  },
];

export async function getProjects(): Promise<Project[]> {
  await new Promise((resolve) => setTimeout(resolve, 100));
  return projects;
}

export async function getProjectBySlug(slug: string): Promise<Project | undefined> {
  await new Promise((resolve) => setTimeout(resolve, 50));
  return projects.find((p) => p.slug === slug);
}

export async function getRecentProjects(limit = 3): Promise<Project[]> {
  const all = await getProjects();
  return all.slice(0, limit);
}
