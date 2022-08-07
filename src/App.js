import logo from "./logo.svg";
import "./App.css";
import Container from "./Container";
import ThemeContext, { themeColors } from "./contexts/ThemeContext";
import { useState } from "react";

const colors = { fg: "orange", bg: "white" };
let toggle = true;

function App() {
  // const [toggle, setToggle] = useState(true);
  const [timeNow, setTimeNow] = useState(new Date());

  return (
    <ThemeContext.Provider value={colors}>
      <div
        className="App"
        style={{ border: "3px dotted #07f", margin: "18px" }}
      >
        {" "}
        <h1>Time is {timeNow.toLocaleTimeString()}</h1>
        <Container />
      </div>
      <button
        onClick={() => {
          toggle = !toggle;
          colors.fg = toggle ? "orange" : "black";
        }}
      >
        Toggle colors
      </button>

      <button
        onClick={() => {
          setTimeNow(new Date());
        }}
      >
        Update time
      </button>
    </ThemeContext.Provider>
  );
}

export default App;
