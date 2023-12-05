import Header from "@/app/quiz/Header";
import Box from "@mui/material/Box";
import React from "react";
import QuestionBox from "@/app/quiz/components/Question";
import Container from "@mui/material/Container";

export const metadata = {
  title: "Quiz",
};

export default function Quiz() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh", background: "#FAF5EF" }}>
      <Header />
      <Container sx={{ flexGrow: 1, display: "flex", alignItems: "center", py: 10 }}>
        <QuestionBox />
      </Container>
      <Box sx={{ height: 100 }} />
    </Box>
  );
}
