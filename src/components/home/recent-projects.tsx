import Link from "next/link";
import Image from "next/image";
import { getRecentProjects } from "@/data/projects";
import { Button } from "@/components/ui/button";

export async function RecentProjects() {
  const projects = await getRecentProjects(3);

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <h2 className="font-serif text-3xl font-semibold tracking-tight">Proyectos recientes</h2>
          <p className="mt-2 max-w-xl text-muted-foreground">
            Una selección de trabajos recientes realizados en nuestro taller.
          </p>
        </div>
        <Button asChild variant="outline">
          <Link href="/proyectos">Ver galería completa</Link>
        </Button>
      </div>
      <div className="mt-10 grid gap-8 md:grid-cols-3">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/proyectos/${project.slug}`}
            className="group overflow-hidden rounded-xl border bg-card shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="relative aspect-[4/3]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                placeholder="blur"
                blurDataURL={project.blurDataURL}
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <div className="p-5">
              <p className="text-xs font-medium uppercase text-primary">{project.category}</p>
              <h3 className="mt-1 font-serif text-lg font-semibold">{project.title}</h3>
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
