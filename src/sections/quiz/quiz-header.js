import {SvgIcon} from "@mui/material";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Logo from "../../components/svg-color/Logo.svg";
import {Lora} from '@next/font/google';
import { useTheme } from '@mui/material/styles';


export default function QuizHeader() {
  const theme = useTheme()
  return (
    <Box
      component="header"
      sx={{
        backgroundColor: theme.palette.quiz.backgroundColor,
        padding: 3,
      }}
    >
      <Container maxWidth="lg" sx={{
        display: "flex",
      }}>
        <SvgIcon component={Logo} inheritViewBox sx={{
          width: 321,
          height: 64,
        }}>

        </SvgIcon>
      </Container>
    </Box>
  );
}
