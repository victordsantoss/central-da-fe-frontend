import { listChurches } from '@/services/server/church.server.service';
import RegisterViewModel from '../ui/register';
import { ICommonSearchParams } from '@/common/types/common.types';
import { handleApiError } from '@/configs/api/ssr-fetch';
import { Church } from '@/services/domain/church.types';
import { listPositions } from '@/services/server/positions.server.service';
import { Position } from '@/services/domain/position.types';

export default async function RegisterPage(searchParams: Readonly<ICommonSearchParams>) {
  const churches = await listChurches({
    limit: 1000,
    page: 1,
    search: searchParams.search as string,
  });

  const positions = await listPositions({
    limit: 1000,
    page: 1,
    search: searchParams.search as string,
  });

  const churchesData = handleApiError<Church.IListChurchesResponse>(churches);
  const positionsData = handleApiError<Position.IListPositionsResponse>(positions);

  return <RegisterViewModel churchesData={churchesData} positionsData={positionsData} />;
}
