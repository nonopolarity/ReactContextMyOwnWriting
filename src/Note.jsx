import ThemeContext from "./contexts/ThemeContext";
function Note() {
  return (
    <ThemeContext.Consumer>
      {(colors) => (
        <div
          style={{
            border: "3px dotted blue",
            margin: "18px",
            color: colors.fg,
            background: colors.bg,
          }}
        >
          Note: haha
        </div>
      )}
    </ThemeContext.Consumer>
  );
}

export default Note;
