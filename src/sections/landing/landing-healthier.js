import Image from "next/image";
import gupta from "./images/gupta.png";
import {Box} from "@mui/material";

export default function LandingHealthier() {
  return (
    <Box style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center", backgroundColor: "#F1E4DB",
      padding: "100px 100px"
    }}>
      <Box style={{marginBottom: "50px"}}>
        <span style={{
          fontFamily: "Lora",
          fontSize: "50px",
          fontWeight: 700,
          lineHeight: "65px",
          letterSpacing: "0em",
          textAlign: "center",
        }}>A Healthier, Happier You</span>
      </Box>
      <Box style={{display: "flex"}}>
        <Box style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginRight: "50px",
        }}>
          <Box>
            <span style={{
              fontFamily: "Lora",
              fontSize: "30px",
              fontWeight: 700,
              lineHeight: "42px",
              letterSpacing: "0px",
            }}>
            98%
            </span>
            <span style={{
              fontFamily: "Lora",
              fontSize: "20px",
              fontWeight: 700,
              lineHeight: "34px",
              letterSpacing: "0px",
            }}>
            OF CUSTOMERS
          </span>
          </Box>

          <span style={{
            fontFamily: "Lora",
            fontSize: "20px",
            fontWeight: 700,
            lineHeight: "34px",
            letterSpacing: "0px",
          }}>
            Feel Improvement In Their Health 
          </span>
        </Box>
        <Box style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginRight: "50px",
        }}>
          <Box>
                        <span style={{
                          fontFamily: "Lora",
                          fontSize: "30px",
                          fontWeight: 700,
                          lineHeight: "42px",
                          letterSpacing: "0px",
                        }}>
            99%
            </span>
            <span style={{
              fontFamily: "Lora",
              fontSize: "20px",
              fontWeight: 700,
              lineHeight: "34px",
              letterSpacing: "0px",
            }}>
            OF CUSTOMERS
          </span>
          </Box>
          <Box style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}>
                        <span style={{
                          fontFamily: "Lora",
                          fontSize: "20px",
                          fontWeight: 700,
                          lineHeight: "34px",
                          letterSpacing: "0px",
                        }}>
            Appreciate The Highest Quality Ingredients
          </span>
          </Box>
        </Box>
        <Box style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}>
          <Box>
              <span style={{
                fontFamily: "Lora",
                fontSize: "30px",
                fontWeight: 700,
                lineHeight: "42px",
                letterSpacing: "0px",
              }}>
            95%
            </span>
            <span style={{
              fontFamily: "Lora",
              fontSize: "20px",
              fontWeight: 700,
              lineHeight: "34px",
              letterSpacing: "0px",
            }}>
            OF CUSTOMERS
          </span>
          </Box>
          <Box style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}>
                      <span style={{
                        fontFamily: "Lora",
                        fontSize: "20px",
                        fontWeight: 700,
                        lineHeight: "34px",
                        letterSpacing: "0px",
                      }}>
            Use Our App To Build Healthier Habits
          </span>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
