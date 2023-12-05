import Box from "@mui/material/Box";
import {Button} from "@mui/material";
import Image from "next/image";
import pils from "public/images/pils2.png"
import pilsbg from "public/images/pills.png"

export default function LandingPersonalizedPlans() {
    return (
        <Box sx={{backgroundImage: `url(${pilsbg.src})`, display: "flex",
            justifyContent: "center",}}>
            <Box sx={{display: "flex", margin: "50px", padding: "50px", background: "#FAF5EF"}}>
                <Box sx={{marginRight: "50px"}}>
                    <Image src={pils} alt="Logo" width={400} height={400}/>
                </Box>
                <Box sx={{display: "flex", flexDirection: "column", width: "600px", margin: "30px"}}>
                    <span style={{fontFamily: "Lora",
                        fontSize: "45px",
                        fontWeight: 700,
                        lineHeight: "65px",
                        letterSpacing: "0px",
                        marginBottom: "30px",
                    }}>Personalized plans, Best Value</span>
                    <span style={{fontFamily: "Lora",
                        fontSize: "20px",
                        fontWeight: 600,
                        lineHeight: "25px",
                        letterSpacing: "0px",
                        marginBottom: "20px",}}>We have worked hard to eliminate middlemen and overheads, so you get premium supplements at lowest prices.</span>
                    <span style={{fontFamily: "Lora",
                        fontSize: "20px",
                        fontWeight: 600,
                        lineHeight: "25px",
                        letterSpacing: "0px",
                        marginBottom: "50px",}}>Get 10% off your first order + free shipping.  You can cancel or change up your subscription any time.</span>
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
                </Box>
            </Box>
        </Box>
    )
}