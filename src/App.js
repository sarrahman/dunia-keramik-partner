import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Router from "./routes";
import { Provider } from "react-redux";
import store from "./redux/store";

const theme = createTheme({
  palette: {
    primary: {
      main: "#992d0d",
    },
    secondary: {
      main: "#c36505",
    },
    third: {
      main: "#eaebe8",
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
