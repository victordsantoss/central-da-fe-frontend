import EventDetailPage from '@/modules/event/pages/event/detail.page';

interface IPageProps {
  params: {
    id: string;
  };
}

export default async function Page({ params }: IPageProps) {
  return <EventDetailPage params={params} />;
} 