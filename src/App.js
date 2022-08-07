import "./App.css";
import Container from "./Container";
import ThemeContext, { themeColors } from "./contexts/ThemeContext";
import { useState } from "react";
import TheTimeNow from "./TheTimeNow";

function App() {
  const [toggle, setToggle] = useState(true);
  return (
    <div>
      <ThemeContext.Provider value={themeColors.light}>
        <div
          className="App"
          style={{ border: "3px dotted #07f", margin: "18px" }}
        >
          <Container />
        </div>

        <TheTimeNow />
      </ThemeContext.Provider>
      <ThemeContext.Provider value={themeColors.light}>
        <div
          className="App"
          style={{ border: "3px dotted #07f", margin: "18px" }}
        >
          <Container />
        </div>

        <TheTimeNow />
      </ThemeContext.Provider>
      <button onClick={() => setToggle((t) => !t)}>Toggle colors</button>
    </div>
  );
}

export default App;
