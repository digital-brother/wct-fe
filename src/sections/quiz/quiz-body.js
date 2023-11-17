import Button from "@mui/material/Button";
import {SvgIcon} from "@mui/material";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Logo from "../../components/svg-color/Logo.svg";
import {Lora} from "@next/font/google";
import Grid from "@mui/material/Grid";
import useSWR from "swr"
import { useState } from "react";
import { useSWRConfig } from "swr"

const fetcher = (...args) => fetch(...args).then(res => res.json())
const post_fetcher = (...args) => fetch(...args).then(res => res.json())
const lora = Lora({preload: false});


function QuestionList() {
  const { data, error, isLoading } = useSWR("http://localhost:8000/api/v1/quiz/questions/", fetcher);

  if (error) return <div>Data loading error</div>
  if (isLoading) return <div>Loading...</div>
  return data;
}

function CreateQuiz(email) {
  fetch(
    "http://localhost:8000/api/v1/quiz/",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email
      })
    }
  )
}

function CreateAnswer(answer, question) {
  if (question?.type == "radio") {
    const response = fetch(
      "http://localhost:8000/api/v1/quiz/answers/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "BearerToken",
        },
        body: JSON.stringify({
          question: question?.id,
          choice: answer?.id,
        })
      }
    ).then(response => {
        if(response.status >= 400) {
          throw new Error("Server responds with error! " + response.status);
        } else if(response.status == 201) {
          alert("Question answered successful");
          return response.json();
        }
    })
  }
}


function ChoiceVariantButton({ choice, question }) {

  function handleClick() {
    CreateAnswer(choice, question)
  }

  return (
    <Box
      component="div"
      onClick={handleClick}
      sx={{
        backgroundColor: "#fbf5ef",
        padding: "25px",
        borderRadius: "5px",
        margin: "5px",
        textAlign: "center",
        border: "none",
      }}
    >{ choice?.text }</Box>
  )
}

function QuestionForm({ question }) {
  if (question?.type == "radio") {
    return <Box component="form">
      <Box
        component="div"
        sx={{
          alignItems: "center",
          fontWeight: "bold",
          padding: "30px",
          textAlign: "center",
        }}
      >{ question?.text }</Box>
      <Grid container spacing={2} >
        {question?.choices.map((x, i) =>
          <Grid container item xs={6} direction="column" >
            <ChoiceVariantButton choice={ x } question={ question } />
          </Grid>
        )}
      </Grid>
    </Box>
  }
}

export default function QuizBody() {
  let questions = QuestionList() || [];
  return (
    <Box
      component="main"
      sx={{
        backgroundColor: "#f5f5f5",
        padding: "24px",
        alignItems: "center",
      }}
    >
      <Container maxWidth="lg" sx={{
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        alignItems: "center",
        backgroundColor: "#f3e4dc",
        borderRadius: "15px",
        border: "solid #f7eee9 3px",
        padding: "20px 40px 40px",
        alignItems: "stretch",
      }}>
        <QuestionForm question={ questions[0] } />
      </Container>
    </Box>
  );
}
