import { FC } from "react";
import styles from "./button.module.scss";
interface Props {
  text: string;
  disabled?: boolean;
  type: "button" | "submit" | "reset" | undefined;
  styleType?: "no-background" | undefined;
  onClickHandler?: () => void;
}

const Button: FC<Props> = ({
  text,
  disabled,
  type,
  styleType,
  onClickHandler,
}) => {
  return (
    <button
      type={type}
      className={styleType ? styles[styleType] : styles["btn"]}
      disabled={disabled}
      onClick={onClickHandler}
    >
      {text}
    </button>
  );
};

export default Button;
