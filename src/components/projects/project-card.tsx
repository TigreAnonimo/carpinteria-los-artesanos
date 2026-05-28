import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/proyectos/${project.slug}`} className="group block h-full">
      <Card className="h-full overflow-hidden transition-shadow hover:shadow-lg">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            placeholder="blur"
            blurDataURL={project.blurDataURL}
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <CardHeader>
          <p className="text-xs font-medium uppercase tracking-wider text-primary">
            {project.category}
          </p>
          <CardTitle className="font-serif text-xl">{project.title}</CardTitle>
          <CardDescription>{project.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">{project.year}</p>
        </CardContent>
      </Card>
    </Link>
  );
}
