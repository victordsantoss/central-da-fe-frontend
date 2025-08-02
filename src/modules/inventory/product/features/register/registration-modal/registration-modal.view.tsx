import { Dialog, DialogContent, DialogTitle, Typography } from '@mui/material';
import { IProductRegistrationModalControlProps } from './registration-modal.types';
import RegistrationProductFormViewModel from './components/form';

export const ProductRegistrationModalView = ({
  showCreateProductModal,
  closeCreateProductModal,
}: IProductRegistrationModalControlProps) => {
  return (
    <Dialog
      open={showCreateProductModal}
      onClose={closeCreateProductModal}
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
          Cadastrar Produto
        </Typography>
        <Typography variant="body2" color="primary">
          Adicione novos produtos para gerenciar estoque e vendas de forma eficiente .
        </Typography>
      </DialogTitle>
      <DialogContent>
        <RegistrationProductFormViewModel closeCreateProductModal={closeCreateProductModal} />
      </DialogContent>
    </Dialog>
  );
};
