import { Alert, Box, IconButton, Typography } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

import { IPaginatedResponse } from '@/common/types/base-pagination.types';
import { ProductModel } from '@/common/models/product.model';
import FilterViewModel from '@/components/filter';
import { Option } from '@/components/filter/filter.types';
import TableViewModel from '@/components/table';
import ProductTableCardViewModel from './components/table-card';
import CloseIcon from '@mui/icons-material/Close';
import dynamic from 'next/dynamic';

const ProductRegistrationModalViewModel = dynamic(() => import('../register/registration-modal'), {
  ssr: false,
});

const ProductDashboardSpeedDialViewModel = dynamic(() => import('./components/speed-dial'), {
  ssr: false,
});

interface IProductDashboardViewProps {
  content: IPaginatedResponse<ProductModel>;
  orderOptions: Option[];
  onRegisterClick: () => void;
  showAlert: boolean;
  setShowAlert: (showAlert: boolean) => void;
  showCreateProductModal: boolean;
  closeCreateProductModal: () => void;
}

export const ProductDashboardView = ({
  content,
  orderOptions,
  onRegisterClick,
  showAlert,
  setShowAlert,
  showCreateProductModal,
  closeCreateProductModal,
}: IProductDashboardViewProps) => {
  return (
    <Box display={'flex'} flexDirection={'column'} gap={{ xs: 1, md: 2 }}>
      {showAlert && (
        <Alert
          severity="info"
          icon={<InfoOutlinedIcon />}
          sx={{ mb: 3 }}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => setShowAlert(false)}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
            Informação sobre Produtos
          </Typography>
          <Typography variant="body2">
            Esta é a lista de produtos disponíveis para venda em nossa loja. Para que um produto
            seja disponibilizado no estoque, é necessário realizar um pedido junto ao fornecedor. O
            estoque é gerenciado separadamente através do módulo de Fornecedores.
          </Typography>
        </Alert>
      )}
      <Box display={'flex'} width={'100%'} gap={{ xs: 1, md: 2 }}>
        <FilterViewModel
          searchPlaceholder="Pesquisar por Código, Nome ou Descrição"
          onRegisterClick={onRegisterClick}
          orderOptions={orderOptions}
        />
      </Box>

      <TableViewModel
        renderItem={(item: ProductModel) => <ProductTableCardViewModel item={item} />}
        content={content}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          right: 0,
        }}
      >
        <ProductDashboardSpeedDialViewModel />
      </Box>
      <ProductRegistrationModalViewModel
        showCreateProductModal={showCreateProductModal}
        closeCreateProductModal={closeCreateProductModal}
      />
    </Box>
  );
};
