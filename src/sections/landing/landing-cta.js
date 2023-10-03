import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function LandingCTA() {
  return (
    <Container sx={{textAlign: "center", py: {xs: 5, md: 10}}}>
      <Typography variant="h2">Personalized plans, best value</Typography>
      <Typography variant="h4" mt={3}>
        We have worked hard to eliminate middlemen and overheads, so you get premium supplements at lowest prices.
      </Typography>
      <Typography variant="body2" mt={3}>
        Get 10% off your first order + free shipping.  You can cancel or change up your subscription any time.
      </Typography>
      <Button variant="contained" size="large" sx={{mt:3}}>Take the quiz!</Button>
    </Container>
  )
}
