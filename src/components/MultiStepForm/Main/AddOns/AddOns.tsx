import { FC } from "react";
import { useDispatch } from "react-redux";
import { setStep } from "../../../../App/Layout/MultiStepForm/multiStepFormSlice";
import Button from "../../../../ui-kits/button/Button";
import styles from "./addOns.module.scss";

const AddOns: FC = () => {
  const dispatch = useDispatch();

  const handleNextClick = () => {
    dispatch(setStep(4));
  };
  const handlePrevClick = () => {
    dispatch(setStep(2));
  };
  return (
    <div className={styles["add-ons__wrapper"]}>
      <h2 className={styles["block-title"]}>Pick add-ons</h2>
      <p className={styles["block-subtitle"]}>
        Add-ons help enhance your gaming experience.
      </p>
      

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
export default AddOns;
