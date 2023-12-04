import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import React from "react";

export function BooleanButton({ children, onClick, sx }) {
  return (
    <Button
      onClick={onClick}
      sx={{
        width: {
          xs: "105px",
          sm: "172.74px",
        },
        height: {
          xs: "70px",
          sm: "88px",
        },

        border: "1.09px #B0835F solid",
        borderRadius: {
          xs: 12.32,
          sm: 35.32,
          lg: 54.32,
        },

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
    <Box {...props} sx={{ mt: {xs: 3, sm: 8 } }}>
      <BooleanButton sx={{ mr: {xs: 1, sm: 3} }} onClick={() => handleSubmit("true")}>
        Yes
      </BooleanButton>
      <BooleanButton onClick={() => handleSubmit("false")}>No</BooleanButton>
    </Box>
  );
}
