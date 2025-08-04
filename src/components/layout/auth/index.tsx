'use client';

import { Box } from '@mui/material';
import React from 'react';
import { authLayoutStyle } from './styles';
import FooterViewModel from './components/footer';

interface AuthLayoutProps {
  readonly children: React.ReactNode;
}

export default function AuthLayoutComponent({ children }: AuthLayoutProps) {
  return (
    <Box component="div" sx={authLayoutStyle.container}>
      <Box component="main" sx={authLayoutStyle.main}>
        {children}
      </Box>
      <FooterViewModel />
    </Box>
  );
}
