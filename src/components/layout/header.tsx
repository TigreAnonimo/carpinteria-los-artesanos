import Link from "next/link";
import { Hammer } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/sobre-nosotros", label: "Sobre nosotros" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/contacto", label: "Contacto" },
];

export function Header({ pathname }: { pathname: string }) {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 font-serif text-lg font-semibold tracking-tight">
          <Hammer className="h-5 w-5 text-primary" aria-hidden />
          Los Artesanos
        </Link>
        <nav className="hidden items-center gap-6 md:flex" aria-label="Principal">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === link.href ? "text-primary" : "text-muted-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <nav className="flex gap-3 md:hidden" aria-label="Principal móvil">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-xs font-medium",
                pathname === link.href ? "text-primary" : "text-muted-foreground"
              )}
            >
              {link.label.split(" ")[0]}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
