import { ChangeEventHandler, FC } from "react";
import styles from "./service.module.scss";
import { Field, FieldAttributes } from "formik";
import { CheckMarkIcon } from "../../../../../assets/icons/CheckMarkIcon";

interface Props {
  text: string;
  description: string;
  price: string;
  name: string;
  value: boolean;
  checked: boolean;
  handleChange: ChangeEventHandler<HTMLInputElement>;
}

const Service: FC<Props> = ({
  text,
  description,
  price,
  name,
  value,
  checked,
  handleChange,
}) => {
  return (
    <Field type="checkbox" name={name} onChange={handleChange}>
      {({ field }: FieldAttributes<any>) => (
        <div
          className={
            checked
              ? `${styles["active"]} ${styles["service-block"]}`
              : styles["service-block"]
          }
        >
          <div className={styles["service-information-block"]}>
            <div
              className={
                checked
                  ? `${styles["marked"]} ${styles["status"]}`
                  : styles["status"]
              }
            >
              {checked && <CheckMarkIcon />}
            </div>
            <label className={styles["toggle"]}>
              <input
                type="checkbox"
                value={value}
                name={name}
                onChange={handleChange}
                {...field}
              />
            </label>
            <div className={styles["text-block"]}>
              <h3 className={styles["text-name"]}>{text}</h3>
              <span className={styles["text-description"]}>{description}</span>
            </div>
          </div>
          <span className={styles["service-price"]}>{price}</span>
        </div>
      )}
    </Field>
  );
};
export default Service;
