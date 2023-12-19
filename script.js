import React, { useState } from "react";
import { createRoot } from "react-dom/client";
function App(props) {
    const [count, setCount] = useState(0);
    return (React.createElement("div", { className: "container" },
        React.createElement("h1", null,
            "Hello, ",
            props.name,
            "!"),
        React.createElement("img", { className: "logo", alt: "logo", src: "https://livecodes.io/livecodes/assets/templates/react.svg" }),
        React.createElement("p", null,
            "You clicked ",
            count,
            " times."),
        React.createElement("button", { onClick: () => setCount(count + 1) }, "Click me")));
}
const root = createRoot(document.querySelector("#app"));
root.render(React.createElement(App, { name: "React" }));
