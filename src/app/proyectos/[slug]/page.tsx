import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { getProjectBySlug, projects } from "@/data/projects";
import { Button } from "@/components/ui/button";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    return { title: "Proyecto no encontrado" };
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [{ url: project.image, alt: project.title }],
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <Button asChild variant="ghost" className="mb-8 -ml-2">
        <Link href="/proyectos">
          <ArrowLeft className="mr-2 h-4 w-4" aria-hidden />
          Volver a la galería
        </Link>
      </Button>

      <header className="max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-wider text-primary">
          {project.category} · {project.year}
        </p>
        <h1 className="mt-2 font-serif text-4xl font-semibold tracking-tight sm:text-5xl">
          {project.title}
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          {project.longDescription}
        </p>
      </header>

      <div className="relative mt-12 aspect-[16/9] overflow-hidden rounded-xl">
        <Image
          src={project.image}
          alt={project.title}
          fill
          priority
          sizes="(max-width: 1200px) 100vw, 1152px"
          placeholder="blur"
          blurDataURL={project.blurDataURL}
          className="object-cover"
        />
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {project.gallery.map((src, i) => (
          <div key={src} className="relative aspect-[4/3] overflow-hidden rounded-xl">
            <Image
              src={src}
              alt={`${project.title} — imagen ${i + 2}`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              placeholder="blur"
              blurDataURL={project.blurDataURL}
              className="object-cover"
            />
          </div>
        ))}
      </div>

      <section className="mt-16 max-w-2xl">
        <h2 className="font-serif text-2xl font-semibold">Materiales utilizados</h2>
        <ul className="mt-4 space-y-2">
          {project.materials.map((material) => (
            <li
              key={material}
              className="flex items-center gap-2 text-muted-foreground before:h-1.5 before:w-1.5 before:rounded-full before:bg-primary before:content-['']"
            >
              {material}
            </li>
          ))}
        </ul>
      </section>

      <div className="mt-12">
        <Button asChild>
          <Link href="/contacto">Solicitar un proyecto similar</Link>
        </Button>
      </div>
    </article>
  );
}
