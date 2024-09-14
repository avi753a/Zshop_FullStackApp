import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
      primary: {
        main: '#0000FF', // Blue
      },
      secondary: {
        main: '#808080', // Gray
      },
      success: {
        main: '#008000', // Green
      },
      info: {
        main: '#00FFFF', // Cyan
      },
      warning: {
        main: '#FFA500', // Orange
      },
      error: {
        main: '#FF0000', // Red
      },
      background: {
        default: 'rgb(218, 218, 218)', // Primary Background
        paper: '#FFFFFF', // Light (default paper background)
      },
      text: {
        primary: '#000000', // Black
        secondary: '#808080', // Gray
      },
    },
  
    
  });