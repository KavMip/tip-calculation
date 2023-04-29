import { FC } from "react";
import styles from "./submitButton.module.scss";
interface Props {
  disabled: boolean;
  handleReset: () => void;
}

const SubmitButton: FC<Props> = ({ disabled, handleReset }) => {
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

export default SubmitButton;
