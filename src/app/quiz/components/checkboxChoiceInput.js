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

  const [bgColor, setBgColor] = useState("#fbf5ef");

  function handleClick() {
    // check checkbox status
    // setBgColor("#fbf5bf")
  }

  return (
    <FormControlLabel
      value={choice.id}
      onClick={handleClick}
      control={
        <Checkbox
          // onClick={() => handleSubmit(choice.id)}
          sx={{
            '& .MuiSvgIcon-root': {
              fontSize: 60,
            },
            // display: "none"
          }}
        />
      }
      label={choice.text}
      labelPlacement="end"
      sx={{
        backgroundColor: bgColor,
        padding: 3,
        borderRadius: 1,
        margin: 1,
        textAlign: "center",
        border: "none",
      }}

      componentsProps={{
        typography: {
          sx: {
            ml: 2,
            fontSize: 40,
            fontWeight: 700,
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

  // temporary solution for display in 2 columns
  return (
    <FormControl sx={{mt: 5}}>
      <FormGroup aria-label="position" row>
        <Grid container spacing={2} >
        {question.choices.map(choice => (
          <Grid container item xs={6} direction="column" >
            <ChoiceVariantButton choice={ choice } question={ question } />
          </Grid>
        ))}

        </Grid>
      </FormGroup>
      <Button
        variant="contained"
        color="success"
        sx={{
          mx: 1,
          mt: 5,
          p: 3,
          fontSize: 40,
          fontWeight: 600,
        }}
        onClick={() => {
          alert("Sending data");
        }}
      >
        Send data
      </Button>
    </FormControl>
  );
}
