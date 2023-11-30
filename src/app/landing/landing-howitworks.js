import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import {Lora} from '@next/font/google';

const lora = Lora({preload: false});

export default function LandingHowItWorks() {
    return (
        <Box style={{background: "#FFFF", padding: "75px 150px"}}>
            <Box style={{display: "flex", justifyContent: "center", flexDirection: "column"}}>
                <span style={{fontFamily: "Lora",
                    fontSize: "45px",
                    fontWeight: 700,
                    lineHeight: "65px",
                    letterSpacing: "0px",
                    textAlign: "center",
                    marginBottom: "30px",
                }}>How It Works</span>
                <Box style={{display: "flex", justifyContent: "center", marginBottom: "130px"}}>
                    <Box style={{background: "#1F4934",
                        filter: "drop-shadow(0px 10px 50px rgba(31, 73, 52, 0.25))",
                        width: "120px",
                        height: "120px",
                        borderRadius: "100%",
                        alignItems: "center",
                        display: "flex",
                        justifyContent: "center",
                        marginRight: "30px",
                        marginLeft: "350px",}}>
                        <span style={{fontFamily: "Lora",
                            fontSize: "25px",
                            fontWeight: 700,
                            lineHeight: "20px",
                            letterSpacing: "0px",
                            textAlign: "center",
                            color: "#FFFF"
                        }}>Step 1</span>
                    </Box>
                    <Box style={{display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",}}>
                        <span style={{fontFamily: "Lora",
                            fontSize: "20px",
                            fontWeight: 700,
                            lineHeight: "25px",
                            letterSpacing: "0px",
                        }}>Take the health & Wellness Assessment</span>
                        <span style={{fontFamily: "Lora",
                            fontSize: "15px",
                            fontWeight: 500,
                            lineHeight: "12px",
                            letterSpacing: "0px",
                        }}>Tell us about your health goals, conditions, diet and lifestyle </span>
                    </Box>
                </Box>
                <Box style={{display: "flex", marginBottom: "130px", marginLeft: "35px",}}>
                    <Box style={{display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",}}>
                        <span style={{fontFamily: "Lora",
                            fontSize: "20px",
                            fontWeight: 700,
                            lineHeight: "25px",
                            letterSpacing: "0px",
                            marginBottom: "5px",
                            width: "345px",
                        }}>Get your FREE personalised supplement recommendation</span>
                        <span style={{fontFamily: "Lora",
                            fontSize: "15px",
                            fontWeight: 500,
                            lineHeight: "15px",
                            letterSpacing: "0px",
                            width: "450px",
                        }}>Get Your Unique Plan Designed By Our Leading Functional Medicine Experts</span>
                    </Box>
                    <Box style={{background: "#FFF",
                        filter: "drop-shadow(0px 10px 50px rgba(31, 73, 52, 0.25))",
                        width: "120px",
                        height: "120px",
                        borderRadius: "100%",
                        alignItems: "center",
                        display: "flex",
                        justifyContent: "center",}}>
                        <span style={{fontFamily: "Lora",
                            fontSize: "25px",
                            fontWeight: 700,
                            lineHeight: "20px",
                            letterSpacing: "0px",
                            textAlign: "center",
                            color: "#000"
                        }}>Step 2</span>
                    </Box>
                </Box>
            </Box>
            <Box style={{display: "flex", justifyContent: "center", marginBottom: "130px",}}>
                <Box style={{background: "#FFF",
                    filter: "drop-shadow(0px 10px 50px rgba(31, 73, 52, 0.25))",
                    width: "120px",
                    height: "120px",
                    borderRadius: "100%",
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "center",
                    marginRight: "30px",
                    marginLeft: "350px",}}>
                        <span style={{fontFamily: "Lora",
                            fontSize: "25px",
                            fontWeight: 700,
                            lineHeight: "20px",
                            letterSpacing: "0px",
                            textAlign: "center",
                            color: "#000"
                        }}>Step 3</span>
                </Box>
                <Box style={{display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                alignItems: "center"}}>
                        <span style={{fontFamily: "Lora",
                            fontSize: "20px",
                            fontWeight: 700,
                            lineHeight: "25px",
                            letterSpacing: "0px",
                        }}>Start your journey towards optimal health</span>
                    <span style={{fontFamily: "Lora",
                        fontSize: "15px",
                        fontWeight: 500,
                        lineHeight: "12px",
                        letterSpacing: "0px",
                    }}> Use our app to build healthy habits and maximise your results</span>
                </Box>

            </Box>
            <Box style={{border: "1px solid #A2AE85"}}/>

            <Box style={{display: "flex",
                justifyContent: "center",
                marginTop: "30px",}}>
                <Button className={lora.className} sx={{
                width: 220,
                height: 55,
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

            }}>Take The Quiz</Button></Box>

        </Box>
    )
}