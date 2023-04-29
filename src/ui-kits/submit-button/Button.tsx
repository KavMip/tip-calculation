import { FC } from "react";
import styles from "./button.module.scss";
type Props = {
  handleReset: () => void;
};

const Button: FC<Props> = ({ handleReset }) => {
  return (
    <>
      <button className={styles["button"]} onClick={handleReset}>
        RESET
      </button>
    </>
  );
};

export default Button;
