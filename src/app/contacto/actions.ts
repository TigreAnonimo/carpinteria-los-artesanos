"use server";

import { z } from "zod";

const contactSchema = z.object({
  nombre: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Introduce un email válido"),
  mensaje: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
});

export type ContactState = {
  success: boolean;
  message: string;
  errors?: {
    nombre?: string;
    email?: string;
    mensaje?: string;
  };
};

export async function submitContact(
  _prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  const raw = {
    nombre: formData.get("nombre"),
    email: formData.get("email"),
    mensaje: formData.get("mensaje"),
  };

  const result = contactSchema.safeParse(raw);

  if (!result.success) {
    const fieldErrors = result.error.flatten().fieldErrors;
    return {
      success: false,
      message: "Revisa los campos marcados e inténtalo de nuevo.",
      errors: {
        nombre: fieldErrors.nombre?.[0],
        email: fieldErrors.email?.[0],
        mensaje: fieldErrors.mensaje?.[0],
      },
    };
  }

  // Simulación de persistencia (producción: DB, email, CRM…)
  await new Promise((resolve) => setTimeout(resolve, 600));

  console.info("[Contacto]", result.data);

  return {
    success: true,
    message:
      "¡Gracias por contactarnos! Hemos recibido tu mensaje y te responderemos en un plazo de 24–48 horas.",
  };
}
