import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardContent from '@mui/material/CardContent';
import Box from "@mui/material/Box";

import {Lora} from '@next/font/google';
import {Fahkwang} from '@next/font/google';
import {SvgIcon} from "@mui/material";
import svg from 'src/components/svg-color/line.svg'
import image1 from 'src/components/image/image1.png'
import image2 from 'src/components/image/image2.png'
import image3 from 'src/components/image/image3.png'
import image4 from 'src/components/image/image4.png'
import image5 from 'src/components/image/image5.png'
import Image from "next/image";

const lora = Lora({preload: false});
const fahkwang = Fahkwang({preload: false, weight: ['200', '300', '400', '500', '600', '700']});

export default function LandingTitle() {
  return (
    <Grid bgcolor="#f9f4ee"
    >
      <Grid>
        <Stack spacing={1}
               textAlign="center"
               p={10}
               alignItems="center"
        >
          <Box sx={{
            width: "100%",
            height: 25,
            top: 175,
            left: 181,
          }}>
            <Typography className={lora.className} sx={{
              fontFamily: "'__Lora_c952f4', '__Lora_Fallback_c952f4'",
              fontWeight: 700,
              lineHeight: "25px",
              letterSpacing: "0em",
              textAlign: "center",
              justifyContent: "start",
              display: "flex",
              marginLeft: "70px",
            }}>
              ⭐⭐⭐⭐⭐ “I feel better than ever”
            </Typography>
          </Box>

          <Box sx={{
            width: 430,
            height: 55,
            top: 208,
            left: 787,
          }}>
            <Box sx={{display: "flex"}}>
              <SvgIcon sx={{marginTop: "7px"}} component={svg}/>
              <Typography className={lora.className} variant="h3" sx={{
                fontFamily: "'__Lora_c952f4', '__Lora_Fallback_c952f4'",
                fontWeight: 700,
                letterSpacing: "0em",

                textAlign: "center",
              }} style={{fontSize: "25px"}}>
                PERSONALIZED VITAMINS.
              </Typography>
            </Box>
          </Box>
          <Box sx={{width: 1160, height: 160}}>
            <Typography className={lora.className} variant="h2" sx={{
              fontFamily: "'__Lora_c952f4', '__Lora_Fallback_c952f4'",
              fontSize: 65,
              fontWeight: 700,
              lineHeight: "80px",
              letterSpacing: 0,
              textAlign: "center",
            }}>
              Get the Nutrients Your Body Needs For Peak Performance
            </Typography>
          </Box>
          <Box sx={{
            width: 790,
            height: 28,
          }}>
            <Typography className={lora.className} sx={{
              fontFamily: "'__Lora_c952f4', '__Lora_Fallback_c952f4'",
              fontSize: 20,
              fontWeight: 700,
              lineHeight: "28px",
              letterSpacing: 0,
              textAlign: "center",
            }}>
              Instant access to expert designed personalised Supplement Plan made just For You
            </Typography>
          </Box>
          <Card sx={{
            width: 1250,
            height: 340,
            bgcolor: "#F1E4DB",
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            marginTop: "50px",
            boxShadow: "0px 4px 50px -5px rgba(156,122,70,0.53)",
            border: "1px solid #FFF",
          }}>
            <CardContent>
              <Typography className={lora.className} sx={{
                fontFamily: "'__Lora_c952f4', '__Lora_Fallback_c952f4'",
                fontSize: "38px",
                fontWeight: 700,
                lineHeight: "38px",
                letterSpacing: 0,
                textAlign: "center",
                height: 42,
              }}>Do you want to elevate your energy, focus, and well-being?</Typography>
              <Stack direction="row" spacing={2} justifyContent="center" mt={2}>
                <Button className={fahkwang.className} sx={{
                  bgcolor: "#1F4934",
                  color: "white",
                  width: 172.74,
                  border: "1.09px solid",

                  height: 88,
                  borderRadius: 20,
                  fontFamily: "'__Fahkwang_1a8c96', '__Fahkwang_Fallback_1a8c96'",
                  fontSize: "33px",
                  fontWeight: 500,
                  lineHeight: "42px",
                  letterSpacing: "0em",
                  textAlign: "center",
                  '&:hover': {
                    backgroundColor: "#1F4934",
                  },
                  borderColor: "#B0835F",
                }}
                        variant="contained">Yes</Button>
                <Button className={fahkwang.className} sx={{
                  bgcolor: "white", color: "black", width: 342.22,
                  height: "63px",
                  borderRadius: 54.32,
                  border: "1.09px solid",
                  gap: "10.86px",
                  fontFamily: "'__Fahkwang_1a8c96', '__Fahkwang_Fallback_1a8c96'",
                  fontSize: "32.59px",
                  fontWeight: 500,
                  lineHeight: "42.37px",
                  letterSpacing: "0em",
                  textAlign: "center",
                  '&:hover': {
                    backgroundColor: "white",
                  },
                  borderColor: "#B0835F",
                  marginTop: "10px",
                }}
                        variant="contained">Explore More</Button>
              </Stack>
            </CardContent>
          </Card>
          <Box sx={{
            width: 1418,
            height: 179.27
          }}>
            <Image alt="asd" src={image1}/>
            <Image alt="asd" src={image5}/>
            <Image alt="asd" src={image2}/>
            <Image alt="asd" src={image4}/>
            <Image alt="asd" src={image3}/>
          </Box>
        </Stack>
      </Grid>
    </Grid>
  )
}
