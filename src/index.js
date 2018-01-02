import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import fontawesome from "@fortawesome/fontawesome";
import brands from "@fortawesome/fontawesome-free-brands";
import {
  faCheckCircle,
  faEdit,
  faTrashAlt
} from "@fortawesome/fontawesome-free-solid";

fontawesome.library.add(brands, faCheckCircle, faEdit, faTrashAlt);

ReactDOM.render(<App />, document.getElementById("root"));
