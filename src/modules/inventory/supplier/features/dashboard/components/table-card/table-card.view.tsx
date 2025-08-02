import { SupplierModel } from '@/common/models/supplier.model';
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
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

interface ISupplierTableCardViewProps {
  item: SupplierModel;
  anchorEl: HTMLButtonElement | null;
  handleOpenPopover: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleClosePopover: () => void;
  open: boolean;
  id: string | undefined;
  onView: (id: string) => void;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

const SupplierTableCardView = ({
  item,
  anchorEl,
  handleOpenPopover,
  handleClosePopover,
  open,
  id,
  onView,
  onEdit,
  onDelete,
}: ISupplierTableCardViewProps) => {
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
      <CardContent>
        <Typography variant="h6" fontWeight={700} color="primary">
          {item.name}
        </Typography>
        <Typography variant="body2">{item.email}</Typography>
        <Typography variant="body2">{item.phone}</Typography>
        <Typography variant="body2">{item.address}</Typography>
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
          <ListItemButton onClick={() => onDelete(item.id)} disabled>
            <ListItemIcon>
              <DeleteIcon color="error" />
            </ListItemIcon>
            <ListItemText
              primary="Excluir"
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

export default SupplierTableCardView;
