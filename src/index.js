import ReactDOM from "react-dom";
import React from "react";
import App from "./components/App/App";
import { Suspense } from "react";

ReactDOM.render(<Suspense fallback={"LOADING...."}><App /></Suspense>, document.getElementById("root"));
