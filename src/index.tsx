import { render } from "solid-js/web";

import "./index.css";
import App from "./App";
import { loadConfigFromFile } from "vite";

render(() => <App />, document.getElementById("root"));
