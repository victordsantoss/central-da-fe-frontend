import { z } from 'zod';

export const applyCnpjMask = (value: string): string =>
  value
    .replace(/\D/g, '')
    .replace(/^(\d{2})(\d)/, '$1.$2')
    .replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3')
    .replace(/\.(\d{3})(\d)/, '.$1/$2')
    .replace(/(\d{4})(\d)/, '$1-$2')
    .slice(0, 18);

const RegistrationsSupplierSchema = z.object({
  name: z.string({ required_error: 'O nome é obrigatório' }),
  cnpj: z
    .string({ required_error: 'O CNPJ é obrigatório' })
    .transform(v => v.replace(/\D/g, ''))
    .refine(v => /^\d{14}$/.test(v), 'CNPJ inválido'),
  email: z.string({ required_error: 'O email é obrigatório' }).email('Insira um email válido'),
  phone: z.string({ required_error: 'O telefone é obrigatório' }),
  address: z.string({ required_error: 'O endereço é obrigatório' }),
});

type RegistrationSuppluerFormValues = z.infer<typeof RegistrationsSupplierSchema>;

export { RegistrationsSupplierSchema };
export type { RegistrationSuppluerFormValues };
