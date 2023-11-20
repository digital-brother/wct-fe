import Header from "@/app/quiz/header";
import Box from "@mui/material/Box";
import React from "react";
import Question from "@/app/quiz/components/question";

export const metadata = {
  title: 'Quiz',
};

export default function Quiz() {
  return (
    <>
      <Header/>
      <Box sx={{
        background: "#FAF5EF",
        mt: 10,
      }}>
        <Question/>
      </Box>
    </>
  )
}
