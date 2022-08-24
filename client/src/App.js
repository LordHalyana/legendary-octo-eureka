import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Profile from "./components/Profile.js";
import Backendcheck from "./components/Backend-check";
import Timeline from "./components/Timeline.js";
import CssBaseline from "@mui/material/CssBaseline";
import HonestQuestions from "./components/Honestquestions";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});
function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App">
        <Profile />
        <Timeline />
        <img
          src={logo}
          className="App-logo"
          alt="logo"
          style={{ height: "45px" }}
        />

        <Backendcheck />
        <HonestQuestions />
      </div>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
