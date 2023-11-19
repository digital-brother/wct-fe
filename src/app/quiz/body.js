'use client'

import Box from "@mui/material/Box";
import {useTheme} from '@mui/material/styles';
import useSWR from 'swr'
import Container from "@mui/material/Container";
import Grid from '@mui/material/Grid';
import {Typography} from "@mui/material";
import {useQuery, useQueryClient} from "@tanstack/react-query";
import {fetcher, QUESTIONS_PATH} from "@/app/quiz/api";

function VariantButton() {
  const theme = useTheme()
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.quiz.button.backgroundColor,
        p: 3,
        borderRadius: 0.6,
        textAlign: "center",
      }}
    >Variant 1</Box>
  )
}

export default function Body() {
  const theme = useTheme()
  const {data, error, isLoading} = useSWR(QUESTIONS_PATH, fetcher)

  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>
  console.log(data)
  return <div>{JSON.stringify(data)}</div>
}

//   return (
//     <Box
//       component="main"
//       sx={{
//         backgroundColor: theme.palette.quiz.backgroundColor,
//         p: 3,
//       }}
//     >
//       <Container maxWidth="lg" sx={{
//         backgroundColor: theme.palette.quiz.container.backgroundColor,
//         borderRadius: 2,
//         border: `solid ${theme.palette.quiz.container.borderColor} 0.2em`,
//         pt: 2.6,
//         px: 3.2,
//         pb: 5,
//       }}>
//         <Typography variant="h4" sx={{
//           fontWeight: "bold",
//           p: 4,
//           textAlign: "center",
//         }}
//         >QuestionText
//         </Typography>
//         <Box component="form">
//           <Grid container columnSpacing={4} rowSpacing={1.2}>
//             {[...Array(8)].map((item, index) => (
//               <Grid item xs={6} key={index}>
//                 <VariantButton/>
//               </Grid>
//             ))}
//           </Grid>
//         </Box>
//       </Container>
//     </Box>
//   );
// }
