import { useSupplierOrderAdvancedFilterModel } from './advanced-filter.model';
import { SupplierOrderAdvancedFilterView } from './advanced-filter.view';

const SupplierOrderAdvancedFilterViewModel = () => {
  const methods = useSupplierOrderAdvancedFilterModel();

  return <SupplierOrderAdvancedFilterView {...methods} />;
};

export default SupplierOrderAdvancedFilterViewModel;
