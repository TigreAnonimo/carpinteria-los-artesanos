import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { ArrowRight, Hammer, Shield, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RecentProjects } from "@/components/home/recent-projects";
import { Skeleton } from "@/components/ui/skeleton";
import { siteImages } from "@/lib/images";

const services = [
  {
    icon: Hammer,
    num: "01",
    title: "Muebles a medida",
    description:
      "Diseño y fabricación de piezas únicas adaptadas a tu espacio, con maderas seleccionadas y acabados duraderos.",
  },
  {
    icon: Sparkles,
    num: "02",
    title: "Restauración",
    description:
      "Recuperación conservativa de muebles antiguos respetando materiales originales y técnicas tradicionales.",
  },
  {
    icon: Shield,
    num: "03",
    title: "Carpintería estructural",
    description:
      "Puertas, armarios empotrados, revestimientos y carpintería integral para reformas de alto nivel.",
  },
];

function RecentProjectsSkeleton() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <Skeleton className="h-8 w-64" />
      <div className="mt-10 grid gap-px bg-border md:grid-cols-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <Skeleton key={i} className="aspect-[4/3] w-full rounded-none" />
        ))}
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
          <div className="flex flex-col justify-center px-4 py-20 sm:px-6 lg:py-28">
            <p className="section-label">Carpintería artesanal · Barcelona</p>
            <h1 className="mt-6 max-w-xl font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              Madera con alma, oficio con precisión
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
              Desde 1987 transformamos maderas nobles en piezas que perduran generaciones. Cada proyecto
              nace en nuestro taller y se entrega con garantía de artesanía.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href="/contacto">
                  Solicitar presupuesto
                  <ArrowRight className="ml-1" aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/proyectos">Ver proyectos</Link>
              </Button>
            </div>
          </div>
          <div className="relative min-h-[50vh] border-t border-border lg:min-h-[80vh] lg:border-l lg:border-t-0">
            <Image
              src={siteImages.hero}
              alt="Interior del taller de carpintería Los Artesanos con herramientas y madera"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIhAAAgEDBAMBAAAAAAAAAAAAAQIDAAQRBRIhMQYTQVFh/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAZEQACAwEAAAAAAAAAAAAAAAABAgADESH/2gAMAwEAAhEDEEA/ALu3u7W4tY7i3uI5oJ1EkciqysrDKgg8EEEEEGorR//9k="
            />
            <div className="absolute inset-0 bg-primary/5" />
          </div>
        </div>
      </section>

      <section className="bg-foreground text-background">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <div className="max-w-xl">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-accent">
              — Servicios
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Tres disciplinas, un oficio
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-background/60">
              Diseño a medida, restauración patrimonial y carpintería integral.
            </p>
          </div>
          <ul className="mt-14 divide-y divide-background/10 border-y border-background/10">
            {services.map((service) => (
              <li
                key={service.title}
                className="group grid gap-6 py-10 md:grid-cols-[4rem_1fr_auto] md:items-start md:gap-10"
              >
                <span className="font-display text-3xl font-bold text-accent/50">{service.num}</span>
                <div>
                  <div className="flex items-center gap-3">
                    <service.icon className="h-5 w-5 text-accent" aria-hidden />
                    <h3 className="font-display text-xl font-bold">{service.title}</h3>
                  </div>
                  <p className="mt-3 max-w-lg text-sm leading-relaxed text-background/60">
                    {service.description}
                  </p>
                </div>
                <Link
                  href="/contacto"
                  className="self-start text-xs font-medium uppercase tracking-wider text-accent transition-colors hover:text-background md:mt-1"
                >
                  Consultar →
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Suspense fallback={<RecentProjectsSkeleton />}>
        <RecentProjects />
      </Suspense>
    </>
  );
}
