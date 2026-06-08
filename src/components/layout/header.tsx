import Link from "next/link";
import { HeaderNav } from "@/components/layout/header-nav";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="font-display text-sm font-bold uppercase tracking-[0.15em] text-foreground"
        >
          Los Artesanos
        </Link>
        <HeaderNav />
      </div>
    </header>
  );
}
