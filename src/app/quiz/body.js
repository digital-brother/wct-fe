'use client'

import Box from "@mui/material/Box";
import {useTheme} from '@mui/material/styles';
import Container from "@mui/material/Container";
import Grid from '@mui/material/Grid';
import {Typography} from "@mui/material";

function VariantButton() {
  const theme = useTheme()
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.quiz.button.backgroundColor,
        p: 3,
        borderRadius: 0.6,
        textAlign: "center",
      }}
    >Variant 1</Box>
  )
}

export default function Body() {
  const theme = useTheme()
  return (
    <Box
      component="main"
      sx={{
        backgroundColor: theme.palette.quiz.backgroundColor,
        p: 3,
      }}
    >
      <Container maxWidth="lg" sx={{
        backgroundColor: theme.palette.quiz.container.backgroundColor,
        borderRadius: 2,
        border: `solid ${theme.palette.quiz.container.borderColor} 0.2em`,
        pt: 2.6,
        px: 3.2,
        pb: 5,
      }}>
        <Typography variant="h4" sx={{
          fontWeight: "bold",
          p: 4,
          textAlign: "center",
        }}
        >QuestionText
        </Typography>
        <Box component="form">
          <Grid container columnSpacing={4} rowSpacing={1.2}>
            {[...Array(8)].map(item => (
              <Grid item xs={6}>
                <VariantButton/>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
