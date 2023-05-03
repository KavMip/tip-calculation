import { FC } from "react";
import styles from "./button.module.scss";
interface Props {
  text: string;
  type: "button" | "submit" | "reset" | undefined;
  styleType?: "no-background" | undefined;
  onClickHandler?: () => void;
  onSubmitHandler?: () => void;
}

const Button: FC<Props> = ({
  text,
  type,
  styleType,
  onClickHandler,
  onSubmitHandler,
}) => {
  return (
    <button
      type={type}
      className={styleType ? styles[styleType] : styles["btn"]}
      onClick={onClickHandler}
    >
      {text}
    </button>
  );
};

export default Button;
