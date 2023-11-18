import * as React from 'react';
import Box from '@mui/material/Box';
import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'

export const metadata = {
  title: 'Nutra Nourish',
  description: 'Nutra Nourish',
};

const queryClient = new QueryClient()

export default function RootLayout({children}) {
  return (
    <html lang="en">
    <body>
    <ThemeRegistry>
      <QueryClientProvider client={queryClient}>
        <Box>
          {children}
        </Box>
      </QueryClientProvider>
    </ThemeRegistry>
    </body>
    </html>
  );
}
