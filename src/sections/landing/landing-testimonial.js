import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import Carousel, { useCarousel, CarouselDots, CarouselArrows } from 'src/components/carousel';

import TestimonialItem from './landing-testimonial-item';


const TESTIMONIALS = [
  {
    id: '1',
    name: 'Gayatri Sriram',
    role: '',
    // avatarUrl: '',
    // createdAt: '',
    ratingNumber: 5,
    review: `I've been using the supplements from Dr Gupta now for my mum, dad and
             our own family. I've seen a huge difference in our health. We literally
             swear by Dr Menka Gupta. Her consultation for my father was en point and
             we were able to throw off a chronic condition in an 88 year old man. She
             is so approachable and understanding. A very very thorough doctor.`,
  },
  {
    id: '2',
    name: 'Fiona Hee',
    role: '',
    ratingNumber: 5,
    review: `I have been buying supplements from Nutra Nourish for years for my family.
             There are so many types of supplements out there but I trust Menka's
             carefully selected choices, now all made easier with her e-shop.`,
  },
  {
    id: '3',
    name: 'Sripriya Ganesh',
    role: '',
    ratingNumber: 5,
    review: `I was advised for my nasal allergies, to start having probiotics and
             digestive enzymes as it helps.  But how much it helps I suddenly realised
             after consuming  nutranourishes probiotics !!!   Instead of taking Zyrtec
             or other antihistaminics, it was simply enough to consume  one of these
             supplements on late food nights!!  It prevents for me the next day sneezing
             and further agony!!   It helped my gut health so efficiently that my stomach
             size reduced in the mornings to a normal size !! And it significantly reduced
             gastric related symptoms !!! It s incredible as I didn’t find this much
             potency in any other store bought grades!!   It definitely works! And I
             consume it everyday  now after the initial phase , stomach, digestion, sleep
             all quite improved. That was one great prescription Dr Menka !!  Good job
             both you and the little therbiotic caps`,
  }
]


// ----------------------------------------------------------------------

export default function LandingTestimonial() {
  const carousel = useCarousel({
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    ...CarouselDots({
      sx: {
        mt: { xs: 8, md: 10 },
      },
    }),
  });

  return (
    <Box sx={{ bgcolor: 'background.neutral', overflow: 'hidden' }}>
      <Container
        sx={{
          position: 'relative',
          py: { xs: 10, md: 15 },
        }}
      >
        <Stack spacing={2} sx={{ textAlign: 'center', mb: { xs: 8, md: 10 } }}>
          <Typography variant="overline" sx={{ color: 'text.disabled' }}>
            Testimonials
          </Typography>

          <Typography variant="h2">Who Love Our Work</Typography>
        </Stack>

        <CarouselArrows
          onNext={carousel.onNext}
          onPrev={carousel.onPrev}
          leftButtonProps={{
            sx: {
              opacity: { xs: 0, md: 1 },
            },
          }}
          rightButtonProps={{
            sx: {
              opacity: { xs: 0, md: 1 },
            },
          }}
        >
          <Grid container spacing={10} justifyContent="center">
            <Grid xs={12} md={8}>
              <Carousel ref={carousel.carouselRef} {...carousel.carouselSettings}>
                {TESTIMONIALS.map((testimonial) => (
                  <TestimonialItem key={testimonial.id} testimonial={testimonial} />
                ))}
              </Carousel>
            </Grid>
          </Grid>
        </CarouselArrows>
      </Container>
    </Box>
  );
}

LandingTestimonial.propTypes = {
  testimonials: PropTypes.array,
};
