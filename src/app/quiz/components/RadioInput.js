import {FormControl, FormControlLabel, Radio, RadioGroup} from "@mui/material";
import UncheckedIcon from "@/assets/UncheckedIcon"
import CheckedIcon from "@/assets/CheckedIcon"

export default function RadioInput({question, handleAnswerSubmit, postAnswerIsMutating}) {
  function handleSubmit(value) {
    handleAnswerSubmit({choice: value})
  }

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
            control={
              <Radio
                icon={<UncheckedIcon/>}
                checkedIcon={<CheckedIcon/>}
                onClick={() => handleSubmit(choice.id)}
                sx={{
                  '& .MuiSvgIcon-root': {
                    fontSize: 60,
                  },
                }}
              />
            }
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