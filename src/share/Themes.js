import { LineWeight } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { create } from '@mui/material/styles/createTransitions';

export const fontColors = {
  white1: '#fff',
  white2: '#B2C6CD',
  gray: '#6C7275',
  orange: '#D84C10',
  green: '#91BE01',
  background: '#030A0E'
}

export const paperTheme = createTheme({ 
  palette: {
    mode: 'dark',
  },
    components: {
      // Name of the component
      MuiPaper: {
        defaultProps: {
          // The props to change the default for.
          //disableRipple: true, // No more ripple, on the whole application 💣!
          elevaviton: 4,
          background: '#fbfbfb'//'linear-gradient(0deg, rgba(12,24,32,1) 100%, rgba(3,11,20,1) 50%)',
        },
        styleOverrides: {
            // Name of the slot
            root: {
              // Some CSS
              fontSize: '1rem',
              background: 'linear-gradient(0deg, rgba(12,24,32,1) 100%, rgba(3,11,20,1) 50%)',
              color: fontColors.white2,
              sx: '',
              border: '1px solid #6C727540'
            },
          },
      },
      Input: {
        defaultProps:{
          color: 'success'
        },

        styleOverrides: {
          
          color: 'green',//fontColors.orange,
          fontSize: '58px',
          lineHeight: '70px',
          LineWeight: '200'
        },
        root: {
          color: 'green',
          border: '3px solid #fff',
          "&:before": {
            borderBottomColor: "red"
          },
          "&:hover:not(.Mui-focused):before": {
            borderBottomColor: "green"
          },
          "&:after": {
            // focused
            borderBottomColor: "purple"
          }
        },
        underline: {
          "&:before": {
            borderBottomColor: "red"
          },
          "&:hover:not(.Mui-focused):before": {
            borderBottomColor: "green"
          },
          "&:after": {
            // focused
            borderBottomColor: "purple"
          }
        }
      },
    },
  });
  