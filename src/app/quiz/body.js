'use client'

import Box from "@mui/material/Box";
import {useTheme} from '@mui/material/styles';
import Container from "@mui/material/Container";
import Grid from '@mui/material/Grid';

function VariantButton() {
  const theme = useTheme()
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.quiz.button.backgroundColor,
        padding: 3,
        borderRadius: 0.6,
        margin: 0.6,
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
        padding: 3,
        alignItems: 'center',
      }}
    >
      <Container maxWidth="lg" sx={{
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        alignItems: "center",
        backgroundColor: theme.palette.quiz.container.backgroundColor,
        borderRadius: 2,
        border: "solid " + theme.palette.quiz.container.borderColor + " 0.2em",
        paddingTop: 2.6,
        paddingLeft: 3.2,
        paddingRight: 3.2,
        paddingBottom: 5,
        alignItems: "stretch",
      }}>
        <Box
          sx={{
            alignItems: 'center',
            fontWeight: "bold",
            padding: 4,
            textAlign: "center",
          }}
        >QuestionText</Box>
        <Box component="form">
          <Grid container spacing={2} >
            <Grid container item xs={6} direction="column" >
              <VariantButton />
              <VariantButton />
              <VariantButton />
              <VariantButton />
            </Grid>
            <Grid container item xs={6} direction="column" >
              <VariantButton />
              <VariantButton />
              <VariantButton />
              <VariantButton />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
