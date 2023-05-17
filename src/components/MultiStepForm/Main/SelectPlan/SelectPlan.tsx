import { FC, ChangeEventHandler } from "react";
import { Field, FieldAttributes } from "formik";
import { ArcadeIcon } from "../../../../assets/icons/ArcadeIcon";
import Button from "../../../../ui-kits/button/Button";
import PlanType from "./PlanType/PlanType";
import styles from "./selectPlan.module.scss";
import { AdvancedIcon } from "../../../../assets/icons/AdvancedIcon";
import { ProIcon } from "../../../../assets/icons/ProIcon";
import { useDispatch } from "react-redux";
import { setStep } from "../../../../App/Layout/MultiStepForm/multiStepFormSlice";
import { useNavigate } from "react-router-dom";
import { SelectPlanType } from "../../../../interfaces/multiStepForm/multiStepFormTypes";
import { PlanType as ValueType } from "../../../../interfaces/multiStepForm/multiStepFormTypes";


interface Props {
  values: SelectPlanType;
  handleChange: ChangeEventHandler<HTMLInputElement>;
}

const SelectPlan: FC<Props> = ({
  values,
  handleChange,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleNextClick = () => {
    dispatch(setStep(3));
    navigate(`/game-form/add-ons`);
  };

  const handlePrevClick = () => {
    dispatch(setStep(1));
    navigate(`/game-form/personal-info`);
  };

  const planValues = [
    {
      id: 0,
      icon: ArcadeIcon,
      text: "Arcade",
      name: "planType.planType",
      price: "$9/mo",
      value: ValueType.Arcade,
      checked: values.planType === ValueType.Arcade,
      handleChange: handleChange,
    },
    {
      id: 1,
      icon: AdvancedIcon,
      text: "Advanced",
      name: "planType.planType",
      price: "$12/mo",
      value: ValueType.Advanced,
      checked: values.planType === ValueType.Advanced,
      handleChange: handleChange,
    },
    {
      id: 2,
      icon: ProIcon,
      text: "Pro",
      name: "planType.planType",
      price: "$15/mo",
      value: ValueType.Pro,
      checked: values.planType === ValueType.Pro,
      handleChange: handleChange,
    },
  ];

  return (
    <div className={styles["select-plan__wrapper"]}>
      <h2 className={styles["block-title"]}>Select your plan</h2>
      <p className={styles["block-subtitle"]}>
        You have the option of monthly or yearly billing.
      </p>
      <div className={styles["plans-block"]}>
        {planValues.map((el) => (
          <div className={styles['plan']} key={el.id}>
            <PlanType
              Icon={el.icon}
              text={el.text}
              name={el.name}
              price={el.price}
              value={el.value}
              checked={el.checked}
              handleChange={el.handleChange}
            />
          </div>
        ))}
      </div>

      <Field name="planType.yearly" value={values.yearly}>
        {({ field }: FieldAttributes<any>) => (
          <div className={styles["period-block"]}>
            <div className={styles["toggle-btn"]}>
              <span className={styles["yearly"]}>Monthly</span>
              <label className={styles["switch"]}>
                <input
                  type="checkbox"
                  id="checkbox"
                  value={values.yearly}
                  onChange={handleChange}
                  checked={values.yearly}
                  {...field}
                />
                <span
                  className={`${styles["slider"]} ${styles["round"]}`}
                ></span>
              </label>
              <span className={styles["yearly"]}>Yearly</span>
            </div>
          </div>
        )}
      </Field>

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
