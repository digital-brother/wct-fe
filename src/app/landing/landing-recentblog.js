import Box from "@mui/material/Box";
import Image from "next/image";
import doctor from "public/images/doctor.png"
import bananas from "public/images/bananas.png"
import fitness from "public/images/fitness.png"

export default function LandingRecentBlog() {
    return (
        <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", padding: "75px 75px"}}>
            <Box sx={{width: "700px",
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                marginBottom: "50px"}}>
                                <span style={{
                                    fontFamily: "Lora",
                                    fontSize: "50px",
                                    fontWeight: 700,
                                    lineHeight: "65px",
                                    letterSpacing: "0em",
                                    textAlign: "center",
                                }}>Recent blog Posts</span>
            </Box>
            <Box sx={{display: "flex", marginBottom: "50px"}}>
                <Box sx={{background: "#F1E4DB", width: "450px", marginRight: "20px"}}>
                    <Box sx={{display: "flex",
                        justifyContent: "center", background: "#DECFC3", padding: "25px"}}>
                        <Image src={doctor} width={400} height={300} alt="Logo" style={{objectFit: "cover"}}/>
                    </Box>
                    <Box sx={{display: "flex", flexDirection: "column", padding: "30px"}}>
                        <span style={{fontFamily: "Lora",
                            fontSize: "20px",
                            fontWeight: 500,
                            lineHeight: "normal",
                            letterSpacing: "0px",
                            marginBottom: "15px",
                            textTransform: "capitalize",}}>October 5, 2023  - Dr Menka Gupta</span>
                        <span style={{fontFamily: "Lora",
                            fontSize: "23px",
                            fontWeight: 700,
                            lineHeight: "25px",
                            letterSpacing: "0px",
                            marginBottom: "15px",
                            textTransform: "capitalize",
                        }}>Understanding Female Hormones: Types and Functions</span>
                        <span style={{fontFamily: "Lora",
                            fontSize: "20px",
                            fontStyle: "normal",
                            fontWeight: 500,
                            lineHeight: "normal",
                            textDecorationLine: "underline",
                            textTransform: "capitalize",}}>Read More</span>
                    </Box>
                </Box>
                <Box sx={{background: "#CDD1E3", width: "450px", marginRight: "20px"}}>
                    <Box sx={{display: "flex",
                        justifyContent: "center", background: "#C2C5D1", padding: "25px"}}>
                        <Image src={fitness} width={400} height={300} alt="Logo" style={{objectFit: "cover"}}/>
                    </Box>
                    <Box sx={{display: "flex", flexDirection: "column", padding: "30px"}}>
                        <span style={{fontFamily: "Lora",
                            fontSize: "20px",
                            fontWeight: 500,
                            lineHeight: "normal",
                            letterSpacing: "0px",
                            marginBottom: "15px",
                            textTransform: "capitalize",}}>September 30, 2023 - Dr Menka Gupta</span>
                        <span style={{fontFamily: "Lora",
                            fontSize: "22px",
                            fontWeight: 700,
                            lineHeight: "25px",
                            letterSpacing: "0px",
                            marginBottom: "37px",
                            textTransform: "capitalize",
                        }}>Benefits Of Yoga For Digestion</span>
                        <span style={{fontFamily: "Lora",
                            fontSize: "20px",
                            fontStyle: "normal",
                            fontWeight: 500,
                            lineHeight: "normal",
                            textDecorationLine: "underline",
                            textTransform: "capitalize",}}>Read More</span>
                    </Box>
                </Box>
                <Box sx={{background: "#E3E3E3", width: "450px"}}>
                    <Box sx={{display: "flex",
                        justifyContent: "center", background: "#DECFC3", padding: "25px"}}>
                        <Image src={bananas} width={400} height={300} alt="Logo" style={{objectFit: "cover"}}/>
                    </Box>
                    <Box sx={{display: "flex", flexDirection: "column", padding: "30px"}}>
                        <span style={{fontFamily: "Lora",
                            fontSize: "20px",
                            fontWeight: 500,
                            lineHeight: "normal",
                            letterSpacing: "0px",
                            marginBottom: "15px",
                            textTransform: "capitalize",}}>October 5, 2023  - Dr Menka Gupta</span>
                        <span style={{fontFamily: "Lora",
                            fontSize: "23px",
                            fontWeight: 700,
                            lineHeight: "25px",
                            letterSpacing: "0px",
                            marginBottom: "15px",
                            textTransform: "capitalize",
                        }}>How to Flush Out Excess Estrogen from the Body?</span>
                        <span style={{fontFamily: "Lora",
                            fontSize: "20px",
                            fontStyle: "normal",
                            fontWeight: 500,
                            lineHeight: "normal",
                            textDecorationLine: "underline",
                            textTransform: "capitalize",}}>Read More</span>
                    </Box>
                </Box>
            </Box>
            <Box sx={{display: "flex", marginBottom: "50px"}}>
                <Box sx={{width: "15px",
                    height: "15px",
                    background: "#ADBBC4",
                    borderRadius: "100%",
                    marginRight: "5px"
                }}/>
                <Box sx={{width: "50px",
                    height: "15px",
                    borderRadius: "11px",
                    background: "#1F4934",
                    marginRight: "5px",
                }}/>
                <Box sx={{width: "15px",
                    height: "15px",
                    background: "#ADBBC4",
                    borderRadius: "100%"
                }}/>
            </Box>
        </Box>
    );
}