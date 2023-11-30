import Box from "@mui/material/Box";
import Image from "next/image";
import {Button} from "@mui/material";
import monika from "public/images/monika.png"
import veronika from "public/images/veronika.png"
import sat2 from "public/images/sat2.png"
import arrow from "public/images/arrow.png"

import button from "public/images/button.png"

export default function LandingSatisfiedSupplement() {
    return (
        <Box sx={{display: "flex",
            flexDirection: "column", alignItems: "center", padding: "75px 75px"}}>
            <Box sx={{width: "700px",
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                marginBottom: "20px"}}>
                                <span style={{
                                    fontFamily: "Lora",
                                    fontSize: "50px",
                                    fontWeight: 700,
                                    lineHeight: "65px",
                                    letterSpacing: "0em",
                                    textAlign: "center",
                                }}>Satisfied Supplement By Nutra Nourish Clients</span>
            </Box>
            <Box sx={{display: "flex", marginBottom: "50px"}}>
                <Box sx={{display: "flex",
                    flexDirection: "column", background: "#CDD1E3", padding: "40px", width: "600px" }}>
                    <span style={{
                        fontFamily: "Lora",
                        fontSize: "20px",
                        fontWeight: 700,
                        lineHeight: "34px",
                        letterSpacing: "0px",
                        marginBottom: "10px",
                    }}>Dr Menka Gupta completely fixed all my gut issues I went to see her as I was suffering</span>
                    <span style={{
                        fontFamily: "Lora",
                        fontSize: "14px",
                        fontWeight: 400,
                        lineHeight: "18px",
                        letterSpacing: "0px",
                        marginBottom: "20px",
                    }}>Dr Menka Gupta completely fixed all my gut issues.  I went to see her as I was suffering from anxiety and chronic tiredness for a long time. Rather than trying to find a quick fix for my symptoms, she patiently tried to understand the root cause of my health</span>
                    <Box sx={{display: "flex", justifyContent: "center"}}>
                        <Image src={monika} alt="Logo" width={100} height={75} style={{borderRadius: "100%", marginRight: "30px"}}/>
                        <Box sx={{display: "flex",
                            flexDirection: "column",
                            justifyContent: "center"}}>
                            <span style={{
                                fontFamily: "Lora",
                                fontSize: "14px",
                                fontWeight: 400,
                                lineHeight: "18px",
                                letterSpacing: "0px",
                            }}>Monika Marques</span>
                            <Box>
                                <span style={{
                                    fontFamily: "Lora",
                                    fontSize: "11px",
                                    fontWeight: 400,
                                    lineHeight: "11px",
                                    letterSpacing: "0px",
                                }}>Microblading</span>
                                <Image src={arrow} alt="Logo" width={12} height={10}/>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Image src={sat2} alt="Logo" width={100} height={100} style={{marginTop: "100px"}}/>
                <Box sx={{display: "flex",
                    flexDirection: "column", background: "#F6DAB4", padding: "40px", justifyContent: "center", width: "600px"}}>
                    <span style={{
                        fontFamily: "Lora",
                        fontSize: "20px",
                        fontWeight: 700,
                        lineHeight: "34px",
                        letterSpacing: "0px",
                        marginBottom: "10px",
                    }}>Big thanks to both Dr Menka and Dr Dipika for helping me 😊</span>
                    <span style={{
                        fontFamily: "Lora",
                        fontSize: "14px",
                        fontWeight: 400,
                        lineHeight: "18px",
                        letterSpacing: "0px",
                        marginBottom: "20px",
                    }}>I have worked very successfully with Dr Menka in lowering my cholesterol and understanding more about the best foods for me. I appreciate her dept of knowledge from both a medical and functional stance.</span>
                    <Box sx={{display: "flex", justifyContent: "center"}}>
                        <Image src={veronika} alt="Logo" width={100} height={75} style={{borderRadius: "100%", marginRight: "30px"}} />
                        <Box sx={{display: "flex",
                            flexDirection: "column",
                            justifyContent: "center"}}>
                            <span style={{
                                fontFamily: "Lora",
                                fontSize: "14px",
                                fontWeight: 400,
                                lineHeight: "18px",
                                letterSpacing: "0px",
                            }}>Veronica Rosetta</span>
                            <Box>
                                <span style={{
                                    fontFamily: "Lora",
                                    fontSize: "11px",
                                    fontWeight: 400,
                                    lineHeight: "11px",
                                    letterSpacing: "0px",
                                    marginRight: "10px",
                                }}>Ombré</span>
                                <Image src={arrow} alt="Logo" width={10} height={10}/>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Button sx={{
                width: 220,
                height: 55,
                borderRadius: 32.5,
                border: "1px solid #1F4934",
                verticalAlign: "inherit",
                fontFamily: "Lora",
                color: "black",
                fontSize: 18,
                fontWeight: 700,
                lineHeight: 20,
                letterSpacing: 0.01,
                textAlign: "left",

            }}>Take The Quiz</Button>
        </Box>
    );
}