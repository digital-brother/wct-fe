import {Roboto} from 'next/font/google';
import {createTheme} from '@mui/material/styles';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  palette: {
    mode: 'light',
    quiz: {
      backgroundColor: '#f9f4ee',
      button: {
        backgroundColor: '#fbf5ef',
      },
      container: {
        backgroundColor: '#f3e4dc',
        borderColor: '#f7eee9',
      }
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
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
