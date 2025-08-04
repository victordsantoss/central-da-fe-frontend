import { useRegisterFormModel } from './form.model';
import { RegisterFormView } from './form.view';
import { Church } from '@/services/domain/church.types';
import { Position } from '@/services/domain/position.types';

interface RegisterFormViewModelProps {
  churchesData: Church.IListChurchesResponse;
  positionsData: Position.IListPositionsResponse;
}

const RegisterFormViewModel = ({ churchesData, positionsData }: RegisterFormViewModelProps) => {
  const registerFormMethods = useRegisterFormModel();
  return (
    <RegisterFormView
      {...registerFormMethods}
      churchesData={churchesData}
      positionsData={positionsData}
    />
  );
};

export default RegisterFormViewModel;
