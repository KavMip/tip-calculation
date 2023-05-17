import { FC, ChangeEventHandler } from "react";
import styles from "./main.module.scss";
import { MultiStepFormType } from "../../../interfaces/multiStepForm/multiStepFormTypes";
import { FormikErrors, FormikTouched } from "formik";
import PersonalInfo from "./PersonalInfo/PersonalInfo";
import SelectPlan from "./SelectPlan/SelectPlan";
import AddOns from "./AddOns/AddOns";
import Summary from "./Summary/Summary";
import { Route, Routes } from "react-router-dom";
import Success from "./Success/Success";

interface Props {
  step: number;
  values: MultiStepFormType;
  errors: FormikErrors<MultiStepFormType>;
  touched: FormikTouched<MultiStepFormType>;
  handleChange: ChangeEventHandler<HTMLInputElement>;
  handleSubmit: () => void;
}

const Main: FC<Props> = ({
  step,
  values,
  errors,
  touched,
  handleChange,
  handleSubmit,
}) => {
  return (
    <div className={styles["main-block"]}>
      <Routes>
        <Route
          path="/personal-info"
          element={
            <PersonalInfo
              values={{
                name: values.personalInfo.name,
                email: values.personalInfo.email,
                phoneNumber: values.personalInfo.phoneNumber,
              }}
              errors={{
                name: errors.personalInfo?.name,
                email: errors.personalInfo?.email,
                phoneNumber: errors.personalInfo?.phoneNumber,
              }}
              touched={{
                name: touched.personalInfo?.name,
                email: touched.personalInfo?.email,
                phoneNumber: touched.personalInfo?.phoneNumber,
              }}
              handleChange={handleChange}
            />
          }
        />
        <Route
          path="/select-plan"
          element={
            <SelectPlan
              values={{
                planType: values.planType.planType,
                yearly: values.planType.yearly,
              }}
              handleChange={handleChange}
            />
          }
        />
        <Route
          path="/add-ons"
          element={
            <AddOns
              values={{
                onlineService: values.addOns.onlineService,
                largerStorage: values.addOns.largerStorage,
                customizableProfile: values.addOns.customizableProfile,
              }}
              yearly={values.planType.yearly}
              handleChange={handleChange}
            />
          }
        />
        <Route
          path="/summary"
          element={
            <Summary
              values={values}
              errors={errors}
              touched={touched}
              handleSubmit={handleSubmit}
            />
          }
        />
        <Route path="/success" element={<Success />} />
      </Routes>
    </div>
  );
};
export default Main;
