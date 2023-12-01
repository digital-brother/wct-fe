import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import UncheckedIcon from "@/assets/UncheckedIcon";
import CheckedIcon from "@/assets/CheckedIcon";

export default function RadioInput({
  question,
  handleAnswerSubmit,
  postAnswerIsMutating,
}) {
  function handleSubmit(value) {
    handleAnswerSubmit({ choices: [value] });
  }

  return (
    <FormControl sx={{ mt: {xs: 2, lg: 4, lx: 5} }}>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        {question.choices.map((choice, index) => (
          <FormControlLabel
            key={index}
            value={choice.id}
            control={
              <Radio
                icon={<UncheckedIcon />}
                checkedIcon={<CheckedIcon />}
                onClick={() => handleSubmit(choice.id)}
                sx={{
                  "& .MuiSvgIcon-root": {
                    fontSize: {
                      xs: 30,
                      xs: 40,
                      lg: 60,
                    },
                  },
                }}
              />
            }
            label={choice.text}
            componentsProps={{
              typography: {
                sx: {
                  ml: {
                    xs: 1.2,
                    lg: 2,
                  },
                  fontSize: {
                    xs: 25,
                    md: 28,
                    lg: 40,
                  },
                  fontWeight: 700,
                  textAlign: "left",
                },
              },
            }}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}
