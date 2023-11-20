'use client'

import Box from "@mui/material/Box";
import {useTheme} from '@mui/material/styles';
import Container from "@mui/material/Container";
import Image from 'next/image';

export default function Header() {
  const theme = useTheme()
  return (
    <Box
      component="header"
      sx={{
        backgroundColor: "#FAF5EF",
        padding: 1.7,
      }}
    >
      <Container maxWidth="lg">
        <Image src="logo.svg" alt="Logo" width={321} height={64} priority={true} style={{display: "block"}}/>
      </Container>
    </Box>
  );
}
