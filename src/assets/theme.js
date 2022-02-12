import { createTheme } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

const primaryColor = purple[800]

const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: '#f44336',
    },
  },
});
export default theme;