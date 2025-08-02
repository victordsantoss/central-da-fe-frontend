import { Dialog, DialogContent, DialogTitle, Typography } from '@mui/material';
import { ISupplierOrderRegistrationModalControlProps } from './registration-modal.types';
import dynamic from 'next/dynamic';

const RegistrationSupplierOrderFormViewModel = dynamic(() => import('./components/form'), {
  ssr: false,
});

export const SupplierOrderRegistrationModalView = ({
  showCreateSupplierOrderModal,
  closeCreateSupplierOrderModal,
}: ISupplierOrderRegistrationModalControlProps) => {
  return (
    <Dialog
      open={showCreateSupplierOrderModal}
      onClose={closeCreateSupplierOrderModal}
      fullWidth
      maxWidth={false}
      PaperProps={{
        sx: {
          minWidth: { xs: '90vw', sm: '40vw', md: '40vw' },
          maxWidth: { xs: '95vw', sm: '60vw', md: '50vw' },
        },
      }}
    >
      <DialogTitle>
        <Typography color="primary" gutterBottom fontSize={28} fontWeight={600}>
          Cadastrar Pedido ao Fornecedor
        </Typography>
        <Typography variant="body2" color="primary">
          Adicione novos pedidos a fornecedores para popular o estoque e vendas de forma eficiente.
        </Typography>
      </DialogTitle>
      <DialogContent>
        <RegistrationSupplierOrderFormViewModel
          closeCreateSupplierOrderModal={closeCreateSupplierOrderModal}
        />
      </DialogContent>
    </Dialog>
  );
};
