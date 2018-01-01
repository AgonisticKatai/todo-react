import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

import fontawesome from "@fortawesome/fontawesome";
import brands from "@fortawesome/fontawesome-free-brands";
import { faCheckCircle } from "@fortawesome/fontawesome-free-solid";

fontawesome.library.add(brands, faCheckCircle);

ReactDOM.render(<App />, document.getElementById("root"));
