"use client";

import { IconButton, Input } from "@mui/material";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import React, { useRef } from "react";
import Box from "@mui/material/Box";

export default function NumericInput({
  handleAnswerSubmit,
  postAnswerIsMutating,
  ...props
}) {
  const inputRef = useRef(null);

  function handleSubmit() {
    return handleAnswerSubmit({ text: inputRef.current.value });
  }

  return (
    <Box {...props} sx={{ mt: {xs: 3, sm: 5, md: 8 } }}>
      <Box
        sx={{
          display: "flex",

          mx: "auto",
          width: "100%",
          height: {
            xs: "50px",
            sm: "75px",
            md: "111px",
          },


          background: "#FAF5EF",
          border: "3px white solid",
          borderRadius: {
            xs: "35px",
            sm: "54.32px",
          },

          pl: {
            xs: "15px",
            sm: "25px",
            md: "50px",
          },
          pr: {
            xs: "10px",
            sm: "25px",
            md: "32.59px",
          },
          py: {
            xs: "5px",
            sm: "10px",
            md: "21.73px",
          }
        }}
      >
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
        <IconButton
          onClick={handleSubmit}
          sx={{
            width: { xs: 36, sm: 50, md: 66 },
            height: { xs: 36, sm: 50, md: 66 },
            color: "#FFFFFF",
            bgcolor: "#1F4934",
            "&:hover": { bgcolor: "#367556" },
          }}
        >
          <KeyboardArrowRightRoundedIcon sx={{ fontSize: 55 }} />
        </IconButton>
      </Box>
    </Box>
  );
}
