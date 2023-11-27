import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import {SvgIcon} from "@mui/material";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import useSWR from "swr"
import { useState } from 'react';

const post_fetcher = (...args) => fetch(...args).then(res => res.json())

function ChoiceVariantButton({ choice, question }) {

  const [bgColor, setBgColor] = useState("#FAF5EF");

  function handleClick(e, data) {
    // check checkbox status
    setBgColor("#D7AF7F")
  }

  return (
    <FormControlLabel
      value={choice.id}
      onClick={handleClick}
      control={
        <Checkbox sx={{ display: "none" }} />
      }
      label={choice.text}
      labelPlacement="end"
      sx={{
        backgroundColor: bgColor,
        padding: 3,
        borderRadius: 1,
        textAlign: "center",
        border: "none",
        width: "100%",
        mx: 0,

        borderRadius: "5px",
        height: 118,
        flexShrink: 0,
      }}

      componentsProps={{
        typography: {
          sx: {
            color: "#08202F",
            align: "center",
            fontFamily: "Lora",
            fontSize: 20,
            fontStyle: "normal",
            fontWeight: 500,
            lineHeight: "normal",

            // ml: 2,
          }
        }
      }}
    />
  )
}


export default function CheckboxChoiceInput({question, handleAnswerSubmit, postAnswerIsMutating}) {
  function handleSubmit(value) {
    handleAnswerSubmit({choice: value})
  }

  return (
    <FormControl sx={{mt: 5}}>
      <FormGroup row>
        <Grid container spacing={2} >
        {question.choices.map(choice => (
          <Grid container item xs={6} direction="row">
            <ChoiceVariantButton choice={ choice } question={ question } />
          </Grid>
        ))}

        </Grid>
      </FormGroup>
      <Button
        variant="contained"
        color="success"
        sx={{
          mt: 5,
          // p: 3,
          fontSize: 20,
          height: 118,
          fontWeight: 500,
        }}
        onClick={handleSubmit}
      >
        Send data
      </Button>
    </FormControl>
  );
}
