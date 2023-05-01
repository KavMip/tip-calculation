import { FC } from "react";
import styles from "./multiStepForm.module.scss";
import { Formik, Form } from "formik";
import {
  MultiStepFormType,
  PlanType,
} from "../../../interfaces/multiStepForm/multiStepFormTypes";
import SideSteps from "../../../components/MultiStepForm/SideSteps/SideSteps";
import Main from "../../../components/MultiStepForm/Main/Main";

const MultiStepForm: FC = () => {
  const initialValues: MultiStepFormType = {
    name: "",
    email: "",
    phoneNumber: "",
    planType: PlanType.Arcade,
    monthly: true,
    onlineService: false,
    largerStorage: false,
    customizaleProfile: false,
  };

  return (
    <section className={styles["user-data-block"]}>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ values, handleChange }) => (
          <>
            <Form className={styles["form-block"]}>
              <div className={styles["steps-block"]}>
                <SideSteps />
              </div>

              <Main />
            </Form>
          </>
        )}
      </Formik>
    </section>
  );
};
export default MultiStepForm;
