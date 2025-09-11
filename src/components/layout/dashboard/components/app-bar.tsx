import { styled } from '@mui/material';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';

interface IAppBarProps extends MuiAppBarProps {
  open?: boolean;
  drawerWidth: number;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: prop => prop !== 'open' && prop !== 'drawerWidth',
})<IAppBarProps>(({ theme, open, drawerWidth }) => ({
  backgroundColor: theme.palette.primary.main,
  marginTop: theme.spacing(1),
  marginLeft: theme.spacing(1),
  marginRight: theme.spacing(1),
  color: theme.palette.primary.contrastText,
  width: `calc(100% - ${theme.spacing(11)})`,
  [theme.breakpoints.down('md')]: {
    width: `calc(100% - ${theme.spacing(2)})`,
  },
  borderRadius: theme.spacing(1),
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth + theme.spacing(2),
    width: `calc(100% - (${drawerWidth}px + ${theme.spacing(3)}))`,
    [theme.breakpoints.down('md')]: {
      width: `calc(100% - (${drawerWidth}px + ${theme.spacing(3)}))`,
    },
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export default AppBar;
