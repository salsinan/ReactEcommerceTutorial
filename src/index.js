import React from "react";
import ReactDOM from "react-dom";
import "jquery";
import "../node_modules/popper.js/dist/umd/popper";
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { NavBar } from "./NavBar.jsx";
import "./index.css";
import { App } from "./App";

ReactDOM.render(<App />, document.getElementById("root"));