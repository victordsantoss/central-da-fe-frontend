import { z } from 'zod';

const ProductOrderSchema = z.object({
  productId: z.string({ required_error: 'O ID do produto é obrigatório' }),
  quantity: z
    .number({ required_error: 'A quantidade é obrigatória' })
    .min(1, 'A quantidade deve ser maior que zero'),
  unitPrice: z
    .number({ required_error: 'O preço unitário é obrigatório' })
    .min(0.01, 'O preço unitário deve ser maior que zero'),
});

const SupplierOrderSchema = z.object({
  supplierId: z.string({ required_error: 'O ID do fornecedor é obrigatório' }),
  description: z.string({ required_error: 'A descrição é obrigatória' }),
  expectedDeliveryDate: z
    .string({ required_error: 'A data de entrega esperada é obrigatória' })
    .refine(date => {
      const deliveryDate = new Date(date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return deliveryDate >= today;
    }, 'A data de entrega deve ser igual ou posterior à data atual'),
  products: z
    .array(ProductOrderSchema, { required_error: 'A lista de produtos é obrigatória' })
    .min(1, 'Pelo menos um produto deve ser adicionado'),
});

type SupplierOrderFormValues = z.infer<typeof SupplierOrderSchema>;
type ProductOrderFormValues = z.infer<typeof ProductOrderSchema>;

export { SupplierOrderSchema, ProductOrderSchema };
export type { SupplierOrderFormValues, ProductOrderFormValues };
