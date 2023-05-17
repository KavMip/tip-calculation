import { FC } from "react";
import TipCalculator from "./Layout/TipCalcuator/TipCalculator";
import styles from "./app.module.scss";
import { Routes, Route, useLocation, Link } from "react-router-dom";
import MultiStepForm from "./Layout/MultiStepForm/MultiStepForm";

const App: FC = () => {
  let currentLocation = useLocation();

  return (
    <main
      className={
        currentLocation.pathname === "/"
          ? styles["main-tip-calculator"]
          : styles["main"]
      }
    >
      <nav className={styles["navigation"]}>
        <div
          className={
            currentLocation.pathname === "/"
              ? `${styles["tip-calculator"]} ${styles["active"]} `
              : styles["tip-calculator"]
          }
        >
          <span> </span>
          <span> </span>
          <span> </span>
          <span> </span>
          <Link to="/">Tip Calculator</Link>
        </div>
        <div className={styles["logo-block"]}>
          <span className={styles["logo-top-part"]}>SPLI</span>TTER
        </div>
        <div
          className={
            currentLocation.pathname.includes("/game-form")
              ? `${styles["tip-calculator"]} ${styles["active"]} `
              : styles["tip-calculator"]
          }
        >
          <span> </span>
          <span> </span>
          <span> </span>
          <span> </span>
          <Link to="/game-form/personal-info">Game App</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<TipCalculator />} />
        <Route path="/game-form/*" element={<MultiStepForm />} />
      </Routes>
    </main>
  );
};

export default App;
