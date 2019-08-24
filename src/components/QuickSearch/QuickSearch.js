import SearchInput from "@/components/SearchInput";
import { Button, Card, Typography } from "@material-ui/core";
import React from "react";
import styles from "./QuickSearch.module.css";

const QuickSearch = () => {
  return (
    <div className={styles.root}>
      <Typography variant={"h5"} gutterBottom>
        Busca el auto de tus sueños
      </Typography>
      <Card className={styles.searchForm}>
        <div className={styles.row}>
          <SearchInput
            placeholder={"Marca y modelo"}
            suggestions={[
              { label: "Suzuki Vitara" },
              { label: "Mazda (todos)" },
              { label: "Mazda 2" },
              { label: "Mazda 3" },
              { label: "Mazda Cx3" }
            ]}
          />
        </div>
        <div className={styles.row}>
          {/* <SearchInput placeholder={"Maximo Precio"} />
          <SearchInput placeholder={"Departamento"} /> */}
        </div>
        <div className={styles.row}>
          <Button> Buscar </Button>
        </div>
      </Card>
    </div>
  );
};

export default QuickSearch;
