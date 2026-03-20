/* import ReactDOM from "react-dom";
import App from "./App";
import "./index.css"

ReactDOM.render(<App />, document.querySelector("#root")); */

import { createRoot } from "react-dom/client";
import React from "react";               // needed if using JSX in StrictMode
import App from "./App";
import "./index.css";

const root = createRoot(document.getElementById("root"));  // most common selector

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);