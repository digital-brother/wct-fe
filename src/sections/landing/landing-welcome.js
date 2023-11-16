import Image from "next/image";
import gupta from "src/sections/landing/images/gupta.png"
import people from "src/sections/landing/images/people.png"
import iphone from "src/sections/landing/images/iPhone.png"
import pils from "src/sections/landing/images/pils.png"
import iphone1 from "src/sections/landing/images/iphone1.png"
import {Box} from "@mui/material";

export default function LandingWelcome() {
  return (
    <Box style={{background: "#FFF8EF", padding: "100px"}}>
      <Box style={{display: "flex", justifyContent: "center"}}>
        <span style={{fontFamily: "Lora",
          fontSize: "45px",
          fontWeight: 700,
          lineHeight: "65px",
          letterSpacing: "0px",
          textAlign: "center",
          width: "920px",
        }}>Welcome to a Whole New World of Personalised Health & Wellness</span>
      </Box>
      <Box>
        <Box style={{display: "flex", justifyContent: "space-around", backgroundColor: "#CDD1E3", height: "450px", marginBottom: "50px"}}>
          <Box style={{display: "flex", flexDirection: "column", padding: "10px", backgroundColor: "#C5CADE", width: "60%", alignItems: "center"}}>
            <Image
              src={gupta}
              alt=""
              style={{
                width: "350px",
                height: "350px",
                borderRadius: "100%",
                objectFit: "cover",
              }}
            />
            <span style={{fontFamily: "Lora",
              fontSize: "25px",
              fontWeight: 700,
              lineHeight: "45px",
              letterSpacing: "0px",
              textAlign: "center",
            marginTop: "5px"}}>Dr Menka Gupta</span>
            <span style={{fontFamily: "Lora",
              fontSize: "25px",
              fontWeight: 500,
              lineHeight: "45px",
              letterSpacing: "0px",
              textAlign: "center"}}>MD, IFMCP</span>
          </Box>
          <Box style={{display: "flex", flexDirection: "column", padding: "80px 70px 0px 60px"}}>
            <span style={{fontFamily: "Lora",
              fontSize: "25px",
              fontWeight: 500,
              lineHeight: "40px",
              letterSpacing: "0px"}}>0 1</span>
            <span style={{fontFamily: "Lora",
              fontSize: "25px",
              fontWeight: 700,
              lineHeight: "40px",
              letterSpacing: "0px",
            marginBottom: "5px"}}>Designed by leading Functional Medicine Experts for your unique needs</span>
            <span style={{fontFamily: "Lora",
              fontSize: "20px",
              fontWeight: 500,
              lineHeight: "25px",
              letterSpacing: "0px"}}>You are unique. Our experts consider your goals, lifestyle and diet to formulate your personalised plan</span>
          </Box>
        </Box>
      </Box>
      <Box>
        <Box style={{display: "flex", justifyContent: "space-around", backgroundColor: "#EFCEA3", marginBottom: "50px"}}>
          <Box style={{display: "flex", flexDirection: "column", padding: "110px 70px 0px 60px"}}>
            <span style={{fontFamily: "Lora",
              fontSize: "25px",
              fontWeight: 500,
              lineHeight: "40px",
              letterSpacing: "0px"}}>0 2</span>
            <span style={{fontFamily: "Lora",
              fontSize: "25px",
              fontWeight: 700,
              lineHeight: "40px",
              letterSpacing: "0px",
              marginBottom: "5px"}}>Backed by science to help you reach your health & wellness goals</span>
            <span style={{fontFamily: "Lora",
              fontSize: "20px",
              fontWeight: 500,
              lineHeight: "25px",
              letterSpacing: "0px"}}>Our supplements are research driven and evidence based synergistic formulas to maximise absorption and bioavailability.</span>
          </Box>
          <Box style={{display: "flex", flexDirection: "column", padding: "50px", backgroundColor: "#F6DAB4", width: "60%", alignItems: "center"}}>
            <Image
              src={people}
              alt=""
              style={{
                width: "350px",
                height: "350px",
                borderRadius: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
        </Box>
      </Box>
      <Box>
        <Box style={{display: "flex", justifyContent: "space-around", backgroundColor: "#F1E4DB", marginBottom: "50px"}}>

          <Box style={{display: "flex", flexDirection: "column", padding: "50px", backgroundColor: "#EADBD1", width: "100%", alignItems: "center"}}>
            <Image
              src={pils}
              alt=""
              style={{
                width: "350px",
                height: "350px",
                borderRadius: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
          <Box style={{display: "flex", flexDirection: "column", padding: "110px 70px 0px 60px"}}>
            <span style={{fontFamily: "Lora",
              fontSize: "25px",
              fontWeight: 500,
              lineHeight: "40px",
              letterSpacing: "0px"}}>0 3</span>
            <span style={{fontFamily: "Lora",
              fontSize: "25px",
              fontWeight: 700,
              lineHeight: "40px",
              letterSpacing: "0px",
              marginBottom: "5px"}}>Quality</span>
            <span style={{fontFamily: "Lora",
              fontSize: "20px",
              fontWeight: 500,
              lineHeight: "25px",
              letterSpacing: "0px"}}>Our high quality vitamins and supplements are Manufactured in the USA & compliant with FDA GoodManufacturing Practices (GMP). They are made with purest, superior raw materials, free from  heavy metals, pesticides and microbiological organisms. 100% gluten free and free of soy protein</span>
          </Box>
        </Box>
      </Box>
      <Box>
        <Box style={{display: "flex", justifyContent: "space-around", backgroundColor: "#CDD1E3", marginBottom: "50px"}}>
          <Box style={{display: "flex", flexDirection: "column", padding: "110px 70px 0px 60px"}}>
            <span style={{fontFamily: "Lora",
              fontSize: "25px",
              fontWeight: 500,
              lineHeight: "40px",
              letterSpacing: "0px"}}>0 4</span>
            <span style={{fontFamily: "Lora",
              fontSize: "25px",
              fontWeight: 700,
              lineHeight: "40px",
              letterSpacing: "0px",
              marginBottom: "5px"}}>App Support</span>
            <span style={{fontFamily: "Lora",
              fontSize: "20px",
              fontWeight: 500,
              lineHeight: "25px",
              letterSpacing: "0px"}}>Maximise and monitor your outcomes. Build healthier habits and never forget your daily dose</span>
          </Box>
          <Box style={{display: "flex", flexDirection: "column", backgroundColor: "#C5CADE", width: "60%", alignItems: "center"}}>
            <div style={{
              borderRadius: "50%",
              overflow: "hidden",
              position: "relative",
              backgroundColor: "#E3E3E3",
              width: "360px",
              height: "360px",
              marginTop: "80px"}}>

            </div>
            <Image
              src={iphone1}
              alt=""
              style={{
                width: "auto",
                height: "410px",
                // borderRadius: "100%",
                objectFit: "cover",
                position: "absolute",
                margin: "15px",
              }}
            />

          </Box>
        </Box>
      </Box>
    </Box>
  )
}
