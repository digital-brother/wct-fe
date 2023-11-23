import Box from "@mui/material/Box";
import {Button} from "@mui/material";

function BooleanButton({label, mr=0}) {
  return (
    <Button sx={{
      width: '172.74px',
      height: '88px',
      mr: mr,

      border: '1.09px #B0835F solid',
      borderRadius: 54.32,

      fontWeight: 500,
      fontSize: 32.59,
      fontFamily: 'Fahkwang',

      color: "#121211",
      bgcolor: "#FFFFFF",

      "&:hover": {
        bgcolor: "#1F4934",
        color: "#FFFFFF",
      },

      textTransform: 'none',
    }}>
      {label}
    </Button>
  )
}

export default function BooleanInput({question, ...props}) {
  console.log(props);
  return (
    <Box {...props}>
      <BooleanButton label="Yes" mr={3}/>
      <BooleanButton label="No"/>
    </Box>
  )
}
