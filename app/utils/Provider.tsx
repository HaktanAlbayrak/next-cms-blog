'use client';

import React from 'react';
import { ThemeProvider } from 'next-themes';

interface IProviderProps {
  children: React.ReactNode;
}

export const Provider = ({ children }: IProviderProps) => {
  return <ThemeProvider attribute='class'>{children}</ThemeProvider>;
};
