import Button from "@mui/material/Button";
import {SvgIcon} from "@mui/material";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Logo from "../../components/svg-color/Logo.svg";
import {Lora} from '@next/font/google';
import vector1 from "./images/vector1.svg";

const lora = Lora({preload: false});

export default function LandingHeader() {
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

        <Button className={lora.className} sx={{
          width: 257,
          height: 75,
          borderRadius: 32.5,
          backgroundColor: "#1F4934",
          verticalAlign: "inherit",
          fontFamily: "'__Lora_c952f4', '__Lora_Fallback_c952f4'",
          color: "white",
          fontSize: 18,
          fontWeight: 700,
          lineHeight: 20,
          letterSpacing: 0.01,
          textAlign: "left",
          '&:hover': {
            backgroundColor: "#1F4934",
          },

        }}>Take The Quiz</Button>
        {/*<SvgIcon component={vector1} inheritViewBox style={{*/}
        {/*  position: "absolute",*/}
        {/*  height: "100%",*/}
        {/*  width: "14.21%",*/}
        {/*  top: "0%",*/}
        {/*  right: "0%",*/}
        {/*  bottom: "0%",*/}
        {/*  left: "85.79%",*/}
        {/*  maxWidth: "100%",*/}
        {/*  overflow: "hidden",*/}
        {/*  maxHeight: "100%",*/}
        {/*}}>*/}

        {/*</SvgIcon>*/}

      </Container>
    </Box>
  )
    ;
}
