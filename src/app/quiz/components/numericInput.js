'use client'

import {IconButton, Input, Typography} from "@mui/material";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import React from "react";
import Box from "@mui/material/Box";
import useSWRMutation from "swr/mutation";
import {postAnswer} from "@/app/quiz/api.mjs";


export default function NumericInput(props) {
  const {
    data: postAnswerData,
    error: postAnswerError,
    isMutating: postAnswerIsMutating,
    trigger: postAnswerTrigger,
    reset: resetPostAnswer,
  } = useSWRMutation('answerst', postAnswer)

  async function handleSubmit() {
    const payload = {question: 3, text: 5}
    resetPostAnswer();
    await postAnswerTrigger(payload);
  }

  return (
    <>
      <Box sx={{
        display: "flex",

        mt: "37px",
        mx: "auto",
        width: "1048px",
        height: "111px",

        background: '#FAF5EF',
        border: '3px white solid',
        borderRadius: "54.32px",

        pl: "50px",
        pr: "32.59px",
        py: "21.73px",
      }}>
        <Input
          defaultValue="default"
          disableUnderline={true}
          sx={{
            width: "100%",
            fontSize: "35px",
          }}
        />
        <IconButton onClick={handleSubmit} sx={{
          width: 66,
          height: 66,
          color: '#FFFFFF',
          bgcolor: '#1F4934',
          '&:hover': {bgcolor: '#367556'},
        }}>
          <KeyboardArrowRightRoundedIcon sx={{fontSize: 55}}/>
        </IconButton>
      </Box>

      <Typography sx={{mt: 5, textAlign: "center"}}>
        {postAnswerError?.message}. {JSON.stringify(postAnswerError?.response?.data)}
        {JSON.stringify(postAnswerData)}
      </Typography>
    </>
  )
}
