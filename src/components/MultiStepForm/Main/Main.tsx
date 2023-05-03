import { FC, ChangeEventHandler, FocusEventHandler } from "react";
import styles from "./main.module.scss";
import {
  MultiStepFormType,
  PlanType,
} from "../../../interfaces/multiStepForm/multiStepFormTypes";
import { FormikErrors, FormikTouched } from "formik";
import PersonalInfo from "./PersonalInfo/PersonalInfo";
import SelectPlan from "./SelectPlan/SelectPlan";
import AddOns from "./AddOns/AddOns";

interface Props {
  step: number;
  values: MultiStepFormType;
  errors: FormikErrors<MultiStepFormType>;
  touched: FormikTouched<MultiStepFormType>;
  handleChange: ChangeEventHandler<HTMLInputElement>;
  handleBlur: FocusEventHandler<HTMLInputElement>;
  handleSubmit: () => void;
}

const Main: FC<Props> = ({
  step,
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
}) => {
  return (
    <div className={styles["main-block"]}>
      {step === 1 && (
        <PersonalInfo
          values={{
            name: values.name,
            email: values.email,
            phoneNumber: values.phoneNumber,
          }}
          errors={{
            name: errors.name,
            email: errors.email,
            phoneNumber: errors.phoneNumber,
          }}
          touched={{
            name: touched.name,
            email: touched.email,
            phoneNumber: touched.phoneNumber,
          }}
          handleChange={handleChange}
          handleBlur={handleBlur}
        />
      )}
      {step === 2 && <SelectPlan />}
      {step === 3 && <AddOns />}
    </div>
  );
};
export default Main;
