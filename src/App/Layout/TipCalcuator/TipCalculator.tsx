import PaymentResult from "../../../components/PaymentResult/PaymentResult";
import TipCalculatorForm from "../../../components/TipCalculatorForm/TipCalculatorForm";
import styles from "./tipCalculator.module.scss";

const TipCalculator = () => {
  return (
    <section className={styles["calculator-block"]}>
      <TipCalculatorForm />
      <PaymentResult />
    </section>
  );
};
export default TipCalculator;
