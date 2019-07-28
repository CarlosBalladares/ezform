import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
ReactDOM.render(<div>Hello</div>, document.getElementById("root"));
// eslint-disable-next-line no-undef
if (typeof module.hot !== "undefined") {
  module.hot.accept(); // eslint-disable-line no-undef
}
