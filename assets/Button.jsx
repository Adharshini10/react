import { useState } from "react";

function Button() {
  const [text, setText] = useState("Click me!");

  const handleClick = () => {
    setText("You clicked me!!");
    console.log("Button was clicked!");
  };

  return (
    <button onClick={handleClick}>{text}</button>
  );
}

export default Button;
