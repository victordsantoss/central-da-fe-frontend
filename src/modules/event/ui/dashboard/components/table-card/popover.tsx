import { Popover, List, ListItemButton, ListItemIcon, ListItemText, alpha } from '@mui/material';
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
          bgcolor: 'text.secondary',
          color: 'text.primary',
          borderRadius: 1,
          boxShadow: 3,
        }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <ListItemButton
          onClick={() => onView(item.id)}
          sx={{
            '&:hover': {
              backgroundColor: theme => alpha(theme.palette.secondary.main, 0.5),
            },
          }}
        >
          <ListItemIcon>
            <VisibilityIcon sx={{ color: 'text.primary' }} />
          </ListItemIcon>
          <ListItemText
            primary="Visualizar"
            sx={{
              color: 'text.primary',
            }}
          />
        </ListItemButton>
        <ListItemButton
          onClick={() => onEdit(item.id)}
          disabled
          sx={{
            '&:hover': {
              backgroundColor: theme => alpha(theme.palette.secondary.main, 0.5),
            },
          }}
        >
          <ListItemIcon>
            <EditIcon sx={{ color: 'text.primary' }} />
          </ListItemIcon>
          <ListItemText
            primary="Editar"
            sx={{
              color: 'text.primary',
            }}
          />
        </ListItemButton>
        <ListItemButton
          onClick={() => onDelete(item.id)}
          disabled
          sx={{
            '&:hover': {
              backgroundColor: theme => alpha(theme.palette.secondary.main, 0.5),
            },
          }}
        >
          <ListItemIcon>
            <DeleteIcon sx={{ color: 'text.primary' }} />
          </ListItemIcon>
          <ListItemText
            primary="Excluir"
            sx={{
              color: 'text.primary',
            }}
          />
        </ListItemButton>
      </List>
    </Popover>
  );
};
