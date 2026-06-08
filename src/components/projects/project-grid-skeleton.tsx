import { Skeleton } from "@/components/ui/skeleton";

export function ProjectGridSkeleton() {
  return (
    <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="space-y-4 bg-background p-6">
          <Skeleton className="aspect-[4/3] w-full rounded-none" />
          <Skeleton className="h-4 w-1/3" />
          <Skeleton className="h-6 w-2/3" />
          <Skeleton className="h-4 w-full" />
        </div>
      ))}
    </div>
  );
}
