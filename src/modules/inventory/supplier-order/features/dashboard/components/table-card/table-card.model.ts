import {
  DELIVERY_STATUS_COLORS,
  PAYMENT_STATUS_COLORS,
} from '@/modules/inventory/supplier-order/types/status-color.types';
import { useState } from 'react';
import {
  SupplierOrderDeliveryStatus,
  SupplierOrderPaymentStatus,
} from '@/common/enums/order-status.enum';

export const useSupplierOrderTableCardModel = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [openProducts, setOpenProducts] = useState(false);

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleOpenPopover = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClosePopover = () => {
    setAnchorEl(null);
  };

  const onView = (id: string) => {
    console.log('View order:', id);
  };

  const onEdit = (id: string) => {
    console.log('Edit order:', id);
  };

  const getPaymentStatusColor = (status: string): string => {
    return PAYMENT_STATUS_COLORS[status as SupplierOrderPaymentStatus] || 'default';
  };

  const getDeliveryStatusColor = (status: string): string => {
    return DELIVERY_STATUS_COLORS[status as SupplierOrderDeliveryStatus] || 'default';
  };

  return {
    anchorEl,
    handleOpenPopover,
    handleClosePopover,
    open,
    id,
    onView,
    onEdit,
    getPaymentStatusColor,
    getDeliveryStatusColor,
    openProducts,
    setOpenProducts,
  };
};
