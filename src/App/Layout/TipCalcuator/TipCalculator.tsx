import { FC } from "react";
import PaymentResult from "../../../components/TipCalculator/PaymentResult/PaymentResult";
import TipCalculatorForm from "../../../components/TipCalculator/TipCalculatorForm/TipCalculatorForm";
import styles from "./tipCalculator.module.scss";
import { Formik, Form } from "formik";
import { tipCalculatorType as TipCalculatorType } from "../../../interfaces/tipsForm/tipTypes";
import { TipFormValidationSchema } from "../../../validation-schemas/tipFormValidationSchema";

const TipCalculator: FC = () => {
  const initialValues: TipCalculatorType = {
    billAmount: "",
    tipPercent: "",
    numberOfPeople: "",
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
            />
            <PaymentResult values={values} handleReset={handleReset} />
          </Form>
        )}
      </Formik>
    </section>
  );
};
export default TipCalculator;
