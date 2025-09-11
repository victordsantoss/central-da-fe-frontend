'use client';

import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Stepper,
  Step,
  StepLabel,
  Box,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Event } from '@/services/domain/event.types';
import { UserSearchStep } from './steps/user-step';
import { ConfirmationStep } from './steps/confirmation-step';
import { PaymentStep } from './steps/payment-step';
import { SuccessStep } from './steps/success-step';
import { InscriptionModalProvider, useInscriptionModal } from './inscription-modal.context';

interface IInscriptionModalProps {
  readonly open: boolean;
  readonly onClose: () => void;
  readonly eventData: Event.IGetEventResponse;
}

export const InscriptionModalContent = ({ open, onClose, eventData }: IInscriptionModalProps) => {
  const [activeStep, setActiveStep] = useState(0);
  const { resetData } = useInscriptionModal();

  const isPaidEvent = eventData.price && eventData.price > 0;
  const steps = isPaidEvent 
    ? ['Dados do Usuário', 'Confirmar Inscrição', 'Pagamento']
    : ['Dados do Usuário', 'Confirmar Inscrição', 'Sucesso'];

  const handleNext = async () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleClose = () => {
    resetData();
    setActiveStep(0);
    onClose();
  };

  const renderStepContent = (step: number) => {
    switch (step) {
      case 0:
        return <UserSearchStep onNext={handleNext} />;
      case 1:
        return (
          <ConfirmationStep 
            onNext={handleNext} 
            onBack={handleBack} 
            eventData={eventData} 
          />
        );
      case 2:
        return isPaidEvent ? (
          <PaymentStep eventData={eventData} />
        ) : (
          <SuccessStep onClose={handleClose} eventData={eventData} />
        );
      default:
        return null;
    }
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 2,
          minHeight: '500px',
          minWidth: { xs: '95%', sm: 'auto' },
          maxWidth: { xs: '95%', md: '800px' },
        },
      }}
    >
      <DialogTitle>
        <Box display="flex" justifyContent="right" alignItems="center">
          <IconButton onClick={handleClose} size="small">
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>

      <DialogContent>
        <Box sx={{ width: '100%', mb: 4 }}>
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label, index) => (
              <Step key={label}>
                <StepLabel
                  sx={{
                    '& .MuiStepLabel-label': {
                      color: index <= activeStep ? 'primary.main' : 'grey.400',
                    },
                    '& .MuiStepIcon-root': {
                      color: index <= activeStep ? 'primary.main' : 'grey.400',
                    },
                  }}
                >
                  {label}
                </StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>

        <Box sx={{ minHeight: '300px' }}>{renderStepContent(activeStep)}</Box>
      </DialogContent>
    </Dialog>
  );
};

export function InscriptionModal(props: IInscriptionModalProps) {
  return (
    <InscriptionModalProvider>
      <InscriptionModalContent {...props} />
    </InscriptionModalProvider>
  );
}
