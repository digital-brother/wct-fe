'use client'

import Box from "@mui/material/Box";
import {useTheme} from '@mui/material/styles';
import useSWR from 'swr'
import Container from "@mui/material/Container";
import {IconButton, Input, InputAdornment, Typography} from "@mui/material";
import {fetcher, QUESTIONS_PATH} from "@/app/quiz/api";
import React from "react";
import {Visibility} from "@mui/icons-material";
import NumericInput from "@/app/quiz/components/numericInput";


export default function Body() {
  const theme = useTheme()
  const {data, error, isLoading} = useSWR(QUESTIONS_PATH, fetcher)

  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>

  const question = data[2]
  console.log(question)

  return (
    <Box
      component="main"
      sx={{
        backgroundColor: theme.palette.quiz.backgroundColor,
        p: 3,
      }}
    >
      <Container maxWidth="lg" sx={{
        backgroundColor: theme.palette.quiz.container.backgroundColor,
        borderRadius: 2,
        border: `solid ${theme.palette.quiz.container.borderColor} 0.2em`,
        pt: 2.6,
        px: 3.2,
        pb: 5,
      }}>
        <Typography variant="h4" sx={{
          fontWeight: "bold",
          mt: 4,
          textAlign: "center",
        }}
        >{question.text}
        </Typography>
        <NumericInput sx={{mt:4, display: 'flex', justifyContent: "center"}}/>
      </Container>
    </Box>
  );
}
