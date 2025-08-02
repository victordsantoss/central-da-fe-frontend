import { SupplierRegistrationModalView } from './registratiom-modal.view';

import { ISupplierRegistrationModalControlProps } from './registration-modal.types';

const SupplierRegistrationModalViewModel = ({
  showCreateSupplierModal,
  closeCreateSupplierModal,
}: ISupplierRegistrationModalControlProps) => {
  return (
    <SupplierRegistrationModalView
      showCreateSupplierModal={showCreateSupplierModal}
      closeCreateSupplierModal={closeCreateSupplierModal}
    />
  );
};

export default SupplierRegistrationModalViewModel;
