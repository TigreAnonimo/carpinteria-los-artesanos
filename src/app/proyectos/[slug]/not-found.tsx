import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ProjectNotFound() {
  return (
    <div className="mx-auto flex min-h-[50vh] max-w-lg flex-col items-center justify-center px-4 py-16 text-center">
      <h1 className="font-serif text-3xl font-semibold">Proyecto no encontrado</h1>
      <p className="mt-4 text-muted-foreground">
        El proyecto que buscas no existe o ha sido retirado de la galería.
      </p>
      <Button asChild className="mt-8">
        <Link href="/proyectos">Ver todos los proyectos</Link>
      </Button>
    </div>
  );
}
