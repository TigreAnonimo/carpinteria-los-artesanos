import { getProjects } from "@/data/projects";
import { ProjectCard } from "./project-card";

export async function ProjectGrid() {
  const projects = await getProjects();

  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  );
}
