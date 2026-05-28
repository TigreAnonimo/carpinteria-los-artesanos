import type { Metadata } from "next";
import { Suspense } from "react";
import { ProjectGrid } from "@/components/projects/project-grid";
import { ProjectGridSkeleton } from "@/components/projects/project-grid-skeleton";

export const metadata: Metadata = {
  title: "Galería de proyectos",
  description:
    "Explora nuestra galería de muebles a medida, restauraciones y carpintería estructural realizados en el taller Los Artesanos.",
};

export const revalidate = 60;

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <header className="max-w-2xl">
        <p className="text-sm font-medium uppercase tracking-widest text-primary">Portfolio</p>
        <h1 className="mt-3 font-serif text-4xl font-semibold tracking-tight">Galería de proyectos</h1>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Trabajos seleccionados de los últimos años. Esta galería se actualiza periódicamente con
          ISR (regeneración estática incremental cada 60 segundos).
        </p>
      </header>

      <div className="mt-12">
        <Suspense fallback={<ProjectGridSkeleton />}>
          <ProjectGrid />
        </Suspense>
      </div>
    </div>
  );
}
