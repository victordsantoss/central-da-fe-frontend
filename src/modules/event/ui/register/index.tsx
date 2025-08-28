'use client';

import { Church } from '@/services/domain/church.types';
import { RegisterEventView } from './register.view';

interface IEventDashboardViewModelProps {
  churchesData: Church.IListChurchesResponse;
}

const RegisterEventViewModel = ({ churchesData }: IEventDashboardViewModelProps) => {
  return <RegisterEventView churchesData={churchesData} />;
};

export default RegisterEventViewModel;
