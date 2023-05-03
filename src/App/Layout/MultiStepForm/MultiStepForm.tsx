import { FC } from "react";
import styles from "./multiStepForm.module.scss";
import { Formik, Form } from "formik";
import {
  MultiStepFormType,
  PlanType,
} from "../../../interfaces/multiStepForm/multiStepFormTypes";
import SideSteps from "../../../components/MultiStepForm/SideSteps/SideSteps";
import Main from "../../../components/MultiStepForm/Main/Main";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";

const MultiStepForm: FC = () => {
  const step = useSelector((state: RootState) => state.multiStepForm.step);

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
        {({
          values,
          errors,
          touched,
          handleChange,
          handleSubmit,
          handleBlur,
        }) => (
          <>
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
                handleBlur={handleBlur}
                handleSubmit={handleSubmit}
              />
            </Form>
          </>
        )}
      </Formik>
    </section>
  );
};
export default MultiStepForm;
