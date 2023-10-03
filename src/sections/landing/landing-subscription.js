import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function LandingSubscription() {
  return (
    <Box sx={{textAlign: "center", py: {xs: 5, md: 10}, bgcolor: 'background.neutral'}}>
      <Typography variant="h2">Subscribe</Typography>
      <Typography variant="h4" mt={3}>
        Subscribe and receive latest on health and exclusive offers
      </Typography>
      <Typography variant="body2" mt={3}>
        Subscribe and stay up-to-date on Care/of news, exclusive offers, and more.
      </Typography>
      <Button variant="contained" size="large" sx={{mt:3}}>Subscribe</Button>
    </Box>
  )
}
