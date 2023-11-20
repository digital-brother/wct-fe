import Header from "@/app/quiz/header";
import Box from "@mui/material/Box";
import React from "react";
import Question from "@/app/quiz/question";

export const metadata = {
  title: 'Quiz',
};

export default function Quiz() {
  return (
    <>
      <Header/>
      <Box
        component="main"
        sx={{
          background: "#FAF5EF",
          p: 3,
          flexGrow: 1,
        }}
      >
        <Question/>
      </Box>
    </>
  )
}
