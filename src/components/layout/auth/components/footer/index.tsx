import { useFooterModel } from './footer.model';
import { FooterView } from './footer.view';

const FooterViewModel = () => {
  const footerMethods = useFooterModel();
  return <FooterView {...footerMethods} />;
};

export default FooterViewModel;
