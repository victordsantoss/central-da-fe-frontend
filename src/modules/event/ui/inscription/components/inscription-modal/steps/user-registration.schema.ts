import { z } from 'zod';

export const UserRegistrationSchema = z.object({
  name: z
    .string({ required_error: 'O nome é obrigatório' })
    .min(3, { message: 'O nome deve ter no mínimo 3 caracteres' })
    .max(100, { message: 'O nome deve ter no máximo 100 caracteres' })
    .trim(),
  email: z
    .string({ required_error: 'O email é obrigatório' })
    .email('Insira um email válido')
    .trim(),
  cpf: z
    .string({ required_error: 'O cpf é obrigatório' })
    .max(14, { message: 'O CPF deve ter no máximo 14 caracteres' })
    .regex(/^(\d{3}\.?\d{3}\.?\d{3}-?\d{2})$/, 'CPF inválido')
    .trim(),
  positionIds: z.array(z.string()).min(1, { message: 'Selecione pelo menos um cargo' }),
});

export type UserRegistrationFormValues = z.infer<typeof UserRegistrationSchema>;
