import {
  FC,
  useState,
  ChangeEventHandler,
  FocusEventHandler,
  FocusEvent,
} from "react";
import styles from "./input.module.scss";
import { Field, FieldAttributes } from "formik";

interface Props {
  name: string;
  value: number | string;
  placeholder: string;
  className?: string;
  type: string;
  errors?: string | undefined;
  touched?: boolean | undefined;
  Icon?: FC;
  handleChange: ChangeEventHandler<HTMLInputElement>;
  handleBlur: FocusEventHandler<HTMLInputElement>;
}

const Input: FC<Props> = ({
  name,
  value,
  placeholder,
  className,
  type,
  errors,
  touched,
  Icon,
  handleChange,
  handleBlur,
}: Props) => {
  const [focused, setFocused] = useState(false);

  const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
    setFocused(true);
  };

  const handleBlured = (e: FocusEvent<HTMLInputElement>) => {
    handleBlur(e);
    setFocused(false);
  };

  return (
    <Field name={name}>
      {({ field }: FieldAttributes<any>) => (
        <div
          className={
            errors && touched
              ? `${styles["input-wrapper"]} ${styles["input-error"]}`
              : focused && className
              ? `${styles[className]} ${styles["input-wrapper"]} ${styles["input-wrapper_active"]}`
              : className
              ? `${styles[className]} ${styles["input-wrapper"]}`
              : focused
              ? `${styles["input-wrapper"]} ${styles["input-wrapper_active"]}`
              : `${styles["input-wrapper"]}`
          }
        >
          {Icon && (
            <span className={styles["input-icon"]}>
              <Icon />
            </span>
          )}
          <input
            className={styles["input"]}
            type={type}
            {...field}
            placeholder={placeholder}
            onChange={handleChange}
            onBlur={handleBlured}
            onFocus={handleFocus}
            value={touched ? value : undefined}
          />
        </div>
      )}
    </Field>
  );
};
export default Input;
