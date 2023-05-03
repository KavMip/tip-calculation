import { FC } from "react";
import { ErrorMessage } from "formik";
import { ArcadeIcon } from "../../../../assets/icons/ArcadeIcon";
import Button from "../../../../ui-kits/button/Button";
import PlanType from "./PlanType/PlanType";
import styles from "./selectPlan.module.scss";
import { AdvancedIcon } from "../../../../assets/icons/AdvancedIcon";
import { ProIcon } from "../../../../assets/icons/ProIcon";
import { useDispatch } from "react-redux";
import { setStep } from "../../../../App/Layout/MultiStepForm/multiStepFormSlice";

const SelectPlan: FC = () => {
  const dispatch = useDispatch();

  const handleNextClick = () => {
    dispatch(setStep(3));
  };
  const handlePrevClick = () => {
    dispatch(setStep(1));
  };
  const planValues = [
    { id: 0, icon: ArcadeIcon, name: "Arcade", price: "$9/mo" },
    { id: 1, icon: AdvancedIcon, name: "Advanced", price: "$12/mo" },
    { id: 2, icon: ProIcon, name: "Pro", price: "$15/mo" },
  ];
  return (
    <div className={styles["select-plan__wrapper"]}>
      <h2 className={styles["block-title"]}>Select your plan</h2>
      <p className={styles["block-subtitle"]}>
        You have the option of monthly or yearly billing.
      </p>
      <div className={styles["plans-block"]}>
        {planValues.map((el) => (
          <div key={el.id}>
            <PlanType Icon={el.icon} text={el.name} price={el.price} />
          </div>
        ))}
      </div>

      <div className={styles["period-block"]}>
        <div className={styles["toggle-btn"]}>
          <span className={styles["monthly"]}>Monthly</span>
          <label className={styles["switch"]}>
            <input type="checkbox" id="checkbox" />
            <span className={`${styles["slider"]} ${styles["round"]}`}></span>
          </label>
          <span className={styles["yearly"]}>Yearly</span>
        </div>
      </div>
      {/* <div className={styles["input__wrapper"]}>
        <label className={styles["input-label"]} htmlFor="name">
          Name
          <ErrorMessage name="name">
            {(msg) => <span className={styles["error"]}>{msg}</span>}
          </ErrorMessage>
        </label>
      </div> */}

      <div className={styles["buttons-block"]}>
        <Button
          text="Go back"
          type="button"
          onClickHandler={handlePrevClick}
          styleType="no-background"
        />
        <Button
          text="Next step"
          type="button"
          onClickHandler={handleNextClick}
        />
      </div>
    </div>
  );
};
export default SelectPlan;
