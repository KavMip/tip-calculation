import { Field, FormikErrors, FormikTouched } from "formik";
import { FC, useMemo } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  setStep,
  addFormData,
} from "../../../../App/Layout/MultiStepForm/multiStepFormSlice";
import { MultiStepFormType } from "../../../../interfaces/multiStepForm/multiStepFormTypes";
import Button from "../../../../ui-kits/button/Button";
import styles from "./summary.module.scss";

interface Props {
  values: MultiStepFormType;
  errors: FormikErrors<MultiStepFormType>;
  touched: FormikTouched<MultiStepFormType>;
  handleSubmit: () => void;
}

interface ServiceDataProps {
  name: string;
  price: number;
  yearly: boolean;
}

const ServiceData: FC<ServiceDataProps> = ({ name, price, yearly }) => {
  return (
    <div className={styles["services-data"]}>
      <span className={styles["service-name"]}>{name}</span>
      <span className={styles["service-price"]}>
        {yearly ? `+$${price}/yr` : `+$${price}/mo`}
      </span>
    </div>
  );
};

const Summary: FC<Props> = ({ values, errors, touched, handleSubmit }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const prices = useMemo(() => {
    return {
      monthly: {
        planType: { Arcade: 9, Advanced: 12, Pro: 15 },
        addOns: { onlineService: 1, largerStorage: 2, customizableProfile: 2 },
      },
      yearly: {
        planType: { Arcade: 90, Advanced: 120, Pro: 150 },
        addOns: {
          onlineService: 10,
          largerStorage: 20,
          customizableProfile: 20,
        },
      },
    };
  }, []);

  const { planType, addOns } = values;
  const selectedPrices = values.planType.yearly
    ? prices.yearly
    : prices.monthly;

  const price = useMemo(() => {
    const planTypePrice = selectedPrices.planType[planType.planType] || 0;
    const onlineServicePrice = addOns.onlineService
      ? selectedPrices.addOns.onlineService
      : 0;
    const largerStoragePrice = addOns.largerStorage
      ? selectedPrices.addOns.largerStorage
      : 0;
    const customizableProfilePrice = addOns.customizableProfile
      ? selectedPrices.addOns.customizableProfile
      : 0;

    return (
      planTypePrice +
      onlineServicePrice +
      largerStoragePrice +
      customizableProfilePrice
    );
  }, [planType, addOns, selectedPrices]);

  const handlePrevClick = () => {
    dispatch(setStep(3));
    navigate(`/game-form/add-ons`);
  };

  const submitHandler = () => {
    const hasErrors =
      Object.keys(touched).length === 0 || Object.keys(errors).length > 0;

    if (!hasErrors) {
      dispatch(addFormData(values));
      handleSubmit();
      navigate(`/game-form/success`);
    }
  };

  return (
    <div className={styles["summary__wrapper"]}>
      <h2 className={styles["block-title"]}>Finishing up</h2>
      <p className={styles["block-subtitle"]}>
        Double-check everything looks OK before confirming.
      </p>

      <div className={styles["data__wrapper"]}>
        <div className={styles["line-block"]}>
          <div className={styles["plan-data"]}>
            <div className={styles["definition"]}>
              <h4 className={styles["selected-plan-type"]}>
                {planType.planType} ({planType.yearly ? "Yearly" : "Monthly"})
              </h4>
              <label className={styles["plan-change"]}>
                <Field type="checkbox" name="planType.yearly" />
                Change
              </label>
            </div>
            <span className={styles["plan-price"]}>
              {planType.yearly
                ? `$${selectedPrices.planType[planType.planType]}/yr`
                : `$${selectedPrices.planType[planType.planType]}/mo`}
            </span>
          </div>
          {(addOns.customizableProfile ||
            addOns.largerStorage ||
            addOns.onlineService) && <div className={styles["divider"]} />}
          {addOns.onlineService && (
            <ServiceData
              name="Online Service"
              price={selectedPrices.addOns.onlineService}
              yearly={planType.yearly}
            />
          )}
          {addOns.largerStorage && (
            <ServiceData
              name="Larger Storage"
              price={selectedPrices.addOns.largerStorage}
              yearly={planType.yearly}
            />
          )}
          {addOns.customizableProfile && (
            <ServiceData
              name="Customizable Profile"
              price={selectedPrices.addOns.customizableProfile}
              yearly={planType.yearly}
            />
          )}
        </div>
      </div>
      <div className={styles["total-block"]}>
        <span className={styles["total-definition"]}>
          Total ({planType.yearly ? "per year" : "per month"})
        </span>
        <span className={styles["total-price"]}>
          {planType.yearly ? `+$${price}/yr` : `+$${price}/mo`}
        </span>
      </div>

      {Object.keys(touched).length === 0 ||
        (Object.keys(errors).length > 0 && (
          <div className={styles["errors-block"]}>
            There are errors in your data. Please recheck all the information
            you have inserted previously.
          </div>
        ))}

      <div className={styles["buttons-block"]}>
        <Button
          text="Go back"
          type="button"
          onClickHandler={handlePrevClick}
          styleType="no-background"
        />
        <Button text="Confirm" type="submit" onClickHandler={submitHandler} />
      </div>
    </div>
  );
};

export default Summary;
