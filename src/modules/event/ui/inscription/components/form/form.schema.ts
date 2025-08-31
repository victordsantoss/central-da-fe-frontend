import { z } from 'zod';

export const EventRegistrationSchema = z.object({
  cpf: z
    .string()
    .min(11, 'CPF inválido')
    .max(14, 'CPF inválido')
    .regex(/^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/, 'CPF inválido'),
});

export type EventRegistrationFormValues = z.infer<typeof EventRegistrationSchema>;
