import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
    breakpoints: {
        values: {
          xs: 0,
          sm: 600,
          md: 900,
          lg: 1200,
          xl: 1536,
        },
      },
    palette: {
        primary: {
            main: '#5E25FF',
        },
        secondary: {
            main: '#19857b',
        },
        text: {
            main: '#102542',
        },
        error: {
            main: red.A400,
        },
    },
});

export default theme;