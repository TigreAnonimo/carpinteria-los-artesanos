import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/proyectos/${project.slug}`} className="group block h-full">
      <Card className="h-full overflow-hidden rounded-none border-0 border-b bg-transparent transition-colors hover:bg-muted/30">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            placeholder="blur"
            blurDataURL={project.blurDataURL}
            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
        </div>
        <CardHeader className="px-0">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-accent">
            {project.category}
          </p>
          <CardTitle className="font-display text-xl font-bold">{project.title}</CardTitle>
          <CardDescription className="text-sm">{project.description}</CardDescription>
        </CardHeader>
        <CardContent className="px-0 pb-6">
          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            {project.year}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}
