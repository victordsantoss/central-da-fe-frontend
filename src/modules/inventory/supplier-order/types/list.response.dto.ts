import { ProductModel } from '@/common/models/product.model';
import { SupplierModel } from '@/common/models/supplier.model';
import { SupplierOrderModel } from '@/common/models/supplier-order.model';

export interface ISupplierOrderResponseDto
  extends Omit<SupplierOrderModel, 'supplier' | 'products'> {
  supplier: Partial<SupplierModel>;
  products: {
    quantity: number;
    unitPrice: number;
    product: Partial<ProductModel>;
  }[];
}
