import EventInscriptionPage from "@/modules/event/pages/event/inscription.page"


interface IPageProps {
  readonly params: { id: string }
}

export default async function Page({ params }: IPageProps) {
  return <EventInscriptionPage id={params.id} />
}
