import SearchInput from "@/components/SearchInput";
import { Card } from "@material-ui/core";
import React from "react";
import styles from "./QuickSearch.module.css";

const QuickSearch = () => {
  return (
    <Card className={styles.root}>
      <SearchInput label={"Make"} placeholder={"Type to search"} />
    </Card>
  );
};

export default QuickSearch;
