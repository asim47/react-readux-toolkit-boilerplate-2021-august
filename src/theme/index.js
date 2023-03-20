import { createTheme } from "@mui/material";
import { BACKGROUND_COLOR_MAIN, BACKGROUND_COLOR_SECONDARY, ERROR_COLOR, FONT, INFO_COLOR, PRIMARY_COLOR, SECONDARY_COLOR, TEXT_COLOR_MAIN } from "../constants";

export const themeOptions = createTheme({
  palette: {
    primary: {
      main: PRIMARY_COLOR,
    },
    secondary: {
      main: SECONDARY_COLOR,
    },
    background: {
      default: BACKGROUND_COLOR_MAIN,
      paper: BACKGROUND_COLOR_SECONDARY,
    },
    text: {
      primary: TEXT_COLOR_MAIN,
    },
    error: {
      main: ERROR_COLOR,
    },
    info: {
      main: INFO_COLOR,
    },
  },
  typography: {
    fontFamily: FONT,
  },

});