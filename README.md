# Carpintería Los Artesanos

Sitio web corporativo de alto rendimiento para una carpintería artesanal ficticia. Desarrollado como entregable de la **Fase 6** del bootcamp de Corner Estudios, demostrando el uso profesional de Next.js 15+ en un contexto comercial real.

**Demo en vivo:** [carpinteria-los-artesanos.vercel.app](https://carpinteria-los-artesanos.vercel.app)  
**Repositorio:** [github.com/TigreAnonimo/carpinteria-los-artesanos](https://github.com/TigreAnonimo/carpinteria-los-artesanos)

---

## Índice

1. [Descripción del proyecto](#descripción-del-proyecto)
2. [Stack tecnológico](#stack-tecnológico)
3. [Páginas y funcionalidades](#páginas-y-funcionalidades)
4. [Arquitectura](#arquitectura)
5. [Estructura del proyecto](#estructura-del-proyecto)
6. [Instalación y desarrollo](#instalación-y-desarrollo)
7. [Despliegue en Vercel](#despliegue-en-vercel)
8. [Auditoría y rendimiento](#auditoría-y-rendimiento)
9. [Diseño y sistema visual](#diseño-y-sistema-visual)
10. [Licencia](#licencia)

---

## Descripción del proyecto

**Carpintería Los Artesanos** es una web corporativa para un taller de carpintería artesanal. El objetivo no es solo mostrar servicios y proyectos, sino aplicar patrones de producción reales con Next.js:

- Renderizado híbrido con **Server Components** para reducir JavaScript en el cliente.
- **ISR** (Incremental Static Regeneration) en la galería de proyectos.
- **Server Actions** para el formulario de contacto.
- **SEO técnico** con metadatos dinámicos por ruta.
- **Optimización de imágenes** con `next/image`, `priority` y `placeholder="blur"`.

El contenido (proyectos, textos, imágenes) es ficticio con fines educativos.

---

## Stack tecnológico

| Tecnología | Uso |
|---|---|
| **Next.js 15+** | App Router, rutas dinámicas, ISR, Metadata API |
| **React 19** | Server Components + componentes cliente mínimos |
| **TypeScript** | Tipado estricto en datos, acciones y componentes |
| **Tailwind CSS 4** | Estilos, paleta de colores y tipografía |
| **Shadcn UI** | Button, Card, Input, Label, Textarea, Skeleton |
| **Zod** | Validación del formulario de contacto en el servidor |
| **Lucide React** | Iconografía |
| **Vercel** | Despliegue y hosting |

---

## Páginas y funcionalidades

### Inicio (`/`)

- **Hero Section** con imagen optimizada del taller (`priority` + `placeholder="blur"`).
- **Servicios destacados:** Muebles a medida, Restauración y Carpintería estructural.
- **Proyectos recientes** cargados de forma asíncrona con `Suspense` y skeleton de carga.

### Sobre nosotros (`/sobre-nosotros`)

- Historia del taller y proceso artesanal en 4 fases.
- Contenido renderizado como **Server Component** (texto denso + imágenes optimizadas).
- Metadatos SEO estáticos.

### Galería de proyectos (`/proyectos`)

- Listado de 6 proyectos con miniaturas y `placeholder="blur"`.
- **ISR** con `revalidate = 60` — la página se regenera cada 60 segundos sin nuevo despliegue.
- `Suspense` + `ProjectGridSkeleton` mientras cargan los datos.
- `loading.tsx` para transiciones entre rutas.

### Detalle de proyecto (`/proyectos/[slug]`)

- Rutas dinámicas con `generateStaticParams` (SSG en build).
- `generateMetadata` para SEO dinámico (título, descripción, Open Graph).
- Galería en alta resolución, descripción extendida y materiales utilizados.
- Página `not-found` personalizada si el slug no existe.

### Contacto (`/contacto`)

- Formulario con campos **Nombre**, **Email** y **Mensaje**.
- **Server Action** (`submitContact`) con validación Zod en el servidor.
- Estados de éxito y error gestionados con `useActionState`.
- Feedback visual por campo y mensaje global.

### Global

- **Layout raíz** con navegación persistente (header + footer).
- **Middleware** con cabeceras de seguridad y bloqueo de `/admin`.
- **Página de error** (`error.tsx`) con opción de reintentar.
- **Página 404** (`not-found.tsx`) personalizada.

---

## Arquitectura

### Estrategias de renderizado

| Ruta | Estrategia | Motivo |
|---|---|---|
| `/`, `/sobre-nosotros`, `/contacto` | SSG (estático) | Contenido que no cambia con frecuencia |
| `/proyectos` | **ISR** (`revalidate: 60`) | Galería que se actualiza periódicamente |
| `/proyectos/[slug]` | SSG + `generateStaticParams` | Detalle pregenerado en build |
| Formulario de contacto | **Server Action** | Validación y lógica en el servidor |
| Header nav, formulario, error | Client Components | Interactividad necesaria (`usePathname`, `useActionState`) |

### Flujo de datos

```
src/data/projects.ts          →  Fuente de datos local (simula una BD)
       ↓
getProjects() / getProjectBySlug()  →  Funciones async en Server Components
       ↓
ProjectGrid / RecentProjects / [slug]/page  →  Renderizado en servidor
```

### Server Components vs Client Components

El proyecto minimiza el uso de `'use client'`. Solo los componentes que requieren interactividad del navegador son cliente:

| Componente | Motivo |
|---|---|
| `contact-form.tsx` | `useActionState` para el formulario |
| `header-nav.tsx` | `usePathname` e indicador de navegación activa |
| `error.tsx` | `useEffect` + botón de reintentar |
| Componentes Shadcn (`label.tsx`) | Dependencia de Radix UI |

Todo lo demás (páginas, grids, cards, layout) es Server Component.

### Middleware (`src/middleware.ts`)

Aplica en cada petición:

- `X-Frame-Options: DENY`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy` (cámara, micrófono, geolocalización desactivados)
- Redirección de `/admin` → `/`

### Imágenes

Todas las fotos usan `next/image`. Las imágenes están en `public/images/` y se referencian desde `src/lib/images.ts`:

```ts
export function projectImage(name: string) {
  return `/images/${name}.jpg`;
}
```

Cada imagen de proyecto incluye un `blurDataURL` para el efecto de carga progresiva.

---

## Estructura del proyecto

```
carpinteria-los-artesanos/
├── public/
│   └── images/                  # Fotos del taller y proyectos (.jpg)
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Layout raíz, fuentes, metadata global
│   │   ├── page.tsx             # Home
│   │   ├── globals.css          # Variables CSS, paleta, tipografía
│   │   ├── error.tsx            # Página de error global
│   │   ├── not-found.tsx        # Página 404
│   │   ├── sobre-nosotros/
│   │   │   └── page.tsx
│   │   ├── proyectos/
│   │   │   ├── page.tsx         # Galería (ISR)
│   │   │   ├── loading.tsx      # Skeleton de ruta
│   │   │   └── [slug]/
│   │   │       ├── page.tsx     # Detalle + generateMetadata
│   │   │       └── not-found.tsx
│   │   └── contacto/
│   │       ├── page.tsx
│   │       └── actions.ts       # Server Action + validación Zod
│   ├── components/
│   │   ├── contact/
│   │   │   └── contact-form.tsx
│   │   ├── home/
│   │   │   └── recent-projects.tsx
│   │   ├── layout/
│   │   │   ├── header.tsx
│   │   │   ├── header-nav.tsx
│   │   │   └── footer.tsx
│   │   ├── projects/
│   │   │   ├── project-card.tsx
│   │   │   ├── project-grid.tsx
│   │   │   └── project-grid-skeleton.tsx
│   │   └── ui/                  # Componentes Shadcn UI
│   ├── data/
│   │   └── projects.ts          # Datos de proyectos (slug, título, materiales…)
│   ├── lib/
│   │   ├── images.ts            # Rutas centralizadas de imágenes
│   │   └── utils.ts             # Utilidad cn() para clases Tailwind
│   └── middleware.ts            # Cabeceras de seguridad + control de acceso
├── components.json              # Configuración Shadcn UI
├── next.config.ts
├── package.json
└── tsconfig.json
```

---

## Instalación y desarrollo

### Requisitos previos

- Node.js 20+
- npm

### Pasos

```bash
# Clonar el repositorio
git clone https://github.com/TigreAnonimo/carpinteria-los-artesanos.git
cd carpinteria-los-artesanos

# Instalar dependencias
npm install

# Servidor de desarrollo (con Turbopack)
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

### Scripts disponibles

| Comando | Descripción |
|---|---|
| `npm run dev` | Servidor de desarrollo con Turbopack |
| `npm run build` | Build de producción |
| `npm start` | Servidor de producción (tras `build`) |
| `npm run lint` | Linter con ESLint + config Next.js |

---

## Despliegue en Vercel

El proyecto está desplegado en Vercel y conectado al repositorio de GitHub. Cada push a `main` despliega automáticamente.

### Despliegue manual

1. Sube el repositorio a GitHub.
2. Importa el proyecto en [vercel.com/new](https://vercel.com/new).
3. Vercel detecta Next.js automáticamente — no requiere configuración adicional.
4. El dominio de producción queda en `carpinteria-los-artesanos.vercel.app`.

No se necesitan variables de entorno para el funcionamiento actual.

---

## Auditoría y rendimiento

### Lighthouse

Objetivo: **> 90** en las cuatro categorías (Performance, Accessibility, Best Practices, SEO).

```bash
npm run build && npm start
```

1. Abre [http://localhost:3000](http://localhost:3000) en Chrome.
2. DevTools → pestaña **Lighthouse** → modo Desktop o Mobile.
3. Ejecuta la auditoría y revisa las áreas por debajo de 90.

También puedes auditar directamente la URL de producción en [PageSpeed Insights](https://pagespeed.web.dev/).

### Verificación de Server Components

En Chrome DevTools → pestaña **Network** → filtra por **Fetch/XHR**:

- Las peticiones de navegación entre páginas devuelven el payload RSC (formato de texto de React Server Components).
- Los componentes de servidor no generan bundles `.js` adicionales en el cliente.
- Si un componente estático aparece como `.js` pesado, probablemente tiene `'use client'` innecesario.

### Errores de hidratación

Revisa la consola del navegador en cada página. No deben aparecer warnings de hydration mismatch. El proyecto evita `new Date()`, `window` o `Math.random()` en componentes de servidor.

---

## Diseño y sistema visual

### Tipografía (`next/font`)

| Fuente | Variable CSS | Uso |
|---|---|---|
| **Syne** | `--font-syne` | Títulos y display (`font-display`) |
| **IBM Plex Sans** | `--font-ibm` | Texto de cuerpo (`font-sans`) |

Ambas se cargan con `display: "swap"` para evitar FOIT (flash de texto invisible).

### Paleta de colores

Definida en `src/app/globals.css` con variables CSS en formato OKLCH:

- **Primary** — verde bosque (`oklch(0.38 0.1 155)`) — tono madera/naturaleza.
- **Accent** — ámbar cálido (`oklch(0.58 0.14 40)`) — detalles y enlaces activos.
- **Foreground / Background** — grises industriales con ligero tinte frío.
- Soporte de **modo oscuro** (clase `.dark`).

### Componentes UI

Shadcn UI con estilo **New York** y color base **Stone**. Componentes instalados:

`Button` · `Card` · `Input` · `Label` · `Textarea` · `Skeleton`

---

## Licencia

Proyecto educativo — uso libre.
