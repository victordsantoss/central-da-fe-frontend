import { ISupplierOrderResponseDto } from '@/modules/inventory/supplier-order/types/list.response.dto';
import { useSupplierOrderTableCardModel } from './table-card.model';
import SupplierOrderTableCardView from './table-card.view';

interface ISupplierOrderCardViewModelProps {
  item: ISupplierOrderResponseDto;
  onReceive: (id: string) => void;
  onCancel: (id: string) => void;
}

const SupplierOrderTableCardViewModel = ({
  item,
  onReceive,
  onCancel,
}: ISupplierOrderCardViewModelProps) => {
  const methods = useSupplierOrderTableCardModel();

  const handleReceive = onReceive;
  const handleCancel = onCancel;

  return (
    <SupplierOrderTableCardView
      item={item}
      {...methods}
      onReceive={handleReceive}
      onCancel={handleCancel}
    />
  );
};

export default SupplierOrderTableCardViewModel;
