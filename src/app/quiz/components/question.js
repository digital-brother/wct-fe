'use client'

import Box from "@mui/material/Box";
import {useTheme} from '@mui/material/styles';
import useSWR from 'swr'
import Container from "@mui/material/Container";
import {IconButton, Input, InputAdornment, Typography} from "@mui/material";
import {getQuestions} from "@/app/quiz/api";
import React from "react";
import {Visibility} from "@mui/icons-material";
import NumericInput from "@/app/quiz/components/numericInput";


export default function Question() {
  const {data, error, isLoading} = useSWR('questions', getQuestions)
  if (error) {
    return <div>failed to load. {error.message}. {JSON.stringify(error.response?.data)}</div>
  }
  if (isLoading) return <div>loading...</div>

  console.log(data);

  // const question = data[2]
  // console.log(question)

  const question = {
    choices: [],
    id: 3,
    order: 3,
    parent_choice: null,
    text: "How old are you?",
    type: "numeric"
  }

  return (
    <Container maxWidth="lg" sx={{
      background: "#F1E4DB",
      borderRadius: "25px",
      border: `2px solid white`,
      boxShadow: '0px 20px 50px rgba(209, 178, 114, 0.25)',
      pt: "83px",
      pl: "97px",
      pr: "105px",
      pb: "59px",
    }}>
      <Typography variant="h3" sx={{
        fontWeight: "bold",
        textAlign: "center",
      }}>
        {question.text}
      </Typography>
      <NumericInput/>
    </Container>
  )
}
