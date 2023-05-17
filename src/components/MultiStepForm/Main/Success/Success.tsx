import { FC } from "react";
import { SuccessIcon } from "../../../../assets/icons/SuccessIcon";
import styles from "./success.module.scss";

const Success: FC = () => {
  return (
    <div className={styles["success-block"]}>
      <div className={styles["icon"]}>
        <SuccessIcon />
      </div>
      <div className={styles["info-block"]}>
        <h2 className={styles["info-title"]}>Thank you!</h2>
        <p className={styles["info-subtitle"]}>
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </div>
    </div>
  );
};

export default Success;
