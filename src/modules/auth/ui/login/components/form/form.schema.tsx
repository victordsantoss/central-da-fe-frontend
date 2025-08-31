import { z } from 'zod';

const LoginSchema = z.object({
  email: z.string({ required_error: 'O email é obrigatório' }).email('Insira um email válido'),
  password: z
    .string({ required_error: 'A senha é obrigatória' })
    .min(6, 'A senha deve ter pelo menos 6 caracteres'),
  rememberMe: z.boolean().optional().default(false),
});

type LoginFormValues = z.infer<typeof LoginSchema>;

export { LoginSchema };
export type { LoginFormValues };
