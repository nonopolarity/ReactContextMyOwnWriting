import logo from "./logo.svg";
import "./App.css";
import Container from "./Container";
import ThemeContext, {themeColors} from "./contexts/ThemeContext";
import { useState } from "react";

function App() {
  const [toggle, setToggle] = useState(true);
  return (
    <ThemeContext.Provider value={toggle ? themeColors.light : themeColors.dark}>
      <div
        className="App"
        style={{ border: "3px dotted #07f", margin: "18px" }}
      >
        <Container />
      </div>
      <button onClick={() => setToggle(t => !t)}>Toggle colors</button>
    </ThemeContext.Provider>
  );
}

export default App;
