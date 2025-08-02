import { useSupplierTableCardModel } from '@/modules/inventory/supplier/features/dashboard/components/table-card/table-card.model';
import ProductTableCardView from './table-card.view';
import { ProductModel } from '@/common/models/product.model';

interface IProductCardViewModelProps {
  item: ProductModel;
}

const ProductTableCardViewModel = ({ item }: IProductCardViewModelProps) => {
  const methods = useSupplierTableCardModel();
  return <ProductTableCardView item={item} {...methods} />;
};

export default ProductTableCardViewModel;
