import {FormControl, FormControlLabel, Radio, RadioGroup} from "@mui/material";

export default function ChoiceInput({question, ...props}) {
  console.log(question)
  return (
    <FormControl sx={{mt: 5}}>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        {question.choices.map(choice => (
          <FormControlLabel value={choice.id} control={<Radio/>} label={choice.text} />
        ))}
      </RadioGroup>
    </FormControl>
  )
}