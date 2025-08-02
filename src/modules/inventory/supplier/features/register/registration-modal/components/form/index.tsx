import { useRegistrationSuppilerFormModel } from './form.model';
import RegistrationSupplierFormView from './form.view';

interface RegistrationSupplierFormViewModelProps {
  closeCreateSupplierModal: () => void;
}

const RegistrationSupplierFormViewModel = ({
  closeCreateSupplierModal,
}: RegistrationSupplierFormViewModelProps) => {
  const methods = useRegistrationSuppilerFormModel();
  return (
    <RegistrationSupplierFormView
      closeCreateSupplierModal={closeCreateSupplierModal}
      {...methods}
    />
  );
};

export default RegistrationSupplierFormViewModel;
