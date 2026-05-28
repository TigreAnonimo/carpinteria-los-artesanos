import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { ArrowRight, Hammer, Shield, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RecentProjects } from "@/components/home/recent-projects";
import { Skeleton } from "@/components/ui/skeleton";

const services = [
  {
    icon: Hammer,
    title: "Muebles a medida",
    description:
      "Diseño y fabricación de piezas únicas adaptadas a tu espacio, con maderas seleccionadas y acabados duraderos.",
  },
  {
    icon: Sparkles,
    title: "Restauración",
    description:
      "Recuperación conservativa de muebles antiguos respetando materiales originales y técnicas tradicionales.",
  },
  {
    icon: Shield,
    title: "Carpintería estructural",
    description:
      "Puertas, armarios empotrados, revestimientos y carpintería integral para reformas de alto nivel.",
  },
];

function RecentProjectsSkeleton() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <Skeleton className="h-8 w-64" />
      <div className="mt-10 grid gap-8 md:grid-cols-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <Skeleton key={i} className="aspect-[4/3] w-full rounded-xl" />
        ))}
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <section className="relative flex min-h-[85vh] items-center">
        <Image
          src="https://images.unsplash.com/photo-1607407173191-76c7c2b2d146?w=1920&q=85"
          alt="Interior del taller de carpintería Los Artesanos con herramientas y madera"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIhAAAgEDBAMBAAAAAAAAAAAAAQIDAAQRBRIhMQYTQVFh/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAZEQACAwEAAAAAAAAAAAAAAAABAgADESH/2gAMAwEAAhEDEEA/ALu3u7W4tY7i3uI5oJ1EkciqysrDKgg8EEEEEGorR//9k="
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/30" />
        <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Carpintería artesanal · Madrid
          </p>
          <h1 className="mt-4 max-w-2xl font-serif text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Madera con alma, oficio con precisión
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Desde 1987 transformamos maderas nobles en piezas que perduran generaciones. Cada proyecto
            nace en nuestro taller y se entrega con garantía de artesanía.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
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
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="text-center">
          <h2 className="font-serif text-3xl font-semibold">Servicios destacados</h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Tres disciplinas que definen nuestro taller: diseño a medida, restauración patrimonial y
            carpintería integral.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title} className="border-border/80">
              <CardHeader>
                <service.icon className="mb-2 h-8 w-8 text-primary" aria-hidden />
                <CardTitle className="font-serif text-xl">{service.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/contacto" className="text-sm font-medium text-primary hover:underline">
                  Consultar disponibilidad →
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Suspense fallback={<RecentProjectsSkeleton />}>
        <RecentProjects />
      </Suspense>
    </>
  );
}
