import React from "react";
import styles from "../styles/Wrapper.module.css";
import Button from "./Button";
import Screen from "./Screen";

function wrapper() {
  return (
    <div className={styles.wrapper}>
      <Screen />
      <Button />
    </div>
  );
}

export default wrapper;
