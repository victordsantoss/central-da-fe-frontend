import { JSX } from 'react';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

import AssignmentIcon from '@mui/icons-material/Assignment';
import ChurchIcon from '@mui/icons-material/Church';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';

export interface IMenuItem {
  text: string;
  icon?: JSX.Element;
  url: string;
  items?: IMenuItem[];
}

export const menuItems: IMenuItem[] = [
  {
    text: 'Programação',
    icon: <CalendarMonthIcon />,
    url: '',
    items: [
      { text: 'Programação', url: '#' },
      { text: 'Eventos', url: '/event/dashboard' },
      { text: 'Cursos', url: '#' },
      { text: 'Ministérios', url: '#' },
    ],
  },
  {
    text: 'Igreja',
    icon: <ChurchIcon />,
    url: '',
    items: [
      { text: 'Membros', icon: <AttachMoneyIcon />, url: '#' },
      { text: 'Congregações', icon: <AssignmentIcon />, url: '#' },
      { text: 'Cargos', icon: <AttachMoneyIcon />, url: '#' },
    ],
  },
  {
    text: 'Configurações',
    icon: <SettingsIcon />,
    url: '',
    items: [{ text: 'Meu Perfil', icon: <PersonIcon />, url: '#' }],
  },
];
