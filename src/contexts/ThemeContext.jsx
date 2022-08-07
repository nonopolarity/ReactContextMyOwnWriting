import { createContext  } from "react";

export const themeColors = {
    light: {
        fg: "#333",
        bg: "#f8f8f8"
    },
    dark: {
        fg: "#eee",
        bg: "#111"
    }
}
const ThemeContext = createContext(themeColors.light);

export default ThemeContext;

