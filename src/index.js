import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./i18next.js";
import App from "./App";



ReactDOM.render(
  <Suspense fallback={[<div>loading falan filan</div>]}>
    <App />
  </Suspense>,
  document.getElementById("root")
);
