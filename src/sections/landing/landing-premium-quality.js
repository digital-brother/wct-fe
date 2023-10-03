import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const QUALITIES = [
  {
    title: 'Quality Ingredients',
    icon: '/assets/icons/ic_statistics.svg',
  },
  {
    title: 'GMP certified Labs',
    icon: '/assets/icons/ic_social_media.svg',
  },
  {
    title: 'No nasties',
    icon: '/assets/icons/ic_real_time.svg',
  },
  {
    title: 'Non GMO, Gluten Free',
    icon: '/assets/icons/ic_checklist.svg',
  },
  {
    title: 'Bioavailable',
    icon: '/assets/icons/ic_report.svg',
  },

];

// ----------------------------------------------------------------------

export default function LandingPremiumQuality() {
  return (
    <Container
      sx={{
        textAlign: 'center',
        pt: { xs: 5, md: 10 },
        pb: { xs: 5, md: 10 },
      }}
    >
      <Typography variant="h2">Premium Quality </Typography>

      <Box
        sx={{
          mt: 10, //
          rowGap: 8,
          columnGap: 10,
          display: 'grid',
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
          },
        }}
      >
        {QUALITIES.map((value) => (
          <div key={value.title}>
            <SvgColor
              src={value.icon}
              color="info"
              sx={{
                width: 64,
                height: 64,
                mx: 'auto',
                bgcolor: 'primary.main',
              }}
            />

            <Typography variant="h4" sx={{ mt: 3, mb: 1 }}>
              {value.title}
            </Typography>
          </div>
        ))}
      </Box>
    </Container>
  );
}
