import Box from "@mui/material/Box";
import {Button} from "@mui/material";
import React from "react";

function BooleanButton({label, onClick, ...props}) {
  return (
    <Button onClick={onClick} sx={{
      width: '172.74px',
      height: '88px',

      border: '1.09px #B0835F solid',
      borderRadius: 54.32,

      fontWeight: 500,
      fontSize: 32.59,
      fontFamily: 'Fahkwang',

      color: "#121211",
      bgcolor: "#FFFFFF",

      "&:hover": {
        bgcolor: "#1F4934",
        color: "#FFFFFF",
      },

      textTransform: 'none',
      ...props,
    }}>
      {label}
    </Button>
  )
}

export default function BooleanInput({handleAnswerSubmit, postAnswerIsMutating, ...props}) {
  return (
    <Box {...props}>
      <BooleanButton label="Yes" mr={3} onClick={() => handleAnswerSubmit("true")}/>
      <BooleanButton label="No" onClick={() => handleAnswerSubmit("false")}/>
    </Box>
  )
}
