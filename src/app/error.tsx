"use client";

import Link from "next/link";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="mx-auto flex min-h-[60vh] max-w-lg flex-col items-center justify-center px-4 py-16 text-center">
      <h1 className="font-display text-3xl font-bold">Algo ha salido mal</h1>
      <p className="mt-4 text-muted-foreground">
        Ha ocurrido un error inesperado. Puedes reintentar o volver al inicio.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Button onClick={() => reset()}>Reintentar</Button>
        <Button variant="outline" asChild>
          <Link href="/">Ir al inicio</Link>
        </Button>
      </div>
    </div>
  );
}
