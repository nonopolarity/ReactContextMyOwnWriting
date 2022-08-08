import ThemeContext, { themeColors } from "./contexts/ThemeContext";
import { useState } from "react";

function ThemeProvider2({ children }) {
  const [toggle, setToggle] = useState(true);
  const toggleIt = () => setToggle((t) => !t);

  return (
    <div>
      <ThemeContext.Provider
        value={{
          colors: themeColors.light,
          toggleIt,
        }}
      >
        {children}
      </ThemeContext.Provider>
    </div>
  );
}

export default ThemeProvider2;
