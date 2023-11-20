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
        background: "#F1E4DB",
        borderRadius: "25px",
        border: `2px solid white`,
        boxShadow: '0px 20px 50px rgba(209, 178, 114, 0.25)',
        pt: 2.6,
        px: 3.2,
        pb: 5,
      }}>
        <Typography variant="h3" sx={{
          fontWeight: "bold",
          mt: 10,
          textAlign: "center",
        }}
        >{question.text}
        </Typography>
        <NumericInput sx={{mt:5, mb: 10, display: 'flex', justifyContent: "center"}}/>
      </Container>
    </Box>
  );
}
