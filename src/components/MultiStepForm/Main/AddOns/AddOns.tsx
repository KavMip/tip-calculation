import { ChangeEventHandler, FC } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setStep } from "../../../../App/Layout/MultiStepForm/multiStepFormSlice";
import { AddOnsType } from "../../../../interfaces/multiStepForm/multiStepFormTypes";
import Button from "../../../../ui-kits/button/Button";
import styles from "./addOns.module.scss";
import Service from "./Services/Service";

interface Props {
  values: AddOnsType;
  yearly: boolean;
  handleChange: ChangeEventHandler<HTMLInputElement>;
}

const AddOns: FC<Props> = ({
  values,
  yearly,
  handleChange,
}) => {
  const services = [
    {
      id: 0,
      text: "Online Service",
      description: "Access to multiplayer games",
      priceMonthly: "+$1/mo",
      priceYearly: "+$10/yr",
      name: "addOns.onlineService",
      value: values.onlineService,
      checked: values.onlineService === true,
      handleChange: handleChange,
    },
    {
      id: 1,
      text: "Larger Storage",
      description: "Extra 1TB of cloud save",
      priceMonthly: "+$2/mo",
      priceYearly: "+$20/yr",

      name: "addOns.largerStorage",
      value: values.largerStorage,
      checked: values.largerStorage === true,
      handleChange: handleChange,
    },
    {
      id: 2,
      text: "Customizable profile",
      description: "Custom theme on your profile",
      priceMonthly: "+$2/mo",
      priceYearly: "+$20/yr",

      name: "addOns.customizableProfile",
      value: values.customizableProfile,
      checked: values.customizableProfile === true,
      handleChange: handleChange,
    },
  ];

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleNextClick = () => {
    dispatch(setStep(4));
    navigate(`/game-form/summary`);
  };
  const handlePrevClick = () => {
    dispatch(setStep(2));
    navigate(`/game-form/select-plan`);
  };
  return (
    <div className={styles["add-ons__wrapper"]}>
      <h2 className={styles["block-title"]}>Pick add-ons</h2>
      <p className={styles["block-subtitle"]}>
        Add-ons help enhance your gaming experience.
      </p>
      <div className={styles["select-block"]}>
        {services.map((el) => (
          <div key={el.id}>
            <Service
              text={el.text}
              description={el.description}
              price={yearly ? el.priceYearly : el.priceMonthly}
              name={el.name}
              value={el.value}
              checked={el.checked}
              handleChange={el.handleChange}
            />
          </div>
        ))}
      </div>
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
