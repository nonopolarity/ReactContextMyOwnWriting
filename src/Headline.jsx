import ThemeContext from "./contexts/ThemeContext";
import { useContext } from "react";
import TheTimeNow from "./TheTimeNow";

function Headline() {
  const colors = useContext(ThemeContext);

  return (
    <div
      style={{
        border: "3px dotted blue",
        margin: "18px",
        color: colors.fg,
        background: colors.bg,
      }}
    >
      Headline for today: Good!
      <TheTimeNow />
    </div>
  );
}

export default Headline;
