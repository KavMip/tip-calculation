import { FC, ChangeEventHandler, FocusEventHandler } from "react";
import Input from "../../../../ui-kits/input/Input";
import styles from "./personalInfo.module.scss";
import { PersonalInfoType } from "../../../../interfaces/multiStepForm/multiStepFormTypes";
import { ErrorMessage } from "formik";
import Button from "../../../../ui-kits/button/Button";
import { useDispatch } from "react-redux";
import { setStep } from "../../../../App/Layout/MultiStepForm/multiStepFormSlice";
interface Props {
  values: PersonalInfoType;
  errors: any;
  touched: any;
  handleChange: ChangeEventHandler<HTMLInputElement>;
  handleBlur: FocusEventHandler<HTMLInputElement>;
}

const PersonalInfo: FC<Props> = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
}) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setStep(2));
  };

  return (
    <div className={styles["personal-info__wrapper"]}>
      <h2 className={styles["block-title"]}>Personal info</h2>
      <p className={styles["block-subtitle"]}>
        Please provide your name, email address, add phone number.
      </p>
      <div className={styles["input__wrapper"]}>
        <label className={styles["input-label"]} htmlFor="name">
          Name
          <ErrorMessage name="name">
            {(msg) => <span className={styles["error"]}>{msg}</span>}
          </ErrorMessage>
          <Input
            name="name"
            value={values.name}
            className="multi-form-input"
            placeholder="e.g. Stephen King"
            type="text"
            errors={errors.name}
            touched={touched.name}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
        </label>
      </div>
      <div className={styles["input__wrapper"]}>
        <label className={styles["input-label"]} htmlFor="email">
          Email
          <ErrorMessage name="email">
            {(msg) => <span className={styles["error"]}>{msg}</span>}
          </ErrorMessage>
          <Input
            name="email"
            value={values.email}
            className="multi-form-input"
            placeholder="e.g. stephenking@lorem.com"
            type="text"
            errors={errors.email}
            touched={touched.email}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
        </label>
      </div>
      <div className={styles["input__wrapper"]}>
        <label className={styles["input-label"]} htmlFor="phoneNumber">
          Phone number
          <ErrorMessage name="phoneNumber">
            {(msg) => <span className={styles["error"]}>{msg}</span>}
          </ErrorMessage>
          <Input
            name="phoneNumber"
            value={values.phoneNumber}
            className="multi-form-input"
            placeholder="e.g. +1 234 567 890"
            type="text"
            errors={errors.phoneNumber}
            touched={touched.phoneNumber}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
        </label>
      </div>
      <div className={styles["buttons-block"]}>
        <Button text="Next step" type="button" onClickHandler={handleClick} />
      </div>
    </div>
  );
};
export default PersonalInfo;
