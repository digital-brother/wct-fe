import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import {CardActions} from "@mui/material";
import Typography from "@mui/material/Typography";
import CardContent from '@mui/material/CardContent';

import Image from 'src/components/image';


export default function LandingTitle() {
  return (
    <Grid container>
      <Grid item xs={6} sx={{border: '1px solid black'}}>
        <Stack
          direction="column" justifyContent="center" alignItems="center" spacing={4}
          textAlign="center"
          p={10}
          width='100%' height='100%'
        >
          <Typography variant="h2" sx={{border: '1px solid black'}}>
            Personalised vitamins
          </Typography>
          <Typography variant="h4" sx={{border: '1px solid black'}}>
            Get the Nutrients Your Body Needs for Peak Performance
          </Typography>
          <Typography variant="body1" sx={{border: '1px solid black'}}>
            Take the guesswork out and Find the personalised Supplement Plan Designed just For You
          </Typography>
          <Card sx={{minWidth: 275}}>
            <CardContent>
              Have you ever worked as a graphic, web or digital designer?
              <Stack direction="row" spacing={2} justifyContent="center" mt={2}>
                <Button variant="contained">Yes</Button>
                <Button variant="contained">No</Button>
              </Stack>
            </CardContent>
          </Card>
        </Stack>
      </Grid>
      <Grid item xs={6} sx={{border: '1px solid black'}}>
        <Image
          alt="banking"
          src="/title.jpg"
        />
      </Grid>
    </Grid>
  )
}
