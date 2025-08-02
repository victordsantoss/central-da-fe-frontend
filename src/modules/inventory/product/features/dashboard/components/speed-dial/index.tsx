import { useProductSpeedDialModel } from './speed-dial.model';
import { ProductDashboardSpeedDialView } from './speed-dial.view';

const ProductDashboardSpeedDialViewModel = () => {
  const methods = useProductSpeedDialModel();

  return <ProductDashboardSpeedDialView {...methods} />;
};

export default ProductDashboardSpeedDialViewModel;
