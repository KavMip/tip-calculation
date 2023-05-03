import { FC } from "react";
import styles from "./planType.module.scss";

interface Props {
  Icon: FC;
  text: string;
  price: string;
}

const PlanType: FC<Props> = ({ Icon, text, price }) => {
  return (
    <div className={styles["plan-wrapper"]}>
      <div className={styles["icon"]}>
        <Icon />
      </div>
      <div className={styles["plan-info-block"]}>
        <h3 className={styles["plan-name"]}>{text}</h3>
        <p className={styles["plan-price"]}>{price}</p>
      </div>
    </div>
  );
};
export default PlanType;
