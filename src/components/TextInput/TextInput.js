import { TextField } from "@material-ui/core";
import React, { useState } from "react";

const TextInput = props => {
  const [value, setValue] = useState(props.value);
  return (
    <>
      <TextField
        onBlur={props.onBlur}
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder={props.label}
      />
      {props.info ? <span className={styles.helpText}>{props.info}</span> : ""}
    </>
  );
};

export default TextInput;
