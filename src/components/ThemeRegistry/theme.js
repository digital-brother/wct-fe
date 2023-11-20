import {Lora} from 'next/font/google';
import {createTheme} from '@mui/material/styles';

const lora = Lora({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({

  palette: {
    mode: 'light',
    quiz: {
      backgroundColor: '#FFF8EF',
      button: {
        backgroundColor: '#fbf5ef',
      },
      container: {
        backgroundColor: '#F1E4DB',
        borderColor: '#FFFFFF',
      }
    },
  },
  typography: {
    fontFamily: lora.style.fontFamily,
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: ({ownerState}) => ({
          ...(ownerState.severity === 'info' && {
            backgroundColor: '#60a5fa',
          }),
        }),
      },
    },
  },
});

export default theme;
