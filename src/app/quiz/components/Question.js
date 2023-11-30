'use client'

import Container from "@mui/material/Container";
import {Typography} from "@mui/material";
import {getNextQuestion, postAnswer} from "@/app/quiz/api";
import React from "react";
import NumericInput from "@/app/quiz/components/NumericInput";
import useSWR, {mutate} from "swr";
import BooleanInput from "@/app/quiz/components/BooleanInput";
import useSWRMutation from "swr/mutation";
import RadioInput from "@/app/quiz/components/RadioInput";
import CheckboxInput from "@/app/quiz/components/ChoiceInput";
import Box from "@mui/material/Box";

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
  } = useSWR('question', getNextQuestion)

  const {
    data: postAnswerData,
    error: postAnswerError,
    isMutating: postAnswerIsMutating,
    trigger: postAnswerTrigger,
    reset: resetPostAnswer,
  } = useSWRMutation('answers', postAnswer)

  if (getQuestionsError) return <ErrorDetails error={getQuestionsError}/>
  if (getQuestionsIsLoading) return <BoxHeader text="Loading..."/>

  const question = getQuestionsData.find(question => question.id === 27);
  async function handleAnswerSubmit(fields) {
    resetPostAnswer();
    const payload = {question: question.id, ...fields}
    const response = await postAnswerTrigger(payload);
    await mutate('question', response.next_question, false);
  }

  const questionTypeComponentMapping = new Map(Object.entries({
    numeric: NumericInput,
    text: NumericInput,
    boolean: BooleanInput,
    radio: RadioInput,
    checkbox: CheckboxInput,
  }))
  const InputComponent = questionTypeComponentMapping.get(question.type)
  if (!InputComponent) return <ErrorDetails error={{message: `Unknown question type: ${question.type}`}}/>

  return (
    <Box sx={{px: 9}}>
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
    </Box>
  )
}