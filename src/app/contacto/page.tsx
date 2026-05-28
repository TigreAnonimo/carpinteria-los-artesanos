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
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="grid gap-16 lg:grid-cols-2">
        <div>
          <p className="text-sm font-medium uppercase tracking-widest text-primary">Contacto</p>
          <h1 className="mt-3 font-serif text-4xl font-semibold tracking-tight">
            Cuéntanos tu proyecto
          </h1>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Rellena el formulario y te responderemos con un presupuesto orientativo en 24–48 horas
            laborables. También puedes visitarnos en el taller con cita previa.
          </p>

          <ul className="mt-10 space-y-4 text-muted-foreground">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
              <span>
                Calle del Torno 12
                <br />
                28005 Madrid
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-5 w-5 shrink-0 text-primary" aria-hidden />
              <a href="tel:+34912345678" className="hover:text-primary">
                +34 912 345 678
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-5 w-5 shrink-0 text-primary" aria-hidden />
              <a href="mailto:hola@losartesanos.es" className="hover:text-primary">
                hola@losartesanos.es
              </a>
            </li>
          </ul>
        </div>

        <div className="rounded-xl border bg-card p-8 shadow-sm">
          <h2 className="font-serif text-xl font-semibold">Formulario de contacto</h2>
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
