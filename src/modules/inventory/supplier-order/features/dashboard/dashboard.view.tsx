import { Box } from '@mui/material';
import FilterViewModel from '../../../../../components/filter';

import { IPaginatedResponse } from '@/common/types/base-pagination.types';
import TableViewModel from '@/components/table';
import SupplierOrderTableCardViewModel from './components/table-card';
import { Option } from '@/components/filter/filter.types';
import SupplierOrderAdvancedFilterViewModel from './components/advanced-filter';
import { ISupplierOrderResponseDto } from '../../types/list.response.dto';
import { IConfirmationModalProps } from '@/components/confirmation-modal/confirmation-modal.types';
import dynamic from 'next/dynamic';

const SupplierOrderRegistrationModalViewModel = dynamic(
  () => import('../register/registration-modal'),
  {
    ssr: false,
  }
);

const ConfirmationModal = dynamic(() => import('@/components/confirmation-modal'), {
  ssr: false,
});

interface ISupplierOrderDashboardViewProps {
  onRegisterClick: () => void;
  content: IPaginatedResponse<ISupplierOrderResponseDto>;
  orderOptions: Option[];
  showCreateSupplierOrderModal: boolean;
  closeCreateSupplierOrderModal: () => void;
  confirmationModal: IConfirmationModalProps;
  handleReceiveOrder: (id: string) => void;
  handleCancelOrder: (id: string) => void;
}

export const SupplierOrderDashboardView = ({
  onRegisterClick,
  content,
  orderOptions,
  showCreateSupplierOrderModal,
  closeCreateSupplierOrderModal,
  confirmationModal,
  handleReceiveOrder,
  handleCancelOrder,
}: ISupplierOrderDashboardViewProps) => {
  return (
    <Box display={'flex'} flexDirection={'column'} gap={{ xs: 1, md: 2 }}>
      <Box display={'flex'} width={'100%'} gap={{ xs: 1, md: 2 }}>
        <FilterViewModel
          searchPlaceholder="Pesquisar por Fornecedor, Produto ou Código"
          onRegisterClick={onRegisterClick}
          orderOptions={orderOptions}
          AdvancedFilter={<SupplierOrderAdvancedFilterViewModel />}
        />
      </Box>
      <TableViewModel
        renderItem={(item: ISupplierOrderResponseDto) => (
          <SupplierOrderTableCardViewModel
            item={item}
            onReceive={handleReceiveOrder}
            onCancel={handleCancelOrder}
          />
        )}
        content={content}
      />
      <SupplierOrderRegistrationModalViewModel
        showCreateSupplierOrderModal={showCreateSupplierOrderModal}
        closeCreateSupplierOrderModal={closeCreateSupplierOrderModal}
      />
      <ConfirmationModal
        open={confirmationModal.open}
        onClose={confirmationModal.onClose}
        title={confirmationModal.title}
        message={confirmationModal.message}
        onConfirm={confirmationModal.onConfirm}
      />
    </Box>
  );
};
