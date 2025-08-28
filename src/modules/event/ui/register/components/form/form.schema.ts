import { z } from 'zod';
import { EventCategory } from '@/common/enums/event.enum';
import { Dayjs } from 'dayjs';

const addressSchema = z.object({
  street: z.string().min(1, 'A rua é obrigatória'),
  number: z.string().min(1, 'O número é obrigatório'),
  complement: z.string().optional(),
  neighborhood: z.string().min(1, 'O bairro é obrigatório'),
  city: z.string().min(1, 'A cidade é obrigatória'),
  state: z.string().min(1, 'O estado é obrigatório'),
  zipCode: z.string().min(1, 'O CEP é obrigatório'),
  country: z.string().default('Brasil'),
});

const RegisterEventSchema = z
  .object({
    name: z.string().min(1, 'O nome do evento é obrigatório'),
    description: z.string().min(1, 'A descrição é obrigatória'),
    category: z.nativeEnum(EventCategory, {
      message: 'A categoria é obrigatória',
    }),
    isPaid: z.boolean().optional(),
    price: z.number().min(0, 'O preço deve ser maior ou igual a zero').optional(),
    availableTickets: z
      .number({ message: 'A quantidade de vagas é obrigatória' })
      .min(1, 'A quantidade de vagas deve ser maior que zero'),
    startDate: z.custom<Dayjs>(
      val => val instanceof Object && typeof val.isValid === 'function' && val.isValid(),
      {
        message: 'A data de início é obrigatória',
      }
    ),
    endDate: z
      .custom<Dayjs>(
        val => !val || (val instanceof Object && typeof val.isValid === 'function' && val.isValid())
      )
      .optional(),
    address: addressSchema,
    churchId: z.string({ message: 'A igreja é obrigatória' }),
  })
  .refine(
    data => {
      // Se o evento for pago, preço é obrigatório
      if (data.isPaid && (!data.price || data.price <= 0)) {
        return false;
      }
      return true;
    },
    {
      message: 'O preço é obrigatório para eventos pagos',
      path: ['price'],
    }
  );

type RegisterEventFormValues = z.infer<typeof RegisterEventSchema>;

export { RegisterEventSchema };
export type { RegisterEventFormValues };
