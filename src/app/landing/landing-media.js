import Image from "next/image";

import peak from "public/images/peak.png"

import istraits from "public/images/istraits.png"

import cnbc from "public/images/cnbc.png"

import tatler from "public/images/tatler.png"
import right from "public/images/right.png"
import left from "public/images/left.png"
import {Box} from "@mui/material";

export default function LandingMedia() {
  return (
    <Box
      style={{backgroundColor: "#FAF5EF", padding: "100px 100px",}}>
      <Box style={{display: "flex",
        justifyContent: "center",}}>
        <span style={{fontFamily: "Lora",
          fontSize: "45px",
          fontWeight: 700,
          lineHeight: "55px",
          letterSpacing: "0px",
          textAlign: "center",
          marginBottom: "40px",
        }}>Media</span>
      </Box>
      <Box style={{display: "flex",
        justifyContent: "center",}}>
        <Box>
          <Image
            src={left}
            alt=""
            style={{
              width: "35px",
              height: "35px",
              marginBottom: "45px",
              marginRight: "15px",
            }}
          />
          <Image
          src={peak}
          alt=""
          style={{
            width: "250px",
            height: "125px",
          }}
        />
        </Box>
        <Box>
          <Image
            src={istraits}
            alt=""
            style={{
              width: "250px",
              height: "125px",
            }}
          />
        </Box>
        <Box>
          <Image
            src={cnbc}
            alt=""
            style={{
              width: "250px",
              height: "130px",
            }}
          />
        </Box>
        <Box>
          <Image
            src={tatler}
            alt=""
            style={{
              width: "250px",
              height: "125px",
            }}
          />
          <Image
            src={right}
            alt=""
            style={{
              width: "35px",
              height: "35px",
              marginBottom: "45px",
              marginLeft: "15px",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}
