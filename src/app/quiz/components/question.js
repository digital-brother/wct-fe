'use client'

import Container from "@mui/material/Container";
import {Typography} from "@mui/material";
import {getQuestions} from "@/app/quiz/api";
import React from "react";
import NumericInput from "@/app/quiz/components/numericInput";
import useSWR from "swr";


export default function Question() {
  // SWR get
  const {
    data: getQuestionsData,
    error: getQuestionsError,
    isLoading: getQuestionsIsLoading
  } = useSWR('questions', getQuestions)

  if (getQuestionsError) {
    return <div>failed to load. {getQuestionsError.message}. {JSON.stringify(getQuestionsError.response?.data)}</div>
  }
  if (getQuestionsIsLoading) return <div>loading...</div>
  console.log(getQuestionsData);

  const question = getQuestionsData[2]
  // const question = {
  //   choices: [],
  //   id: 3,
  //   order: 3,
  //   parent_choice: null,
  //   text: "How old are you?",
  //   type: "numeric"
  // }

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
