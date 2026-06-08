import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact/contact-form";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Solicita presupuesto sin compromiso. Carpintería Los Artesanos — Madrid. Respuesta en 24–48 horas.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <div className="grid gap-16 lg:grid-cols-2">
        <div>
          <p className="section-label">Contacto</p>
          <h1 className="mt-6 font-display text-4xl font-bold tracking-tight">
            Cuéntanos tu proyecto
          </h1>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            Rellena el formulario y te responderemos con un presupuesto orientativo en 24–48 horas
            laborables. También puedes visitarnos en el taller con cita previa.
          </p>

          <ul className="mt-12 space-y-5 text-sm text-muted-foreground">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden />
              <span>
               carretera del mig 47
                <br />
                Barcelona 
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-5 w-5 shrink-0 text-accent" aria-hidden />
              <a href="tel:+34912345678" className="transition-colors hover:text-primary">
                +34 623 383 019
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-5 w-5 shrink-0 text-accent" aria-hidden />
              <a href="mailto:hola@losartesanos.es" className="transition-colors hover:text-primary">
                jesusdiaz200414@gmail.com
              </a>
            </li>
          </ul>
        </div>

        <div className="border border-border bg-card p-8 sm:p-10">
          <h2 className="font-display text-xl font-bold">Formulario de contacto</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Campos obligatorios: nombre, email y mensaje.
          </p>
          <div className="mt-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
