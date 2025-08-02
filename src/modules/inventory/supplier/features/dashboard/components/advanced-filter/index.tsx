import { useSupplierAdvancedFilterModel } from './advanced-filter.model';
import { SupplierAdvancedFilterView } from './advanced-filter.view';

const SupplierAdvancedFilterViewModel = () => {
  const methods = useSupplierAdvancedFilterModel();

  return <SupplierAdvancedFilterView {...methods} />;
};

export default SupplierAdvancedFilterViewModel;
