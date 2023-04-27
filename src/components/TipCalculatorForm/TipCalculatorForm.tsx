import { FC } from "react";
import "./tipCalculatorForm.scss";
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
} from "formik";
import { tipCalculatorType as TipCalculatorType } from "../../types/tipCalculatorTypes/tipTypes";
import Input from "../../ui-kits/tip-input/Input";
import { DollarIcon } from "../../assets/icons/DollarIcon.jsx";
import { PersonIcon } from "../../assets/icons/PersonIcon.jsx";
import Button from "../../ui-kits/tip-button/Button";

const TipCalculatorForm: FC = () => {
  const initialValues: TipCalculatorType = {
    billAmount: 0,
    tipPercent: "",
    numberOfPeople: 0,
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
        }}
      >
        {({ values, handleChange }) => (
          <Form className="tipForm-wrapper">
            <label className="input-label" htmlFor="billAmount">
              Bill
              <Input name="billAmount" placeholder="0" Icon={DollarIcon} />
            </label>
            <div className="radio-group">Select Tip %</div>
            <div className="group" role="group">
              <Button
                values={values}
                handleChange={handleChange}
                id="radioOption1"
                name="tipPercent"
                type="radio"
                value="5"
              />
              <Button
                values={values}
                handleChange={handleChange}
                id="radioOption2"
                name="tipPercent"
                type="radio"
                value="10"
              />
              <Button
                values={values}
                handleChange={handleChange}
                id="radioOption3"
                name="tipPercent"
                type="radio"
                value="15"
              />
              <Button
                values={values}
                handleChange={handleChange}
                id="radioOption4"
                name="tipPercent"
                type="radio"
                value="25"
              />
              <Button
                values={values}
                handleChange={handleChange}
                id="radioOption5"
                name="tipPercent"
                type="radio"
                value="50"
              />
              <Input
                name="tipPercent"
                className="small-input"
                placeholder="0"
              />
            </div>

            <label className="input-label" htmlFor="numberOfPeople">
              Number of people
              <Input name="numberOfPeople" placeholder="0" Icon={PersonIcon} />
            </label>

            {/* <button type="submit">Submit</button> */}
          </Form>
        )}
      </Formik>
    </>
  );
};

export default TipCalculatorForm;
