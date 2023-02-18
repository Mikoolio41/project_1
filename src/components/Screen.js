import { Textfit } from "react-textfit";
import styles from "../styles/Screen.module.css";

function Screen({ value }) {
  return (
    <Textfit className={styles.screen} mode="single" max={70}>
      {value}
    </Textfit>
  );
}

export default Screen;
