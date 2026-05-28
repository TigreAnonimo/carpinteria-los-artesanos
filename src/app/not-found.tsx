import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-lg flex-col items-center justify-center px-4 py-16 text-center">
      <h1 className="font-serif text-4xl font-semibold">404</h1>
      <p className="mt-4 text-muted-foreground">La página que buscas no existe.</p>
      <Button asChild className="mt-8">
        <Link href="/">Volver al inicio</Link>
      </Button>
    </div>
  );
}
