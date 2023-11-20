import {Box} from "@mui/material";
import Image from "next/image";
import alarm from "public/images/alarm-star1.png"
import mirr from "public/images/mirror-0-1.png"
import rat from "public/images/star-rating-blank.png"

export default function LandingDifference() {
  return (
    <Box style={{backgroundColor: "#E4E1CE", display: "flex", justifyContent: "center", flexDirection: "column", padding: "75px 75px"}}>
              <span style={{fontFamily: "Lora",
                fontSize: "50px",
                fontWeight: 700,
                lineHeight: "65px",
                letterSpacing: "0em",
                textAlign: "center",
              }}>Feel the difference, just like 10,000+ </span>
      <span style={{fontFamily: "Lora",
        fontSize: "50px",
        fontWeight: 700,
        lineHeight: "65px",
        letterSpacing: "0em",
        textAlign: "center",
        marginBottom: "65px",
      }}> of our customers</span>
      <Box style={{display: "flex", justifyContent: "space-evenly", }}>
        <div style={{width: "340px",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",}}>
          <Image
            src={mirr}
            alt=""
            style={{
              width: "125px",
              height: "125px",
            }}
          />
        <span style={{color: "#121211",
          textAlign: "center",
          fontFamily: "Lora",
          fontSize: "22px",
          fontStyle: "normal",
          fontWeight: 600,
          lineHeight: "130%", /* 33.8px */
          textTransform: "capitalize"}}>Enhance fitness, achieve vitality, improve performance, boost</span>
        </div>
        <Box style={{display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "340px",}}>
          <Image
            src={alarm}
            alt=""
            style={{
              width: "125px",
              height: "125px",
            }}
          />
          <span style={{color: "#121211",
            textAlign: "center",
            fontFamily: "Lora",
            fontSize: "22px",
            fontStyle: "normal",
            fontWeight: 600,
            lineHeight: "130%", /* 33.8px */
            textTransform: "capitalize"}}>Energy, Improve anxiety, Live free of aches and pains, Improve</span>
        </Box>
        <div style={{display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "340px",}}>
          <Image
            src={rat}
            alt=""
            style={{
              width: "125px",
              height: "125px",
            }}
          />
          <span style={{color: "#121211",
            textAlign: "center",
            fontFamily: "Lora",
            fontSize: "22px",
            fontStyle: "normal",
            fontWeight: 600,
            lineHeight: "130%", /* 33.8px */
            textTransform: "capitalize"}}>Sleep And Immunity.</span>
        </div>

      </Box>
    </Box>
  );
}
