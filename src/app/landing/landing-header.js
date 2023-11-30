import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Logo from "public/images/logo.svg";
import Image from "next/image";

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
        <Image src={Logo} alt="Logo" width={321} height={64} style={{display: "block"}}/>

        <Button sx={{
          width: 220,
          height: 55,
          borderRadius: 32.5,
          backgroundColor: "#1F4934",
          verticalAlign: "inherit",
          fontFamily: "Lora",
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