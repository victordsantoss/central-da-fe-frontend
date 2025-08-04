'use client';

import RegisterView from './register.view';
import { Church } from '@/services/domain/church.types';
import { Position } from '@/services/domain/position.types';

interface RegisterViewModelProps {
  churchesData: Church.IListChurchesResponse;
  positionsData: Position.IListPositionsResponse;
}

const RegisterViewModel = ({ churchesData, positionsData }: RegisterViewModelProps) => {
  return <RegisterView churchesData={churchesData} positionsData={positionsData} />;
};

export default RegisterViewModel;
