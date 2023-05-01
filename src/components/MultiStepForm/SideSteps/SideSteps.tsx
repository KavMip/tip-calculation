import { FC } from "react";
import styles from "./sideSteps.module.scss";

const SideSteps: FC = () => {
  const menu = [
    { id: 1, number: "STEP 1", name: "YOUR INFO" },
    { id: 2, number: "STEP 2", name: "SELECT PLAN" },
    { id: 3, number: "STEP 3", name: "ADD-ONS" },
    { id: 4, number: "STEP 4", name: "SUMMARY" },
  ];
  return (
    <div className={styles["side-block"]}>
      {menu.map((el) => (
        <div key={el.id} className={styles["step__wrapper"]}>
          <span className={styles["step-number"]}>{el.id}</span>
          <div className={styles["step-info-block"]}>
            <span className={styles["step-number-text"]}>{el.number}</span>
            <span className={styles["step-info-text"]}>{el.name}</span>
          </div>
        </div>
      ))}
    </div>
  );
};
export default SideSteps;
