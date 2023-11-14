import Button from "@mui/material/Button";
import {SvgIcon} from "@mui/material";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Logo from "../../components/svg-color/Logo.svg";
import {Lora} from '@next/font/google';
import Grid from '@mui/material/Grid';

const lora = Lora({preload: false});

// function VariantButton(text) {
function VariantButton() {
  return (
    <Box
      component="div"
      sx={{
        backgroundColor: '#fbf5ef',
        padding: "25px",
        borderRadius: "5px",
        margin: "5px",
        textAlign: "center",
      }}
    >Variant 1</Box>
  )
}

export default function QuizBody() {
  return (
    <Box
      component="main"
      sx={{
        backgroundColor: '#f5f5f5',
        padding: '24px',
        alignItems: 'center',
      }}
    >
      <Container maxWidth="lg" sx={{
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        alignItems: "center",
        backgroundColor: "#f3e4dc",
        borderRadius: "15px",
        border: "solid #f7eee9 3px",
        padding: "20px 40px 40px",
        alignItems: "stretch",
      }}>
        <Box
          component="div"
          sx={{
            alignItems: 'center',
            fontWeight: "bold",
            padding: "30px",
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
