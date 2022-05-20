import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Router from "./routes";
import { Provider } from "react-redux";
import store from "./redux/store";

const theme = createTheme({
  palette: {
    primary: {
      main: "#16666f",
    },
    secondary: {
      main: "#2a96a2",
    },
    third: {
      main: "#dfe6ee",
    },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Router />
      </Provider>
    </ThemeProvider>
  );
}
