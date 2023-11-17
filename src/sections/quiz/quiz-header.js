import Button from "@mui/material/Button";
import {SvgIcon} from "@mui/material";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Logo from "../../components/svg-color/Logo.svg";
import {Lora} from '@next/font/google';
import { useTheme } from '@mui/material/styles';


const lora = Lora({preload: false});

export default function QuizHeader() {
  const theme = useTheme()
  return (
    <Box
      component="header"
      sx={{
        backgroundColor: theme.palette.background.quiz,
        padding: '1.7em',
        padding: {3},
        alignItems: 'center',
      }}
    >
      <Container maxWidth="lg" sx={{
        display: "flex",
        justifyContent: "space-between",
      }}>
        <SvgIcon component={Logo} inheritViewBox sx={{
          width: 321,
          height: 64,
          top: 28,
          left: 170,
        }}>

        </SvgIcon>
      </Container>
    </Box>
  );
}
