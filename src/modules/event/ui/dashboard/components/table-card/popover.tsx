import { Popover, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { EventModel } from '@/common/models/event.model';

interface IEventTableCardPopoverProps {
  item: EventModel;
  open: boolean;
  anchorEl: HTMLElement | null;
  handleClosePopover: () => void;
  onView: (id: string) => void;
}

export const EventTableCardPopover = ({
  item,
  open,
  anchorEl,
  handleClosePopover,
  onView,
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
              backgroundColor: theme => theme.palette.primary.light,
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
      </List>
    </Popover>
  );
};
