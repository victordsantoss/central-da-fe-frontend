import {
  Box,
  CardActions,
  CardContent,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Popover,
  Typography,
  Chip,
  Collapse,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { formatCurrency } from '@/common/utils/format';
import {
  mapPaymentStatusToPtBr,
  mapDeliveryStatusToPtBr,
} from '@/modules/inventory/supplier-order/mappers/status.mapper';
import { ISupplierOrderResponseDto } from '../../../../types/list.response.dto';

interface ISupplierOrderTableCardViewProps {
  item: ISupplierOrderResponseDto;
  anchorEl: HTMLButtonElement | null;
  handleOpenPopover: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleClosePopover: () => void;
  open: boolean;
  id: string | undefined;
  onView: (id: string) => void;
  onEdit: (id: string) => void;
  onReceive: (id: string) => void;
  getPaymentStatusColor: (status: string) => string;
  getDeliveryStatusColor: (status: string) => string;
  openProducts: boolean;
  setOpenProducts: (open: boolean) => void;
  onCancel: (id: string) => void;
}

const SupplierOrderTableCardView = ({
  item,
  anchorEl,
  handleOpenPopover,
  handleClosePopover,
  open,
  id,
  onView,
  onEdit,
  onReceive,
  getPaymentStatusColor,
  getDeliveryStatusColor,
  openProducts,
  setOpenProducts,
  onCancel,
}: ISupplierOrderTableCardViewProps) => {
  return (
    <Box
      width="100%"
      bgcolor="background.paper"
      sx={{
        borderRadius: 1,
        boxShadow: 2,
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <CardContent sx={{ flex: 1 }}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="flex-start"
          mb={{ xs: 1, md: 2 }}
          flexDirection={{ xs: 'column', sm: 'row' }}
        >
          <Typography variant="h5" fontWeight={700} color="primary">
            Pedido <span style={{ textTransform: 'uppercase' }}>#{item.sequencialCode}</span>
          </Typography>
          <Box display="flex" gap={1}>
            <Chip
              label={mapPaymentStatusToPtBr(item.paymentStatus)}
              color={
                getPaymentStatusColor(item.paymentStatus) as
                  | 'warning'
                  | 'success'
                  | 'info'
                  | 'secondary'
                  | 'error'
                  | 'default'
              }
              size="small"
              variant="filled"
            />
            <Chip
              label={mapDeliveryStatusToPtBr(item.deliveryStatus)}
              color={
                getDeliveryStatusColor(item.deliveryStatus) as
                  | 'warning'
                  | 'primary'
                  | 'success'
                  | 'info'
                  | 'error'
                  | 'default'
              }
              size="small"
              variant="outlined"
            />
          </Box>
        </Box>

        <Box display="flex" flexDirection="column">
          <Typography variant="body2">
            <strong>Fornecedor:</strong> {item.supplier.name}
          </Typography>

          {item.description && (
            <Typography variant="body2">
              <strong>Descrição:</strong> {item.description}
            </Typography>
          )}

          <Typography variant="body2">
            <strong>Data do Pedido:</strong> {new Date(item.orderDate).toLocaleDateString('pt-BR')}
          </Typography>

          {item.expectedDeliveryDate && (
            <Typography variant="body2">
              <strong>Entrega Esperada:</strong>{' '}
              {new Date(item.expectedDeliveryDate).toLocaleDateString('pt-BR')}
            </Typography>
          )}

          {item.totalAmount && (
            <Typography variant="body2" fontWeight={600}>
              <strong>Total do Pedido:</strong> {formatCurrency(item.totalAmount)}
            </Typography>
          )}
        </Box>

        {item.products && item.products.length > 0 && (
          <Box mt={1}>
            <Box
              display="flex"
              alignItems="center"
              onClick={() => setOpenProducts(!openProducts)}
              sx={{ cursor: 'pointer', userSelect: 'none' }}
            >
              <Typography variant="body2" color="primary" fontWeight={600}>
                Produtos ({item.products.length})
              </Typography>
              <ExpandMoreIcon
                sx={{
                  transform: openProducts ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.2s',
                  ml: 0.5,
                  color: 'primary.main',
                }}
              />
            </Box>
            <Collapse in={openProducts}>
              <Box mt={0.5}>
                {item.products.map((product, index) => (
                  <Box
                    key={`${product.product.id}-${index}`}
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    mb={0.5}
                  >
                    <Typography variant="body2" color="primary" fontSize="0.875rem">
                      {product.product.name} ({product.product.code}) - Qtd: {product.quantity}
                    </Typography>
                    <Typography variant="body2" fontSize="0.875rem" color="primary">
                      {formatCurrency(product.unitPrice * product.quantity)}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Collapse>
          </Box>
        )}
      </CardContent>

      <CardActions>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleOpenPopover}
          edge="start"
        >
          <MoreVertIcon />
        </IconButton>
      </CardActions>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClosePopover}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <List
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          <ListItemButton onClick={() => onView(item.id)} disabled>
            <ListItemIcon>
              <VisibilityIcon color="primary" />
            </ListItemIcon>
            <ListItemText
              primary="Visualizar"
              sx={{
                color: 'primary.main',
              }}
            />
          </ListItemButton>

          <ListItemButton onClick={() => onEdit(item.id)} disabled>
            <ListItemIcon>
              <EditIcon color="primary" />
            </ListItemIcon>
            <ListItemText
              primary="Editar"
              sx={{
                color: 'primary.main',
              }}
            />
          </ListItemButton>

          <ListItemButton onClick={() => onReceive(item.id)}>
            <ListItemIcon>
              <LocalShippingIcon color="success" />
            </ListItemIcon>
            <ListItemText
              primary="Receber"
              sx={{
                color: 'success.main',
              }}
            />
          </ListItemButton>
          <ListItemButton onClick={() => onCancel(item.id)}>
            <ListItemIcon>
              <DeleteIcon color="error" />
            </ListItemIcon>
            <ListItemText
              primary="Cancelar"
              sx={{
                color: 'error.main',
              }}
            />
          </ListItemButton>
        </List>
      </Popover>
    </Box>
  );
};

export default SupplierOrderTableCardView;
