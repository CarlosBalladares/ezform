import { ThemeProvider } from "@material-ui/styles";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import styles from "./index.css";

function Main() {
  React.useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }, []);

  return (
    <ThemeProvider>
      <div className={styles.root}>
        <App />
      </div>
    </ThemeProvider>
  );
}

ReactDOM.render(<Main />, document.getElementById("root"));
// eslint-disable-next-line no-undef
if (typeof module.hot !== "undefined") {
  module.hot.accept(); // eslint-disable-line no-undef
}
