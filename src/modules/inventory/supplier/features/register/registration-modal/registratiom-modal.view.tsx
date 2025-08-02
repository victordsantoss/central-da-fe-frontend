import { Dialog, DialogContent, DialogTitle, Typography } from '@mui/material';
import { ISupplierRegistrationModalControlProps } from './registration-modal.types';
import RegistrationSupplierFormViewModel from './components/form';

export const SupplierRegistrationModalView = ({
  showCreateSupplierModal,
  closeCreateSupplierModal,
}: ISupplierRegistrationModalControlProps) => {
  return (
    <Dialog
      open={showCreateSupplierModal}
      onClose={closeCreateSupplierModal}
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
          Cadastrar Fornecedor
        </Typography>
        <Typography variant="body2" color="primary">
          Adicione novos fornecedores para gerenciar estoque e vendas de forma eficiente.
        </Typography>
      </DialogTitle>
      <DialogContent>
        <RegistrationSupplierFormViewModel closeCreateSupplierModal={closeCreateSupplierModal} />
      </DialogContent>
    </Dialog>
  );
};
