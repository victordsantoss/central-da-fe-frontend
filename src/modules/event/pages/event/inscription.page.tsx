'use server';

import EventInscriptionViewModel from '../../ui/inscription'

interface IEventInscriptionPageProps {
  readonly id: string
}

export default async function EventInscriptionPage({ id }: IEventInscriptionPageProps) {
  return <EventInscriptionViewModel />
}

