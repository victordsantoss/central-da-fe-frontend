'use client';

import DashboardLayoutComponent from '@/components/layout/dashboard';
import { AlertProvider } from '@/contexts/alert.context';
import { AuthProvider } from '@/contexts/auth.context';
import { MenuProvider } from '@/contexts/menu.context';
import { withAuth } from '@/hoc/with-auth.hoc';
import TanstackProvider from '@/providers/tanstack.provider';
import React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import 'dayjs/locale/pt-br';

export default function DashboardLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const WrappedComponent = withAuth(() => <>{children}</>);
  return (
    <AlertProvider>
      <AuthProvider>
        <MenuProvider>
          <TanstackProvider>
            <DashboardLayoutComponent>
              <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt-br">
                <WrappedComponent />
              </LocalizationProvider>
            </DashboardLayoutComponent>
          </TanstackProvider>
        </MenuProvider>
      </AuthProvider>
    </AlertProvider>
  );
}
