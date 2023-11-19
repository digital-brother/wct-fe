import * as React from 'react';
import Box from '@mui/material/Box';
import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry';

export const metadata = {
  title: 'Nutra Nourish',
  description: 'Nutra Nourish',
};


export default function RootLayout({children}) {
  return (
    <html lang="en">
    <body>
    <ThemeRegistry>
        <Box>
          {children}
        </Box>
    </ThemeRegistry>
    </body>
    </html>
  );
}
