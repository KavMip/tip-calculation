import { FC } from "react";
import TipCalculator from "./Layout/TipCalcuator/TipCalculator";
import styles from "./app.module.scss";

const App: FC = () => {
  return (
    <main className={styles["main"]}>
      <div className={styles["logo-block"]}>
        <span className={styles["logo-top-part"]}>SPLI</span>TTER
      </div>
      <TipCalculator />
    </main>
  );
};

export default App;
