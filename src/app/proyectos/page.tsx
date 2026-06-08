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
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <header className="max-w-2xl border-b border-border pb-10">
        <p className="section-label">Portfolio</p>
        <h1 className="mt-6 font-display text-4xl font-bold tracking-tight">Galería de proyectos</h1>
        <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
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
