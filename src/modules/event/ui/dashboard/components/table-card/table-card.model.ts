import { useState } from 'react';
import { useRouter } from 'next/navigation';

export const useEventTableCardModel = () => {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleOpenPopover = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClosePopover = () => {
    setAnchorEl(null);
  };

  const onView = (id: string) => {
    router.push(`/event/detail/${id}`);
    handleClosePopover();
  };

  const onEdit = (id: string) => {
    console.log(id);
  };

  const onDelete = (id: string) => {
    console.log(id);
  };

  return {
    anchorEl,
    handleOpenPopover,
    handleClosePopover,
    open,
    id,
    onView,
    onEdit,
    onDelete,
  };
};
