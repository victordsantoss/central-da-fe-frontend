'use client';

import { EventInscriptionView } from "./inscription.view";
import { Event } from "@/services/domain/event.types";

interface IEventInscriptionViewModelProps {
  readonly id: string;
  readonly eventData: Event.IGetEventResponse;
}

const EventInscriptionViewModel = ({ id, eventData }: IEventInscriptionViewModelProps) => {
  return <EventInscriptionView id={id} eventData={eventData} />;
};

export default EventInscriptionViewModel; 
