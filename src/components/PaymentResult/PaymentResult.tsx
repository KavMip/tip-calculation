import { FC } from "react";
import "./paymentResult.scss";

const PaymentResult: FC = () => {
  return (
    <div className="result-block">
      <div className="payment-block">
        <p className="payment-description">
          Tip Amount <span className="payment-per-person">/ person</span>
        </p>
        <p className="payment-amount">$0.00</p>
      </div>
      <div className="payment-block">
        <p className="payment-description">
          Total <span className="payment-per-person">/ person</span>
        </p>
        <p className="payment-amount">$0.00</p>
      </div>
      {/* <button></button> */}
    </div>
  );
};

export default PaymentResult;
