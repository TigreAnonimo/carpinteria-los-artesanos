import Link from "next/link";
import Image from "next/image";
import { getRecentProjects } from "@/data/projects";
import { Button } from "@/components/ui/button";

export async function RecentProjects() {
  const projects = await getRecentProjects(3);

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
      <div className="flex flex-col items-start justify-between gap-6 border-b border-border pb-8 sm:flex-row sm:items-end">
        <div>
          <p className="section-label">Portfolio</p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight">Proyectos recientes</h2>
          <p className="mt-2 max-w-xl text-sm text-muted-foreground">
            Una selección de trabajos recientes realizados en nuestro taller.
          </p>
        </div>
        <Button asChild variant="outline">
          <Link href="/proyectos">Ver galería completa</Link>
        </Button>
      </div>
      <div className="mt-0 grid gap-px bg-border md:grid-cols-3">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/proyectos/${project.slug}`}
            className="group bg-background transition-colors hover:bg-muted/50"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                placeholder="blur"
                blurDataURL={project.blurDataURL}
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
            <div className="p-6">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-accent">
                {project.category}
              </p>
              <h3 className="mt-2 font-display text-lg font-bold">{project.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                {project.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
