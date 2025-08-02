import { z } from 'zod';

const RegistrationProductSchema = z.object({
  name: z
    .string({ required_error: 'O nome é obrigatório' })
    .min(3, 'O nome deve ter pelo menos 3 caracteres')
    .max(255, 'O nome deve ter no máximo 255 caracteres'),
  code: z
    .string({ required_error: 'O código é obrigatório' })
    .min(3, 'O código deve ter pelo menos 3 caracteres')
    .max(50, 'O código deve ter no máximo 50 caracteres'),
  description: z.string().max(255, 'A descrição deve ter no máximo 255 caracteres').optional(),
  categories: z
    .array(z.union([z.string().uuid('ID de categoria inválido'), z.string()]))
    .optional(),
});

type RegistrationProductFormValues = z.infer<typeof RegistrationProductSchema>;

export { RegistrationProductSchema };
export type { RegistrationProductFormValues };
