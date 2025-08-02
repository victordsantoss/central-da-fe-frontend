import { IProductRegistrationModalControlProps } from './registration-modal.types';
import { ProductRegistrationModalView } from './registration-modal.view';

const ProductRegistrationModalViewModel = ({
  showCreateProductModal,
  closeCreateProductModal,
}: IProductRegistrationModalControlProps) => {
  return (
    <ProductRegistrationModalView
      showCreateProductModal={showCreateProductModal}
      closeCreateProductModal={closeCreateProductModal}
    />
  );
};

export default ProductRegistrationModalViewModel;
