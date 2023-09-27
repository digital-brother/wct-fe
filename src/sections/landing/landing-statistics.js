import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import CountUp from "../../components/count-up";
import {fShortenNumber} from "../../utils/format-number";

const SUMMARY = [
  {id: 1, number: 98, header: 'Of customers', subheader: 'Feel Improvement in their health'},
  {id: 2, number: 99, header: 'Of customers', subheader: 'Appreciate the highest quality ingredients'},
  {id: 3, number: 95, header: 'Of customers', subheader: 'Use our App to build healthier habits'},

];

export default function LandingStatistics() {
  return (
    <Container
      sx={{
        overflow: 'hidden',
        py: 5,
      }}
    >
      <Stack
        spacing={3}
        sx={{
          mx: 'auto',
          maxWidth: 560,
          textAlign: 'center',
          mt: {xs: 5, md: 10},
        }}
      >
        <Typography variant="h2">A Healthier, Happier You</Typography>
      </Stack>

      <Box
        sx={{
          rowGap: 5,
          columnGap: 3,
          display: 'grid',
          textAlign: 'center',
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            md: 'repeat(3, 1fr)',
          },
          pt: {xs: 5, md: 10},
          pb: 10,
        }}
      >
        {SUMMARY.map((value) => (
          <Stack key={value.id} spacing={1}>
            <Typography variant="h2">
              <CountUp
                start={value.number / 5}
                end={value.number}
                formattingFn={(newValue) => fShortenNumber(newValue)}
              />
              %

              <Typography
                variant="h4"
                component="span"
                sx={{verticalAlign: 'top', ml: 0.5, color: 'primary.main'}}
              >
                +
              </Typography>
            </Typography>

            <Typography variant="h4" sx={{color: 'text.secondary'}}>
              {value.header}
            </Typography>

            <Typography variant="body2" sx={{color: 'text.secondary'}}>
              {value.subheader}
            </Typography>
          </Stack>
        ))}
      </Box>
    </Container>
  )
}
