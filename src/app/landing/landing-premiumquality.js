import Image from "next/image";
import q1 from "public/images/q1.png"
import q2 from "public/images/q2.png"
import q3 from "public/images/q3.png"
import q4 from "public/images/q4.png"
import q5 from "public/images/q5.png"
import Box from "@mui/material/Box";

export default function LandingPremiumQuality() {
    return (
        <Box style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#FFF8EF",
            padding: "75px 75px"
        }}>
            <Box style={{display: "flex", justifyContent: "center", marginBottom: "50px"}}>
        <span style={{
            fontFamily: "Lora",
            fontSize: "50px",
            fontWeight: 700,
            lineHeight: "20px",
            letterSpacing: "0em",
            textAlign: "center",
        }}>Premium Quality</span>
            </Box>
            <Box style={{display: "flex", justifyContent: "space-between"}}>
                <Box sx={{width: "210px",
                    height: "210px",
                    background: "white",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    <Image src={q1} alt="Logo" width={100} height={100}/>
                    <span style={{fontFamily: "Lora",
                        fontSize: "18px",
                        fontWeight: 700,
                        lineHeight: "65px",
                        letterSpacing: "0px",
                        textAlign: "center",
                        color: "#000"
                    }}>Quality Ingredients</span>
                </Box>
                <Box sx={{width: "230px",
                    height: "210px",
                    background: "white",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    <Image src={q2} alt="Logo" width={100} height={100}/>
                    <span style={{fontFamily: "Lora",
                        fontSize: "18px",
                        fontWeight: 700,
                        lineHeight: "65px",
                        letterSpacing: "0px",
                        textAlign: "center",
                        color: "#000"
                    }}>No nasties</span>
                </Box>
                <Box sx={{width: "230px",
                    height: "210px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#1F4934",

                }}>
                    <Image src={q3} alt="Logo" width={85} height={85}/>
                    <span style={{fontFamily: "Lora",
                        fontSize: "18px",
                        fontWeight: 700,
                        lineHeight: "65px",
                        letterSpacing: "0px",
                        textAlign: "center",
                        color: "#FFF"
                    }}>GMP certified Labs</span>
                </Box>
                <Box sx={{width: "230px",
                    height: "210px",
                    background: "white",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    <Image src={q4} alt="Logo" width={100} height={100}/>
                    <span style={{fontFamily: "Lora",
                        fontSize: "18px",
                        fontWeight: 700,
                        lineHeight: "65px",
                        letterSpacing: "0px",
                        textAlign: "center",
                        color: "#000"
                    }}>Non GMO, Gluten Free</span>
                </Box>
                <Box sx={{width: "230px",
                    height: "210px",
                    background: "white",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    <Image src={q5} alt="Logo" width={100} height={100}/>
                    <span style={{fontFamily: "Lora",
                        fontSize: "18px",
                        fontWeight: 700,
                        lineHeight: "65px",
                        letterSpacing: "0px",
                        textAlign: "center",
                        color: "#000"
                    }}>Bioavailable</span>
                </Box>
            </Box>
        </Box>
    );
}