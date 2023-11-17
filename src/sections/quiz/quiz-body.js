import Button from "@mui/material/Button";
import {SvgIcon} from "@mui/material";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Logo from "../../components/svg-color/Logo.svg";
import {Lora} from '@next/font/google';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';

const lora = Lora({preload: false});

function VariantButton() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.quiz.button.backgroundColor,
        padding: "1.5em",
        borderRadius: "0.3em",
        margin: "0.3em",
        textAlign: "center",
      }}
    >Variant 1</Box>
  )
}

export default function QuizBody() {
  const theme = useTheme();
  return (
    <Box
      component="main"
      sx={{
        backgroundColor: theme.palette.quiz.backgroundColor,
        padding: '1.5em',
        alignItems: 'center',
      }}
    >
      <Container maxWidth="lg" sx={{
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        alignItems: "center",
        backgroundColor: theme.palette.quiz.container.backgroundColor,
        borderRadius: "1em",
        border: "solid " + theme.palette.quiz.container.borderColor + " 0.2em",
        padding: "1.3em 1.6em 2.5em",
        alignItems: "stretch",
      }}>
        <Box
          sx={{
            alignItems: 'center',
            fontWeight: "bold",
            padding: "2em",
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
