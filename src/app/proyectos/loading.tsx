import { ProjectGridSkeleton } from "@/components/projects/project-grid-skeleton";

export default function ProjectsLoading() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="h-10 w-64 animate-pulse rounded-md bg-muted" />
      <div className="mt-12">
        <ProjectGridSkeleton />
      </div>
    </div>
  );
}
