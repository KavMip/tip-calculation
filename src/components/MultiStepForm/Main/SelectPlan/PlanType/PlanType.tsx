import { ChangeEventHandler, FC } from "react";
import styles from "./planType.module.scss";
import { Field, FieldAttributes } from "formik";

interface Props {
  Icon: FC;
  text: string;
  name: string;
  price: string;
  value: string;
  checked: boolean;
  handleChange: ChangeEventHandler<HTMLInputElement>;
}

const PlanType: FC<Props> = ({
  Icon,
  text,
  name,
  price,
  value,
  checked,
  handleChange,
}) => {
  return (
    <Field name={name} type="radio" value={value}>
      {({ field }: FieldAttributes<any>) => (
        <div
          className={
            checked
              ? `${styles["plan-wrapper"]} ${styles["active"]}`
              : styles["plan-wrapper"]
          }
        >
          <div className={styles["icon"]}>
            <Icon />
          </div>
          <input
            type="radio"
            value={value}
            name={name}
            onChange={handleChange}
            {...field}
          />
          <div className={styles["plan-info-block"]}>
            <h3 className={styles["plan-name"]}>{text}</h3>
            <p className={styles["plan-price"]}>{price}</p>
          </div>
        </div>
      )}
    </Field>
  );
};
export default PlanType;
