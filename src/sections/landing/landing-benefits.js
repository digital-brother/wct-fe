import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Image from "../../components/image";

const BENEFITS = [
  {
    header: "Designed by leading Functional Medicine Experts for your unique needs",
    description: "You are unique. Our experts consider your goals, lifestyle and diet to formulate your personalised plan.  (Picture of Dr Menka Gupta here)",
    image: "title.jpg"
  },
  {
    header: "Backed by science to help you reach your health & wellness goals",
    description: "Our supplements are research driven and evidence based synergistic formulas to maximise absorption and bioavailability.",
    image: "title.jpg"
  },
  {
    header: "Quality",
    description: "Our high quality vitamins and supplements are Manufactured in the USA & compliant with FDA GoodManufacturing Practices (GMP). They are made with purest, superior raw materials, free from  heavy metals, pesticides and microbiological organisms. 100% gluten free and free of soy protein",
    image: "title.jpg"
  },
  {
    header: "App Support",
    description: "Maximise and monitor your outcomes. Build healthier habits and never forget your daily dose.",
    image: "title.jpg"
  },
]

export default function LandingBenefits() {
  return (
    <Box textAlign="center" display="flex" flexDirection="column" alignItems="center">

      <Typography variant="h2">
        A Whole New World of Personalised Health & Wellness
      </Typography>

      <Grid container maxWidth={1200} pt={{xs: 5, md: 10}} pb={10}>
        {BENEFITS.map((benefit, index) => (
          <Grid container item xs={12} sx={{flexDirection: index % 2 === 0 ? "row" : "row-reverse"}}>

            <Grid item xs={5} sx={{border: '1px solid black'}}>
              <Image src={benefit.image}/>
            </Grid>

            <Grid item xs={7} sx={{display: "flex", flexDirection: "column", justifyContent: "center", p: 4, border: '1px solid black'}}>
              <Typography variant="h4">
                {benefit.header}
              </Typography>
              <Typography variant="body1" mt={3}>
                {benefit.description}
              </Typography>

            </Grid>
          </Grid>
        ))}
      </Grid>

    </Box>
  )
}
