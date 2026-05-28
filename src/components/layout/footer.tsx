import Link from "next/link";
import { MapPin, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/40">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-serif text-lg font-semibold">Carpintería Los Artesanos</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Taller familiar desde 1987. Muebles a medida, restauración y carpintería estructural con
            materiales nobles.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold">Enlaces</p>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>
              <Link href="/sobre-nosotros" className="hover:text-primary">
                Historia del taller
              </Link>
            </li>
            <li>
              <Link href="/proyectos" className="hover:text-primary">
                Galería de proyectos
              </Link>
            </li>
            <li>
              <Link href="/contacto" className="hover:text-primary">
                Solicitar presupuesto
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-2 text-sm text-muted-foreground">
          <p className="flex items-center gap-2">
            <MapPin className="h-4 w-4 shrink-0 text-primary" aria-hidden />
            Calle del Torno 12, Madrid
          </p>
          <p className="flex items-center gap-2">
            <Phone className="h-4 w-4 shrink-0 text-primary" aria-hidden />
            +34 912 345 678
          </p>
          <p className="flex items-center gap-2">
            <Mail className="h-4 w-4 shrink-0 text-primary" aria-hidden />
            hola@losartesanos.es
          </p>
        </div>
      </div>
      <div className="border-t border-border py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Carpintería Los Artesanos. Todos los derechos reservados.
      </div>
    </footer>
  );
}
