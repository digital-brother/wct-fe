import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import React from "react";

export function BooleanButton({ children, onClick, sx }) {
  return (
    <Button
      onClick={onClick}
      sx={{
        width: "172.74px",
        height: "88px",

        border: "1.09px #B0835F solid",
        borderRadius: 54.32,

        fontWeight: 500,
        fontSize: 32.59,
        fontFamily: "Fahkwang",

        bgcolor: "#1F4934",
        color: "#FFFFFF",

        "&:hover": {
          bgcolor: "#FFFFFF",
          color: "#121211",
        },

        textTransform: "none",
        ...sx,
      }}
    >
      {children}
    </Button>
  );
}

export default function BooleanInput({
  handleAnswerSubmit,
  postAnswerIsMutating,
  ...props
}) {
  function handleSubmit(value) {
    return handleAnswerSubmit({ text: value });
  }

  return (
    <Box {...props}>
      <BooleanButton sx={{ mr: 3 }} onClick={() => handleSubmit("true")}>
        Yes
      </BooleanButton>
      <BooleanButton onClick={() => handleSubmit("false")}>No</BooleanButton>
    </Box>
  );
}
