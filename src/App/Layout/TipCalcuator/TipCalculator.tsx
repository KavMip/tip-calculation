import { FC } from "react";
import PaymentResult from "../../../components/PaymentResult/PaymentResult";
import TipCalculatorForm from "../../../components/TipCalculatorForm/TipCalculatorForm";
import styles from "./tipCalculator.module.scss";
import { Formik, Form } from "formik";
import { tipCalculatorType as TipCalculatorType } from "../../../types/tipCalculatorTypes/tipTypes";
import { TipFormValidationSchema } from "../../../validation-schemas/tipFormValidationSchema";

const TipCalculator: FC = () => {
  const initialValues: TipCalculatorType = {
    billAmount: 0,
    tipPercent: "0",
    numberOfPeople: 0,
  };
  return (
    <section className={styles["calculator-block"]}>
      <Formik
        initialValues={initialValues}
        validationSchema={TipFormValidationSchema}
        onSubmit={() => {}}
      >
        {({
          values,
          handleChange,
          handleSubmit,
          handleBlur,
          handleReset,
          errors,
          touched,
        }) => (
          <Form className={styles["tipForm-wrapper"]} onSubmit={handleSubmit}>
            <TipCalculatorForm
              values={values}
              errors={errors}
              touched={touched}
              handleChange={handleChange}
              handleBlur={handleBlur}
            />
            <PaymentResult values={values} handleReset={handleReset} />
          </Form>
        )}
      </Formik>
    </section>
  );
};
export default TipCalculator;
