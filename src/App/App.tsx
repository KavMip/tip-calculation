import { FC } from "react";
import TipCalculator from "./Layout/TipCalcuator/TipCalculator";
import styles from "./app.module.scss";
import { useRoutes, useLocation } from "react-router-dom";
import MultiStepForm from "./Layout/MultiStepForm/MultiStepForm";

const App: FC = () => {
  let currentLocation = useLocation();

  const router = useRoutes([
    {
      path: "/",
      element: <TipCalculator />,
      errorElement: <TipCalculator />,
    },
    {
      path: "/check",
      element: <MultiStepForm />,
    },
  ]);

  return (
    <main
      className={
        currentLocation.pathname === "/"
          ? styles["main-tip-calculator"]
          : styles["main"]
      }
    >
      <div className={styles["logo-block"]}>
        <span className={styles["logo-top-part"]}>SPLI</span>TTER
      </div>
      {router}
    </main>
  );
};

export default App;
