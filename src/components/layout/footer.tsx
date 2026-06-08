import Link from "next/link";
import { MapPin, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-display text-sm font-bold uppercase tracking-[0.15em]">
            Carpintería Los Artesanos
          </p>
          <p className="mt-4 text-sm leading-relaxed text-background/60">
            Taller familiar desde 1999. Muebles a medida, restauración y carpintería estructural con
            materiales nobles.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Enlaces</p>
          <ul className="mt-4 space-y-2.5 text-sm text-background/60">
            <li>
              <Link href="/sobre-nosotros" className="transition-colors hover:text-background">
                Historia del taller
              </Link>
            </li>
            <li>
              <Link href="/proyectos" className="transition-colors hover:text-background">
                Galería de proyectos
              </Link>
            </li>
            <li>
              <Link href="/contacto" className="transition-colors hover:text-background">
                Solicitar presupuesto
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-3 text-sm text-background/60">
          <p className="flex items-center gap-2.5">
            <MapPin className="h-4 w-4 shrink-0 text-accent" aria-hidden />
            Carretera del Mig 47 
            Barcelona
          </p>
          <p className="flex items-center gap-2.5">
            <Phone className="h-4 w-4 shrink-0 text-accent" aria-hidden />
            +34 623 383 019
          </p>
          <p className="flex items-center gap-2.5">
            <Mail className="h-4 w-4 shrink-0 text-accent" aria-hidden />
            jesusdiaz200414@gmail.com
          </p>
        </div>
      </div>
      <div className="border-t border-background/10 py-4 text-center text-xs text-background/40">
        © {new Date().getFullYear()} Carpintería Los Artesanos. Todos los derechos reservados.
      </div>
    </footer>
  );
}
