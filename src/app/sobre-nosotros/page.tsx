import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Sobre nosotros",
  description:
    "Conoce la historia del taller Los Artesanos y nuestro proceso artesanal de selección de maderas, diseño y acabado.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <header className="max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-widest text-primary">Nuestra historia</p>
        <h1 className="mt-3 font-serif text-4xl font-semibold tracking-tight sm:text-5xl">
          Tres generaciones, un mismo oficio
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          Carpintería Los Artesanos nació en 1987 en el barrio de Chamberí, Madrid, cuando Antonio
          Tejeda abrió un pequeño taller con una sierra de cinta y la convicción de que la madera
          merece respeto. Hoy, su nieto Jesús continúa el legado con las mismas herramientas de
          precisión y una visión contemporanea del diseño artesanal.
        </p>
      </header>

      <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
        <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
          <Image
            src="https://images.unsplash.com/photo-1607407173191-76c7c2b2d146?w=1200&q=80"
            alt="Artesano trabajando la madera en el taller"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIhAAAgEDBAMBAAAAAAAAAAAAAQIDAAQRBRIhMQYTQVFh/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAZEQACAwEAAAAAAAAAAAAAAAABAgADESH/2gAMAwEAAhEDEEA/ALu3u7W4tY7i3uI5oJ1EkciqysrDKgg8EEEEEGorR//9k="
          />
        </div>
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <h2 className="font-serif text-2xl font-semibold text-foreground">Historia del taller</h2>
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

      <section className="mt-20">
        <h2 className="font-serif text-3xl font-semibold">Proceso artesanal</h2>
        <p className="mt-4 max-w-3xl text-muted-foreground leading-relaxed">
          Nuestro método combina tradición y precisión industrial controlada. Cada fase está
          documentada para que el cliente conozca el estado de su encargo en todo momento.
        </p>
        <ol className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
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
            <li key={item.step} className="rounded-xl border bg-card p-6 shadow-sm">
              <span className="font-serif text-3xl font-bold text-primary/40">{item.step}</span>
              <h3 className="mt-3 font-serif text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <div className="relative mt-20 aspect-[21/9] overflow-hidden rounded-xl">
        <Image
          src="https://images.unsplash.com/photo-1615873964213-48ffedbc9a9e?w=1600&q=80"
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
