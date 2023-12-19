import React, { useState } from "react";
import { createRoot } from "react-dom/client";

function App(props) {
  const [count, setCount] = useState(0);
  return (
    <div className="container">
      <h1>Hello, {props.name}!</h1>
      <img className="logo" alt="logo" src="https://livecodes.io/livecodes/assets/templates/react.svg" />
      <p>You clicked {count} times.</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

const root = createRoot(document.querySelector("#app"));
root.render(<App name="React" />);
