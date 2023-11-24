
function ColorButtons({ backgroundColor, COLORS, count, onButtonClick }) {

  return (
    <div
      className="App"
      style={{
        backgroundColor,
      }}
    >
      <h2 color="black">color changed: {count}</h2>
      {COLORS.map((color) => (
        <button
          type="button"
          key={color}
          onClick={onButtonClick(color)}
          className={backgroundColor === color ? "selected" : ""}
        >
          {color}
        </button>
      ))}
    </div>
  );
}

export default ColorButtons;
