import React from "react";
import ReactDOM from "react-dom";
import Clock from "./components/clock";
import FilterTable from "./components/filterTable";

import "./styles.css";

const rootElement = document.getElementById("root");
ReactDOM.render(<FilterTable />, rootElement);
