import React from "react";
import styles from "./App.module.css";
import BottomNavBar from "./components/BottomNavBar";
import Search from "./views/Search";

const App = () => (
  <>
    <div className={styles.root}>
      <Search />
      <BottomNavBar />
    </div>
  </>
);

export default App;
