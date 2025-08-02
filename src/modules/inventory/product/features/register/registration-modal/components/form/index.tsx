import { useRegistrationProductFormModel } from './form.model';
import RegistrationProductFormView from './form.view';

interface RegistrationProductFormViewModelProps {
  closeCreateProductModal: () => void;
}

const RegistrationProductFormViewModel = ({
  closeCreateProductModal,
}: RegistrationProductFormViewModelProps) => {
  const methods = useRegistrationProductFormModel();
  return (
    <RegistrationProductFormView closeCreateProductModal={closeCreateProductModal} {...methods} />
  );
};

export default RegistrationProductFormViewModel;
