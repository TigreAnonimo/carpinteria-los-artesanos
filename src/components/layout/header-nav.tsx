"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Inicio", shortLabel: "Inicio" },
  { href: "/sobre-nosotros", label: "Sobre nosotros", shortLabel: "Sobre" },
  { href: "/proyectos", label: "Proyectos", shortLabel: "Proyectos" },
  { href: "/contacto", label: "Contacto", shortLabel: "Contacto" },
] as const;

function isNavActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function useSlidingIndicator(activeHref: string) {
  const navRef = useRef<HTMLElement>(null);
  const linkRefs = useRef<Map<string, HTMLAnchorElement>>(new Map());
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });
  const [ready, setReady] = useState(false);

  const updateIndicator = useCallback((href: string) => {
    const el = linkRefs.current.get(href);
    const nav = navRef.current;
    if (!el || !nav) return;

    const navRect = nav.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();

    setIndicator({
      left: elRect.left - navRect.left,
      width: elRect.width,
    });
    setReady(true);
  }, []);

  useLayoutEffect(() => {
    updateIndicator(activeHref);
  }, [activeHref, updateIndicator]);

  useEffect(() => {
    const handleResize = () => updateIndicator(activeHref);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [activeHref, updateIndicator]);

  return { navRef, linkRefs, indicator, ready, updateIndicator };
}

export function HeaderNav() {
  const pathname = usePathname();
  const activeHref = links.find((l) => isNavActive(pathname, l.href))?.href ?? "/";

  const desktop = useSlidingIndicator(activeHref);
  const mobile = useSlidingIndicator(activeHref);

  return (
    <>
      <nav
        ref={desktop.navRef}
        className="relative hidden items-center gap-8 md:flex"
        aria-label="Principal"
      >
        {links.map((link) => {
          const active = isNavActive(pathname, link.href);
          return (
            <Link
              key={link.href}
              ref={(el) => {
                if (el) desktop.linkRefs.current.set(link.href, el);
                else desktop.linkRefs.current.delete(link.href);
              }}
              href={link.href}
              onClick={() => desktop.updateIndicator(link.href)}
              className={cn(
                "relative py-5 text-xs font-medium uppercase tracking-wider transition-colors hover:text-primary",
                active ? "text-primary" : "text-muted-foreground"
              )}
            >
              {link.label}
            </Link>
          );
        })}
        <span
          aria-hidden
          className={cn(
            "pointer-events-none absolute bottom-0 h-0.5 bg-accent transition-[left,width] duration-300 ease-out",
            !desktop.ready && "opacity-0"
          )}
          style={{ left: desktop.indicator.left, width: desktop.indicator.width }}
        />
      </nav>

      <nav
        ref={mobile.navRef}
        className="relative flex gap-4 md:hidden"
        aria-label="Principal móvil"
      >
        {links.map((link) => {
          const active = isNavActive(pathname, link.href);
          return (
            <Link
              key={link.href}
              ref={(el) => {
                if (el) mobile.linkRefs.current.set(link.href, el);
                else mobile.linkRefs.current.delete(link.href);
              }}
              href={link.href}
              onClick={() => mobile.updateIndicator(link.href)}
              className={cn(
                "relative py-4 text-[0.65rem] font-medium uppercase tracking-wider transition-colors",
                active ? "text-primary" : "text-muted-foreground"
              )}
            >
              {link.shortLabel}
            </Link>
          );
        })}
        <span
          aria-hidden
          className={cn(
            "pointer-events-none absolute bottom-0 h-0.5 bg-accent transition-[left,width] duration-300 ease-out",
            !mobile.ready && "opacity-0"
          )}
          style={{ left: mobile.indicator.left, width: mobile.indicator.width }}
        />
      </nav>
    </>
  );
}
