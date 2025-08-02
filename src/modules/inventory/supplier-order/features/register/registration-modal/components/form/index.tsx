import { useRegistrationSupplierOrderFormModel } from './form.model';
import RegistrationSupplierOrderFormView from './form.view';

interface RegistrationSupplierOrderFormViewModelProps {
  closeCreateSupplierOrderModal: () => void;
}

const RegistrationSupplierOrderFormViewModel = ({
  closeCreateSupplierOrderModal,
}: RegistrationSupplierOrderFormViewModelProps) => {
  const methods = useRegistrationSupplierOrderFormModel({ closeCreateSupplierOrderModal });
  return <RegistrationSupplierOrderFormView {...methods} />;
};

export default RegistrationSupplierOrderFormViewModel;
