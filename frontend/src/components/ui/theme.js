import { createMuiTheme } from "@material-ui/core/styles"

const green = "#99B898"
const darkGreen = "#708670"
const tan = "#FECEA8"
const lightRed = "#FF847C"
const red = "#E84A5F"
const offBlack = "#2A363B"
const grey = "#747474"
const white = "#fff"

const theme = createMuiTheme({
  palette: {
    primary: {
      main: green,
    },
    secondary: {
      main: darkGreen,
    },
    common: {
      tan,
      lightRed,
      red,
      offBlack,
    },
  },
  typography: {
    h1: {
      fontSize: "4.5rem",
      fontWeight: 700,
      fontStyle: "italic",
      fontFamily: "Philosopher",
    },
    h2: {
      fontSize: "4rem",
      fontWeight: 500,
      fontFamily: "Montserrat",
      color: white,
    },
    h3: {
      fontSize: "2rem",
      fontWeight: 300,
      fontFamily: "Montserrat",
      color: green,
    },
    h4: {
      fontSize: "3rem",
      fontWeight: 700,
      fontStyle: "italic",
      fontFamily: "Philosopher",
      color: white,
    },
    h5: {
      fontSize: "2rem",
      fontWeight: 700,
      fontStyle: "italic",
      fontFamily: "Philosopher",
    },

    body1: {
      fontSize: "1.5rem",
      fontFamily: "Montserrat",
      color: grey,
    },
    body1: {
      fontSize: "2rem",
      fontFamily: "Montserrat",
      color: grey,
    },
  },
  overrides: {
    //global components overrides
  },
})

export default theme
