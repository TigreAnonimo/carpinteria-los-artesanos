"use client";

import { useActionState } from "react";
import { submitContact, type ContactState } from "@/app/contacto/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const initialState: ContactState = { success: false, message: "" };

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContact, initialState);

  return (
    <form action={formAction} className="space-y-6" noValidate>
      <div className="space-y-2">
        <Label htmlFor="nombre">Nombre</Label>
        <Input
          id="nombre"
          name="nombre"
          type="text"
          required
          autoComplete="name"
          aria-invalid={!!state.errors?.nombre}
          aria-describedby={state.errors?.nombre ? "nombre-error" : undefined}
        />
        {state.errors?.nombre && (
          <p id="nombre-error" className="text-sm text-destructive">
            {state.errors.nombre}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          aria-invalid={!!state.errors?.email}
          aria-describedby={state.errors?.email ? "email-error" : undefined}
        />
        {state.errors?.email && (
          <p id="email-error" className="text-sm text-destructive">
            {state.errors.email}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="mensaje">Mensaje</Label>
        <Textarea
          id="mensaje"
          name="mensaje"
          required
          rows={5}
          aria-invalid={!!state.errors?.mensaje}
          aria-describedby={state.errors?.mensaje ? "mensaje-error" : undefined}
        />
        {state.errors?.mensaje && (
          <p id="mensaje-error" className="text-sm text-destructive">
            {state.errors.mensaje}
          </p>
        )}
      </div>

      {state.message && (
        <p
          role="status"
          className={`rounded-md border px-4 py-3 text-sm ${
            state.success
              ? "border-green-200 bg-green-50 text-green-800"
              : "border-destructive/30 bg-destructive/10 text-destructive"
          }`}
        >
          {state.message}
        </p>
      )}

      <Button type="submit" disabled={pending} className="w-full sm:w-auto">
        {pending ? "Enviando…" : "Enviar mensaje"}
      </Button>
    </form>
  );
}
