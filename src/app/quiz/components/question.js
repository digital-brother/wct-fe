'use client'

import Container from "@mui/material/Container";
import {Typography} from "@mui/material";
import {getQuestions} from "@/app/quiz/api";
import React from "react";
import NumericInput from "@/app/quiz/components/numericInput";
import useSWR from "swr";
import BooleanInput from "@/app/quiz/components/booleanInput";

function BoxHeader({text}) {
  return (
    <Typography variant="h3" sx={{
      fontWeight: "bold",
      textAlign: "center",
    }}>
      {text}
    </Typography>
  )
}

export function ErrorDetails({error}) {
  return (
    <>
      <Typography variant="h5" sx={{fontWeight: "bold",}}>
        Error occured. Please contact system administrator.
      </Typography>
      <Typography variant="h6" sx={{mt: 3}}>
        {error?.message && error.message}<br/>
        {error?.response?.data && JSON.stringify(error.response.data)}
      </Typography>
    </>
  )
}

export default function Question() {
  const {
    data: getQuestionsData,
    error: getQuestionsError,
    isLoading: getQuestionsIsLoading
  } = useSWR('questions', getQuestions)

  let boxContent = null

  if (getQuestionsError) {
    boxContent = <ErrorDetails error={getQuestionsError}/>
  } else if (getQuestionsIsLoading) {
    boxContent = <BoxHeader text="Loading..."/>

  } else if (getQuestionsData) {
    const question = getQuestionsData[1]

    console.log(question)

    const questionTypeComponentMapping = new Map(Object.entries({
      numeric: NumericInput,
      boolean: BooleanInput,
    }))
    const InputComponent = questionTypeComponentMapping.get(question.type)
    if (!InputComponent) {
      boxContent = (
        <ErrorDetails error={{message: `Unknown question type: ${question.type}`}}/>
      )
    } else {
    boxContent = (
      <>
        <BoxHeader text={question.text}/>
        <InputComponent question={question} sx={{mt: 8}}/>
      </>
    )
  }}

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
      textAlign: "center",
    }}>
      {boxContent}
    </Container>
  )
}
