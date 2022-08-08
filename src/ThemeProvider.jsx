import ThemeContext, { themeColors } from "./contexts/ThemeContext";
import { useState } from "react";

function ThemeProvider({ children }) {
  const [toggle, setToggle] = useState(true);
  const toggleIt = () => setToggle((t) => !t);

  return (
    <div>
      <ThemeContext.Provider
        value={{
          colors: toggle ? themeColors.light : themeColors.dark,
          toggleIt,
        }}
      >
        {children}
      </ThemeContext.Provider>
    </div>
  );
}

export default ThemeProvider;
