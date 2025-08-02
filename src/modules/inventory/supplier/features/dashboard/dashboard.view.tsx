import { Box } from '@mui/material';
import FilterViewModel from '../../../../../components/filter';

import { SupplierModel } from '@/common/models/supplier.model';
import { IPaginatedResponse } from '@/common/types/base-pagination.types';
import TableViewModel from '@/components/table';
import SupplierTableCardViewModel from './components/table-card';
import { Option } from '@/components/filter/filter.types';
import SupplierAdvancedFilterViewModel from './components/advanced-filter';
import dynamic from 'next/dynamic';

const SupplierRegistrationModalViewModel = dynamic(() => import('../register/registration-modal'), {
  ssr: false,
});

interface ISupplierDashboardViewProps {
  showCreateSupplierModal: boolean;
  onRegisterClick: () => void;
  closeCreateSupplierModal: () => void;
  content: IPaginatedResponse<SupplierModel>;
  orderOptions: Option[];
}

export const SupplierDashboardView = ({
  showCreateSupplierModal,
  onRegisterClick,
  closeCreateSupplierModal,
  content,
  orderOptions,
}: ISupplierDashboardViewProps) => {
  return (
    <Box display={'flex'} flexDirection={'column'} gap={{ xs: 1, md: 2 }}>
      <Box display={'flex'} width={'100%'} gap={{ xs: 1, md: 2 }}>
        <FilterViewModel
          searchPlaceholder="Pesquisar por Nome ou Email"
          onRegisterClick={onRegisterClick}
          orderOptions={orderOptions}
          AdvancedFilter={<SupplierAdvancedFilterViewModel />}
        />
      </Box>
      <TableViewModel
        renderItem={(item: SupplierModel) => <SupplierTableCardViewModel item={item} />}
        content={content}
      />
      <SupplierRegistrationModalViewModel
        showCreateSupplierModal={showCreateSupplierModal}
        closeCreateSupplierModal={closeCreateSupplierModal}
      />
    </Box>
  );
};
