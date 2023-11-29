'use client'

import {IconButton, Input} from "@mui/material";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import React, {useRef} from "react";
import Box from "@mui/material/Box";


export default function NumericInput({handleAnswerSubmit, postAnswerIsMutating, ...props}) {
  const inputRef = useRef(null)

  function handleSubmit() {
    return handleAnswerSubmit({text: inputRef.current.value})
  }

  return (
    <Box {...props}>
      <Box sx={{
        display: "flex",

        mx: "auto",
        // width: "1048px",
        width: "100%",
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
          inputRef={inputRef}
          disabled={postAnswerIsMutating}
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
    </Box>
  )
}
