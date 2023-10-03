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
        pt: {xs: 0, md: 5},
        pb: {xs: 10, md: 15},
      }}
    >
      <Typography variant="h2" sx={{mb: {xs: 5, md: 10}}}>Certifications</Typography>
      <Grid container spacing={3} sx={{border: '1px solid black'}}>
        {CERTIFICATIONS.map((certification) => (
          <Grid item xs={3} sx={{border: '1px solid black'}}>
            <Box height={100} sx={{border: '1px solid black'}}>
              <Image
                src={certification.image}
                alt={certification.name}
                layout="fill"
                objectFit="contain"
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

LandingCertifications.propTypes = {
  brands: PropTypes.array,
};
