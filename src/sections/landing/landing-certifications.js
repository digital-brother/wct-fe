import PropTypes from 'prop-types';

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import {useTheme} from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from "@mui/material/Typography";
import Image from "next/image";


// ----------------------------------------------------------------------


const CERTIFICATIONS = [
  {
    id: 0,
    name: "FDA",
    image: "/fda.svg"
  },
  {
    id: 1,
    name: 0,
    image: "/tga.png"
  },
  {
    id: 2,
    name: 0,
    image: "/npa.png"
  },
  {
    id: 3,
    name: 0,
    image: "/nsf.png"
  }
]


export default function LandingCertifications({brands}) {
  const theme = useTheme();

  return (
    <Container
      sx={{
        textAlign: 'center',
        pt: {xs: 5, md: 10},
        pb: {xs: 10, md: 15},
      }}
    >
      <Typography variant="h2" sx={{mb: {xs: 3, md: 5}}}>Certifications</Typography>

      <Grid container spacing={3}>
        {CERTIFICATIONS.map((certification) => (
          <Grid item xs={12} md={6} lg={3} >
            <Box
              component="img"
              src={certification.image}
              alt={certification.name}
              height="80px"
              width="auto"  // allow natural width but scale height
              objectFit="cover"
              // border='1px solid black'
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
    ;
}

LandingCertifications.propTypes = {
  brands: PropTypes.array,
};
