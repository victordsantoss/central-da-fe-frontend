'use server';

import { ICommonSearchParams } from '@/common/types/common.types';
import { listChurches } from '@/services/server/church.server.service';
import { handleApiError } from '@/configs/api/ssr-fetch';
import { Church } from '@/services/domain/church.types';
import RegisterEventViewModel from '../../ui/register';

export default async function EventRegisterPage(searchParams: Readonly<ICommonSearchParams>) {
  const churches = await listChurches({
    limit: 1000,
    page: 1,
    search: searchParams.search as string,
  });

  const churchesData = handleApiError<Church.IListChurchesResponse>(churches);

  return <RegisterEventViewModel churchesData={churchesData} />;
}
