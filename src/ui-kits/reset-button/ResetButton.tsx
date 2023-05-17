import { FC } from "react";
import styles from "./resetButton.module.scss";
interface Props {
  disabled: boolean;
  handleReset: () => void;
}

const ResetButton: FC<Props> = ({ disabled, handleReset }) => {
  return (
    <button
      className={styles["button"]}
      onClick={handleReset}
      disabled={disabled}
    >
      RESET
    </button>
  );
};

export default ResetButton;
