import "./App.css";
import ThemeProvider from "./ThemeProvider";
import ThemeProvider2 from "./ThemeProvider2";
import Container from "./Container";
import ThemeContext, { themeColors } from "./contexts/ThemeContext";
import { useState, useContext } from "react";
import TheTimeNow from "./TheTimeNow";

function App() {
  return (
    <div>
      <ThemeProvider>
        <div
          className="App"
          style={{ border: "3px dotted #07f", margin: "18px" }}
        >
          <Container />
        </div>

        <TheTimeNow />
      </ThemeProvider>
      <ThemeProvider2>
        <div
          className="App"
          style={{ border: "3px dotted #07f", margin: "18px" }}
        >
          <Container />
        </div>

        <TheTimeNow />
      </ThemeProvider2>
    </div>
  );
}

export default App;
