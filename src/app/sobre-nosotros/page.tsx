import type { Metadata } from "next";
import Image from "next/image";
import { siteImages } from "@/lib/images";

export const metadata: Metadata = {
  title: "Sobre nosotros",
  description:
    "Conoce la historia del taller Los Artesanos y nuestro proceso artesanal de selección de maderas, diseño y acabado.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <header className="max-w-3xl border-b border-border pb-12">
        <p className="section-label">Nuestra historia</p>
        <h1 className="mt-6 font-display text-4xl font-bold tracking-tight sm:text-5xl">
          Tres generaciones, un mismo oficio
        </h1>
        <p className="mt-6 text-base leading-relaxed text-muted-foreground">
          Carpintería Los Artesanos nació en 1987 en el barrio de Chamberí, Madrid, cuando Antonio
          Tejeda abrió un pequeño taller con una sierra de cinta y la convicción de que la madera
          merece respeto. Hoy, su nieto Jesús continúa el legado con las mismas herramientas de
          precisión y una visión contemporanea del diseño artesanal.
        </p>
      </header>

      <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
        <div className="relative aspect-[4/3] overflow-hidden border border-border">
          <Image
            src={siteImages.workshop}
            alt="Artesano trabajando la madera en el taller"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIhAAAgEDBAMBAAAAAAAAAAAAAQIDAAQRBRIhMQYTQVFh/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAZEQACAwEAAAAAAAAAAAAAAAABAgADESH/2gAMAwEAAhEDEEA/ALu3u7W4tY7i3uI5oJ1EkciqysrDKgg8EEEEEGorR//9k="
          />
        </div>
        <div className="space-y-6 text-sm leading-relaxed text-muted-foreground">
          <h2 className="font-display text-2xl font-bold text-foreground">Historia del taller</h2>
          <p>
            Lo que comenzó como un taller de barrio se convirtió en referencia para arquitectos y
            interioristas que buscan piezas con carácter. Hemos trabajado en más de 400 proyectos
            residenciales y comerciales, siempre con materiales trazables y acabados que envejecen
            con dignidad.
          </p>
          <p>
            Creemos que la carpintería de calidad no es un lujo, sino una inversión. Cada encargo
            pasa por un proceso riguroso de asesoramiento, diseño técnico y fabricación en serie
            limitada — nunca producción en masa.
          </p>
        </div>
      </div>

      <section className="mt-24">
        <p className="section-label">Metodología</p>
        <h2 className="mt-4 font-display text-3xl font-bold">Proceso artesanal</h2>
        <p className="mt-4 max-w-3xl text-sm text-muted-foreground leading-relaxed">
          Nuestro método combina tradición y precisión industrial controlada. Cada fase está
          documentada para que el cliente conozca el estado de su encargo en todo momento.
        </p>
        <ol className="mt-12 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              step: "01",
              title: "Consulta y diseño",
              text: "Visita al taller o al domicilio. Selección de maderas, bocetos y presupuesto detallado.",
            },
            {
              step: "02",
              title: "Selección de materiales",
              text: "Maderas certificadas FSC, herrajes europeos y acabados ecológicos según el proyecto.",
            },
            {
              step: "03",
              title: "Fabricación",
              text: "Corte, ensamblaje y acabado en nuestro taller. Control de calidad en cada unión.",
            },
            {
              step: "04",
              title: "Entrega e instalación",
              text: "Montaje profesional, ajustes finales y guía de mantenimiento para el cliente.",
            },
          ].map((item) => (
            <li key={item.step} className="bg-background p-8">
              <span className="font-display text-4xl font-bold text-accent/40">{item.step}</span>
              <h3 className="mt-4 font-display text-base font-bold">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <div className="relative mt-24 aspect-[21/9] overflow-hidden border border-border">
        <Image
          src={siteImages.woodDetail}
          alt="Detalle de veta de madera en pieza terminada"
          fill
          sizes="100vw"
          className="object-cover"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIhAAAgEDBAMBAAAAAAAAAAAAAQIDAAQRBRIhMQYTQVFh/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAZEQACAwEAAAAAAAAAAAAAAAABAgADESH/2gAMAwEAAhEDEEA/ALu3u7W4tY7i3uI5oJ1EkciqysrDKgg8EEEEEGorR//9k="
        />
      </div>
    </div>
  );
}
