import { FC, ChangeEventHandler, FocusEventHandler } from "react";
import styles from "./tipCalculatorForm.module.scss";
import { ErrorMessage, FormikErrors, FormikTouched } from "formik";
import Input from "../../../ui-kits/tip-input/Input";
import { DollarIcon } from "../../../assets/icons/DollarIcon.jsx";
import { PersonIcon } from "../../../assets/icons/PersonIcon.jsx";
import RadioButton from "../../../ui-kits/radio-button/RadioButton";
import { tipCalculatorType as TipCalculatorType } from "../../../interfaces/tipsForm/tipTypes";

interface Props {
  values: TipCalculatorType;
  errors: FormikErrors<TipCalculatorType>;
  touched: FormikTouched<TipCalculatorType>;
  handleChange: ChangeEventHandler<HTMLInputElement>;
  handleBlur: FocusEventHandler<HTMLInputElement>;
}

const TipCalculatorForm: FC<Props> = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
}) => {
  return (
    <div className={styles["data-block"]}>
      <label className={styles["input-label"]} htmlFor="billAmount">
        Bill
        <ErrorMessage name="billAmount">
          {(msg) => <span className={styles["error"]}>{msg}</span>}
        </ErrorMessage>
        <Input
          name="billAmount"
          value={values.billAmount}
          placeholder="0"
          type="number"
          errors={errors.billAmount}
          touched={touched.billAmount}
          Icon={DollarIcon}
          handleChange={handleChange}
          handleBlur={handleBlur}
        />
      </label>
      <div className={styles["radio-group"]}>
        Select Tip %
        <ErrorMessage name="tipPercent">
          {(msg) => <span className={styles["error"]}>{msg}</span>}
        </ErrorMessage>
        <div className={styles["group"]} role="group">
          <RadioButton
            values={values}
            handleChange={handleChange}
            id="radioOption1"
            name="tipPercent"
            type="radio"
            value="5"
          />
          <RadioButton
            values={values}
            handleChange={handleChange}
            id="radioOption2"
            name="tipPercent"
            type="radio"
            value="10"
          />
          <RadioButton
            values={values}
            handleChange={handleChange}
            id="radioOption3"
            name="tipPercent"
            type="radio"
            value="15"
          />
          <RadioButton
            values={values}
            handleChange={handleChange}
            id="radioOption4"
            name="tipPercent"
            type="radio"
            value="25"
          />
          <RadioButton
            values={values}
            handleChange={handleChange}
            id="radioOption5"
            name="tipPercent"
            type="radio"
            value="50"
          />
          <Input
            name="tipPercent"
            value={values.tipPercent}
            className="small-input"
            placeholder="Custom"
            type="number"
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
        </div>
      </div>

      <label className={styles["input-label"]} htmlFor="numberOfPeople">
        Number of people
        <ErrorMessage name="numberOfPeople">
          {(msg) => <span className={`${styles["error"]} ${styles["above"]}`}>{msg}</span>}
        </ErrorMessage>
        <Input
          name="numberOfPeople"
          value={values.numberOfPeople}
          placeholder="0"
          type="number"
          errors={errors.numberOfPeople}
          touched={touched.numberOfPeople}
          Icon={PersonIcon}
          handleChange={handleChange}
          handleBlur={handleBlur}
        />
        <ErrorMessage name="numberOfPeople">
          {(msg) => <span className={`${styles["error"]} ${styles["below"]}`}>{msg}</span>}
        </ErrorMessage>
      </label>
    </div>
  );
};

export default TipCalculatorForm;
