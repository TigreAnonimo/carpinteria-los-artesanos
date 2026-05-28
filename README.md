# Carpintería Los Artesanos

Sitio web corporativo de alto rendimiento para una carpintería artesanal. Proyecto de la **Fase 6** — Next.js 15+, App Router, Server Components, ISR, Server Actions y Shadcn UI.

## Stack

- **Next.js 15+** (App Router)
- **React 19** Server Components
- **Tailwind CSS 4** + **Shadcn UI**
- **TypeScript**
- **Zod** (validación en Server Actions)
- Despliegue recomendado: **Vercel**

## Características implementadas

| Requisito | Implementación |
|-----------|----------------|
| Home con Hero, servicios y proyectos recientes | `src/app/page.tsx` |
| Sobre nosotros (Server Components) | `src/app/sobre-nosotros/page.tsx` |
| Galería con ISR | `src/app/proyectos/page.tsx` — `export const revalidate = 60` |
| Detalle dinámico `/proyectos/[slug]` | `generateStaticParams` + `generateMetadata` |
| Contacto con Server Action | `src/app/contacto/actions.ts` |
| `next/image` + `placeholder="blur"` | Todas las imágenes del sitio |
| Suspense + skeletons | Galería y proyectos recientes |
| Middleware (cabeceras + `/admin` bloqueado) | `src/middleware.ts` |
| Página de error | `src/app/error.tsx` |
| SEO Metadata API | Layout + páginas + metadatos dinámicos |
| `next/font` | Playfair Display + Source Sans 3 |

## Desarrollo

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Build y despliegue en Vercel

```bash
npm run build
npm start
```

1. Sube el repositorio a GitHub.
2. Importa el proyecto en [vercel.com](https://vercel.com).
3. Vercel detectará Next.js automáticamente.

## Auditoría Lighthouse

1. Ejecuta `npm run build && npm start`.
2. Abre Chrome DevTools → Lighthouse → modo Desktop.
3. Objetivo: **> 90** en Performance, Accessibility, Best Practices y SEO.

## Estructura

```
src/
├── app/              # Rutas App Router
├── components/       # UI Shadcn + componentes de dominio
├── data/projects.ts  # Base de datos local (proyectos)
├── lib/utils.ts
└── middleware.ts
```

## Licencia

Proyecto educativo — uso libre.
