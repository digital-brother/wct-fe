import Box from "@mui/material/Box";
import {SvgIcon} from "@mui/material";
import { useTheme } from '@mui/material/styles';
import Container from "@mui/material/Container";

import Logo from "../../components/svg-color/Logo.svg";


export default function QuizHeader() {
  const theme = useTheme()
  return (
    <Box
      component="header"
      sx={{
        backgroundColor: theme.palette.background.quiz,
        padding: 1.7,
      }}
    >
      <Container maxWidth="lg">
        <SvgIcon component={Logo} inheritViewBox sx={{
          width: 321,
          height: 64,
          verticalAlign: 'middle',
        }}/>
      </Container>
    </Box>
  );
}
