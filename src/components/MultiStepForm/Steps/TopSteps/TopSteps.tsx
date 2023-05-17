import { FC } from "react";
import styles from "./topSteps.module.scss";
import { useLocation } from "react-router-dom";

const TopSteps: FC = () => {
  const currentLocation = useLocation().pathname;

  const menu = [
    {
      id: 1,
      activePath: ["/game-form/personal-info"],
    },
    {
      id: 2,
      activePath: ["/game-form/select-plan"],
    },
    {
      id: 3,
      activePath: ["/game-form/add-ons"],
    },
    {
      id: 4,
      activePath: ["/game-form/summary", "/game-form/success"],
    },
  ];
  return (
    <div className={styles["step-block"]}>
      {menu.map((el) => (
        <div key={el.id} className={styles["step__wrapper"]}>
          <span
            className={
              el.activePath.includes(currentLocation)
                ? `${styles["step-number"]} ${styles["active"]}`
                : styles["step-number"]
            }
          >
            {el.id}
          </span>
        </div>
      ))}
    </div>
  );
};
export default TopSteps;
