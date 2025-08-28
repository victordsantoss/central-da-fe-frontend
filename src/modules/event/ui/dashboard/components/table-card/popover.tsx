import { Popover, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { EventModel } from '@/common/models/event.model';

interface IEventTableCardPopoverProps {
  item: EventModel;
  open: boolean;
  anchorEl: HTMLElement | null;
  handleClosePopover: () => void;
  onView: (id: string) => void;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

export const EventTableCardPopover = ({
  item,
  open,
  anchorEl,
  handleClosePopover,
  onView,
  onEdit,
  onDelete,
}: IEventTableCardPopoverProps) => {
  return (
    <Popover
      id={item.id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClosePopover}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
    >
      <List
        sx={{
          width: '100%',
          maxWidth: 360,
          bgcolor: 'background.paper',
          borderRadius: 1,
          boxShadow: 3,
        }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <ListItemButton
          onClick={() => onView(item.id)}
          disabled
          sx={{
            '&:hover': {
              backgroundColor: 'action.hover',
            },
          }}
        >
          <ListItemIcon>
            <VisibilityIcon />
          </ListItemIcon>
          <ListItemText
            primary="Visualizar"
            sx={{
              color: 'primary.main',
            }}
          />
        </ListItemButton>
        <ListItemButton
          onClick={() => onEdit(item.id)}
          disabled
          sx={{
            '&:hover': {
              backgroundColor: 'action.hover',
            },
          }}
        >
          <ListItemIcon>
            <EditIcon />
          </ListItemIcon>
          <ListItemText
            primary="Editar"
            sx={{
              color: 'primary.main',
            }}
          />
        </ListItemButton>
        <ListItemButton
          onClick={() => onDelete(item.id)}
          disabled
          sx={{
            '&:hover': {
              backgroundColor: 'error.light',
            },
          }}
        >
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
  );
};
