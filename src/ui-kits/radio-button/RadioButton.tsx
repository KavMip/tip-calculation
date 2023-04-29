import { FC } from "react";
import styles from "./radioButton.module.scss";
import { Field, FieldAttributes } from "formik";

interface Props extends FieldAttributes<any> {
  id: string;
  name: string;
  type: string;
  value: string;
}

const RadioButton: FC<Props> = ({ id, name, type, value, values, handleChange }) => {
  return (
    <Field id={id} name={name} type={type} value={value}>
      {({ field }: FieldAttributes<any>) => {
        return (
          <>
            <div className={styles["button"]}>
              <input
                type="radio"
                value={value}
                name={name}
                {...field}
                id={name}
                checked={values.tipPercent === value}
                onChange={handleChange}
              />
              <label
                className={`${styles["btn"]} ${styles["btn-default"]}`}
                htmlFor={name}
              >
                {value}%
              </label>
            </div>
          </>
        );
      }}
    </Field>
  );
};

export default RadioButton;
