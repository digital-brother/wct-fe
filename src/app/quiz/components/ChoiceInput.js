import {FormControlLabel, Grid, Typography} from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import * as React from "react";
import {useRef, useState} from "react";
import Box from "@mui/material/Box";
import {BooleanButton} from "@/app/quiz/components/BooleanInput";

const CHOICES_FIELD_NAME = 'choices'

export function Choice({choice}) {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <FormControlLabel
      key={choice.id}
      control={
        <Checkbox
          checked={isChecked}
          onChange={handleChange}
          name={CHOICES_FIELD_NAME}
          value={choice.id}
          sx={{ display: "none" }}
        />
      }
      label={<Typography variant="h6">{choice.text}</Typography>}
      sx={{
        py: 6,
        width: "100%",
        borderRadius: 1,
        bgcolor: isChecked ? "#FFFFFF" : "#FAF5EF",
        fontSize: 20,
        justifyContent: "center",
      }}
    />
  )
}

export default function CheckboxInput({question, handleAnswerSubmit}) {
  const formRef = useRef(null);
  const choices = question.choices

  const handleSubmit = () => {
    const formData = new FormData(formRef.current);
    const selectedChoices = formData.getAll(CHOICES_FIELD_NAME)
    handleAnswerSubmit({choices: selectedChoices})
  };

  return (
    <Box component={"form"} ref={formRef} sx={{mt: 5}}>
      <Grid container rowSpacing={1} columnSpacing={2} sx={{textAlign: "center"}}>
        {choices.map((choice, index) => (
          <Grid key={index} item xs={6}>
            <Choice choice={choice}/>
          </Grid>
        ))}
      </Grid>
      <BooleanButton onClick={handleSubmit} sx={{mt: 5}}>
        Submit
      </BooleanButton>
    </Box>
  )
}
