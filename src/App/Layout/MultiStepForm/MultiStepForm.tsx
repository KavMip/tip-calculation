import { FC } from "react";
import styles from "./multiStepForm.module.scss";
import { Formik, Form } from "formik";
import {
  MultiStepFormType,
  PlanType,
} from "../../../interfaces/multiStepForm/multiStepFormTypes";
import SideSteps from "../../../components/MultiStepForm/Steps/SideSteps/SideSteps";
import Main from "../../../components/MultiStepForm/Main/Main";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../../store/store";
import { MultiStepFormValidationSchema } from "../../../validation-schemas/multiStepFormValidationSchema";
import TopSteps from "../../../components/MultiStepForm/Steps/TopSteps/TopSteps";
import { submitForm } from "./multiStepFormSlice";

const MultiStepForm: FC = () => {
  const step = useSelector((state: RootState) => state.multiStepForm.step);
  const dispatch = useDispatch<AppDispatch>();

  const initialValues: MultiStepFormType = {
    personalInfo: {
      name: "",
      email: "",
      phoneNumber: "",
    },
    planType: {
      planType: PlanType.Arcade,
      yearly: false,
    },
    addOns: {
      onlineService: false,
      largerStorage: false,
      customizableProfile: false,
    },
  };

  return (
    <div className={styles["mobile-steps"]}>
      <div className={styles["steps"]}>
        <TopSteps />
      </div>
      <section className={styles["user-data-block"]}>
        <Formik
          initialValues={initialValues}
          validationSchema={MultiStepFormValidationSchema}
          onSubmit={() => {
            dispatch(submitForm());
          }}
        >
          {({ values, errors, touched, handleChange, handleSubmit }) => (
            <Form className={styles["form-block"]}>
              <div className={styles["steps-block"]}>
                <SideSteps step={step} />
              </div>
              <Main
                step={step}
                values={values}
                errors={errors}
                touched={touched}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
              />
            </Form>
          )}
        </Formik>
      </section>
    </div>
  );
};

export default MultiStepForm;
