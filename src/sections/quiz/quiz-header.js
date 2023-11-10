import Button from "@mui/material/Button";
import {SvgIcon} from "@mui/material";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Logo from "../../components/svg-color/Logo.svg";
import {Lora} from '@next/font/google';

const lora = Lora({preload: false});

export default function QuizHeader() {
  return (
    <Box
      component="header"
      sx={{
        backgroundColor: '#f9f4ee',
        padding: '24px',
        alignItems: 'center',
        borderBottom: "solid #F0D3D3 1px",
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
