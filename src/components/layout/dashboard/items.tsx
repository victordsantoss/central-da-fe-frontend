import { JSX } from 'react';
import InventoryIcon from '@mui/icons-material/Inventory';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

import AssignmentIcon from '@mui/icons-material/Assignment';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
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
    text: 'Dashboard',
    icon: <AutoGraphIcon />,
    url: '/home',
  },
  {
    text: 'Produtos e Estoque',
    icon: <InventoryIcon />,
    url: '',
    items: [
      { text: 'Fornecedores', url: '/supplier/dashboard' },
      { text: 'Produtos', url: '/product/dashboard' },
      { text: 'Pedidos', url: '/supplier-order/dashboard' },
      { text: 'Estoque', url: '/stock/dashboard' },
    ],
  },
  {
    text: 'Controle de Vendas',
    icon: <AddShoppingCartIcon />,
    url: '',
    items: [
      { text: 'Relatórios', icon: <AssignmentIcon />, url: '/reports' },
      { text: 'Vendas', icon: <AttachMoneyIcon />, url: '/sales' },
    ],
  },
  {
    text: 'Configurações',
    icon: <SettingsIcon />,
    url: '',
    items: [{ text: 'Meu Perfil', icon: <PersonIcon />, url: '/perfil' }],
  },
];
