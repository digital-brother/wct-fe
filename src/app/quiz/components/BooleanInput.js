import Box from "@mui/material/Box";
import {Button} from "@mui/material";
import React from "react";

export function BooleanButton({children, onClick, sx}) {
  return (
    <Button onClick={onClick} sx={{
      width: '172.74px',
      height: '88px',

      border: '1.09px #B0835F solid',
      borderRadius: 54.32,

      fontWeight: 500,
      fontSize: 32.59,
      fontFamily: 'Fahkwang',

      bgcolor: "#1F4934",
      color: "#FFFFFF",

      "&:hover": {
        bgcolor: "#FFFFFF",
        color: "#121211",
      },

      textTransform: 'none',
      ...sx,
    }}>
      {children}
    </Button>
  )
}

export default function BooleanInput({question, handleAnswerSubmit, postAnswerIsMutating, ...props}) {
  function handleSubmit(value) {
    return handleAnswerSubmit({choices: [value]})
  }

  return (
    <Box {...props}>
      {question.choices.map(choice => (
        <BooleanButton sx={{mx: 1.5}} onClick={() => handleSubmit(choice.id)}>{choice.text}</BooleanButton>
      ))}
    </Box>
  )
}
