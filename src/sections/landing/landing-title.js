import EnergyFocusWellbeingForm from "./components/energy-focus-wellbeing-form";
import Image from "next/image";
import {Box, SvgIcon} from "@mui/material";
import mirror from "./images/mirror.svg";
import image1 from "./images/image1.svg"
import image2 from "./images/image2.svg"
import image3 from "./images/image3.svg"
import image4 from "./images/image4.svg"
import image5 from "./images/image5.svg"


export default function LandingTitle() {
  return (
    <>
      <Box>
        <Box style={{
          paddingLeft: "143px", paddingTop: "30px", fontFamily: "Lora",
          fontSize: "18px",
          fontWeight: 700,
          lineHeight: "25px",
          letterSpacing: "0em",
          backgroundColor: "#f9f4ee",
        }}>
          <span>⭐⭐⭐⭐⭐ “I feel better than ever”</span>
        </Box>
        <Box style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#f9f4ee",
        }}>
                  <span style={{
                    color: "#08202F",
                    textAlign: "center",
                    fontFamily: "Lora",
                    fontSize: "25px",
                    fontStyle: "normal",
                    fontWeight: 700,
                    lineHeight: "75px", /* 300% */
                    textTransform: "uppercase"
                  }}>Personalised Vitamins </span>
          <span style={{
            color: "#08202F",
            textAlign: "center",
            fontFamily: "Lora",
            fontSize: "50px",
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "65px"
          }}>Get the Nutrients You Need for Peak</span>
          <span style={{
            color: "#08202F",
            textAlign: "center",
            fontFamily: "Lora",
            fontSize: "50px",
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "65px"
          }}>Performance</span>
          <span style={{
            color: "#08202F",
            textAlign: "center",
            fontFamily: "Lora",
            fontSize: "17px",
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "30px", marginBottom: "20px",
          }}>Instant access to expert designed personalised Supplement Plan made just For You</span>
          <Box style={{
            width: "900px",
            height: "250px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "25px",
            border: "2px dashed #FFF",
            background: "#F1E4DB",
            boxShadow: "0px 20px 50px 0px rgba(209, 178, 114, 0.25)",
            marginBottom: 85,
          }}>
            <Box style={{marginBottom: "15px",}}>
            <span style={{
              color: "#08202F",
              textAlign: "center",
              fontFamily: "Lora",
              fontSize: "30px",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "65px"
            }}>Do you want to elevate your energy, focus, and well-being?</span>
            </Box>
            <Box>
              <button style={{
                borderRadius: "54.321px",
                border: "1.086px solid #B0835F",
                background: "#1F4934",
                display: "inline-flex",
                height: "60px",
                justifyContent: "center",
                alignItems: "center",
                gap: "10.864px",
                marginRight: "20px",
                padding: "21.728px 32.593px",
              }}><span style={{
                color: "#FFF",
                textAlign: "center",
                fontFamily: "Fahkwang",
                fontSize: "25px",
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "normal",
              }}>YES</span>
              </button>
              <button style={{
                width: "250px",
                height: "60px",
                borderRadius: "54.321px",
                border: "1.086px solid #B0835F",
                background: "#FFF",
              }}>
              <span style={{
                color: "#121211",
                textAlign: "center",
                fontFamily: "Fahkwang",
                fontSize: "30px",
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "normal",
              }}>Explore More</span>
              </button>
            </Box>
          </Box>
          <Box>
            <SvgIcon component={image1} inheritViewBox style={{
              width: 200,
              height: 230,
              marginLeft: 100,}}>

            </SvgIcon>
            <SvgIcon component={image2} inheritViewBox style={{
              width: 200,
              height: 235}}>

            </SvgIcon>
            <SvgIcon component={image3} inheritViewBox style={{
              width: 430,
              height: 185,
              marginRight: 30}}>

            </SvgIcon>
            <SvgIcon component={image4} inheritViewBox style={{
              width: 200,
              height: 160}}>

            </SvgIcon>
            <SvgIcon component={image5} inheritViewBox style={{
              width: 200,
              height: 170,
              marginRight: 30}}>

            </SvgIcon>
          </Box>
        </Box>
      </Box>
    </>
  );
}
