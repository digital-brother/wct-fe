import {FormControl, FormControlLabel, Radio, RadioGroup} from "@mui/material";
import UncheckedIcon from "@/assets/uncheckedIcon"
import CheckedIcon from "@/assets/checkedIcon"

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
          <FormControlLabel
            value={choice.id}
            control={<Radio icon={<UncheckedIcon/>} checkedIcon={<CheckedIcon/>} sx={{
              '& .MuiSvgIcon-root': {
                fontSize: 60,
              },
            }}
            />}
            label={choice.text}

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
        ))}
      </RadioGroup>
    </FormControl>
  )
}