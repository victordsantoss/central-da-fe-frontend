import EventDetailPage from '@/modules/event/pages/event/detail.page';

interface IPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function Page({ params }: IPageProps) {
  const resolvedParams = await params;
  return <EventDetailPage params={resolvedParams} />;
}
