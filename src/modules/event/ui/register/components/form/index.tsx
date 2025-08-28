import { Church } from '@/services/domain/church.types';
import { useRegisterEventFormModel } from './form.model';
import RegisterEventFormView from './form.view';

interface IRegisterEventFormViewModelProps {
  churchesData: Church.IListChurchesResponse;
}

const RegisterEventFormViewModel = ({ churchesData }: IRegisterEventFormViewModelProps) => {
  const registerEventFormMethods = useRegisterEventFormModel(churchesData);
  return <RegisterEventFormView {...registerEventFormMethods} />;
};

export default RegisterEventFormViewModel;
