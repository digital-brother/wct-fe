import Header from "@/app/quiz/Header";
import Box from "@mui/material/Box";
import React from "react";
import QuestionBox from "@/app/quiz/components/Question";

export const metadata = {
  title: "Quiz",
};

export default function Quiz() {
  return (
    <>
      <Header />
      <Box
        sx={{
          background: "#FAF5EF",
          mt: 10,
        }}
      >
        <QuestionBox />
      </Box>
    </>
  );
}
