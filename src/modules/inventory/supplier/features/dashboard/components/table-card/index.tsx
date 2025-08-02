import { SupplierModel } from '@/common/models/supplier.model';
import { useSupplierTableCardModel } from './table-card.model';
import SupplierTableCardView from './table-card.view';

interface ISupplierCardViewModelProps {
  item: SupplierModel;
}

const SupplierTableCardViewModel = ({ item }: ISupplierCardViewModelProps) => {
  const methods = useSupplierTableCardModel();
  return <SupplierTableCardView item={item} {...methods} />;
};

export default SupplierTableCardViewModel;
