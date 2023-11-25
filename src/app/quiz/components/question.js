'use client'

import Container from "@mui/material/Container";
import {Typography} from "@mui/material";
import {getQuestions, postAnswer} from "@/app/quiz/api";
import React from "react";
import NumericInput from "@/app/quiz/components/numericInput";
import useSWR from "swr";
import BooleanInput from "@/app/quiz/components/booleanInput";
import useSWRMutation from "swr/mutation";
import ChoiceInput from "@/app/quiz/components/choiceInput";
import CheckboxChoiceInput from "@/app/quiz/components/checkboxChoiceInput";

export default function QuestionBox() {
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
      <Question/>
    </Container>
  )
}

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

function Question() {
  const {
    data: getQuestionsData,
    error: getQuestionsError,
    isLoading: getQuestionsIsLoading
  } = useSWR('questions', getQuestions)

  const {
    data: postAnswerData,
    error: postAnswerError,
    isMutating: postAnswerIsMutating,
    trigger: postAnswerTrigger,
    reset: resetPostAnswer,
  } = useSWRMutation('answers', postAnswer)

  if (getQuestionsError) return <ErrorDetails error={getQuestionsError}/>
  if (getQuestionsIsLoading) return <BoxHeader text="Loading..."/>

  const question = getQuestionsData[3]

  function handleAnswerSubmit(fields) {
    resetPostAnswer();
    const payload = {question: question.id, ...fields}
    postAnswerTrigger(payload);
  }

  const questionTypeComponentMapping = new Map(Object.entries({
    numeric: NumericInput,
    boolean: BooleanInput,
    choice: ChoiceInput,
    checkbox: CheckboxChoiceInput,
  }))
  const InputComponent = questionTypeComponentMapping.get(question.type)
  if (!InputComponent) return <ErrorDetails error={{message: `Unknown question type: ${question.type}`}}/>

  return (
    <>
      <BoxHeader text={question.text}/>
      <InputComponent
        question={question}
        handleAnswerSubmit={handleAnswerSubmit}
        postAnswerIsMutating={postAnswerIsMutating}
        sx={{mt: 8}}
      />
      {postAnswerError &&
        <><br/><br/><ErrorDetails error={postAnswerError}/></>
      }
    </>
  )
}
