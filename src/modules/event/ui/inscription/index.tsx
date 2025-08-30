'use client';

import { EventInscriptionView } from "./inscription.view";

interface IEventInscriptionViewModelProps {
  readonly id: string;
}

const EventInscriptionViewModel = ({ id }: IEventInscriptionViewModelProps) => {
  console.log(id);
  return <EventInscriptionView />;
};

export default EventInscriptionViewModel; 
