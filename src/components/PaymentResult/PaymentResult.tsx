import { FC, useMemo } from "react";
import styles from "./paymentResult.module.scss";
import { tipCalculatorType as TipCalculatorType } from "../../types/tipCalculatorTypes/tipTypes";
import Button from "../../ui-kits/submit-button/Button";

type Props = {
  values: TipCalculatorType;
  handleReset: () => void;
};

const PaymentResult: FC<Props> = ({ values, handleReset }) => {
  const tipAmount = useMemo(() => {
    return (
      (values.billAmount * (+values.tipPercent / 100)) / values.numberOfPeople
    );
  }, [values]);

  const totalAmount = useMemo(() => {
    return tipAmount + values.billAmount / values.numberOfPeople;
  }, [values, tipAmount]);

  return (
    <div className={styles["result-block"]}>
      <div className={styles["payment-block"]}>
        <p className={styles["payment-description"]}>
          Tip Amount{" "}
          <span className={styles["payment-per-person"]}>/ person</span>
        </p>
        <p className={styles["payment-amount"]}>
          {tipAmount && isFinite(tipAmount)
            ? `$ ${tipAmount.toFixed(2)}`
            : "$0.00"}
        </p>
      </div>
      <div className={styles["payment-block"]}>
        <p className={styles["payment-description"]}>
          Total <span className={styles["payment-per-person"]}>/ person</span>
        </p>
        <p className={styles["payment-amount"]}>
          {totalAmount && isFinite(totalAmount)
            ? `$ ${totalAmount.toFixed(2)}`
            : "$0.00"}
        </p>
      </div>
      <Button handleReset={handleReset}></Button>
    </div>
  );
};

export default PaymentResult;
