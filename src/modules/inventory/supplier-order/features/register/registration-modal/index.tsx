import { ISupplierOrderRegistrationModalControlProps } from './registration-modal.types';
import { SupplierOrderRegistrationModalView } from './registration-modal.view';

const SupplierOrderRegistrationModalViewModel = ({
  showCreateSupplierOrderModal,
  closeCreateSupplierOrderModal,
}: ISupplierOrderRegistrationModalControlProps) => {
  return (
    <SupplierOrderRegistrationModalView
      showCreateSupplierOrderModal={showCreateSupplierOrderModal}
      closeCreateSupplierOrderModal={closeCreateSupplierOrderModal}
    />
  );
};

export default SupplierOrderRegistrationModalViewModel;
