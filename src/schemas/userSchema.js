import { z } from "zod";

export const userSchema = z.object({
  nombre: z
    .string()
    .min(1, "Campo requerido*")
    .min(3, "El nombre debe tener al menos 3 caracteres*")
    .max(15, "El nombre debe tener máximo 15 caracteres*"),
  apellidos: z
    .string()
    .min(1, "Campo requerido*")
    .min(3, "Los apellidos deben tener al menos 3 caracteres*")
    .max(40, "Los apellidos deben tener como máximo 40 caracteres*"),
  email: z
    .string()
    .email("Debe contener un email válido*")
    .min(1, "Campo requerido*")
    .max(30, "El email debe tener como máximo 30 caracteres*"),
});
