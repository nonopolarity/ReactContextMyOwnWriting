import Main from "./Main";
import ThemeContext, { themeColors } from "./contexts/ThemeContext";
import { useContext } from "react";

function Container() {
  const { colors, toggleIt } = useContext(ThemeContext);

  return (
    <div style={{ border: "3px dotted orange", margin: "18px" }}>
      <Main />
      <button onClick={() => toggleIt()}>Toggle colors</button>
    </div>
  );
}

export default Container;
