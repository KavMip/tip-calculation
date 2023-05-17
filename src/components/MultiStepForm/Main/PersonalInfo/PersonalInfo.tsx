import {
  FC,
  ChangeEventHandler,
  useState,
  useEffect,
} from "react";
import Input from "../../../../ui-kits/input/Input";
import styles from "./personalInfo.module.scss";
import { PersonalInfoType } from "../../../../interfaces/multiStepForm/multiStepFormTypes";
import { ErrorMessage, FormikErrors, FormikTouched } from "formik";
import Button from "../../../../ui-kits/button/Button";
import { useDispatch } from "react-redux";
import { setStep } from "../../../../App/Layout/MultiStepForm/multiStepFormSlice";
import { useNavigate } from "react-router-dom";

interface Props {
  values: PersonalInfoType;
  errors: FormikErrors<PersonalInfoType>;
  touched: FormikTouched<PersonalInfoType>;
  handleChange: ChangeEventHandler<HTMLInputElement>;
}

const PersonalInfo: FC<Props> = ({
  values,
  errors,
  touched,
  handleChange,
}) => {
  const [dataErrors, setDataErrors] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {}, [errors]);

  const handleClick = () => {
    if (
      errors.name !== undefined ||
      errors.email !== undefined ||
      errors.phoneNumber !== undefined
    ) {
      setDataErrors(true);
    } else {
      setDataErrors(false);
      dispatch(setStep(2));
      navigate(`/game-form/select-plan`);
    }
    if (!dataErrors) {
    }
  };

  return (
    <div className={styles["personal-info__wrapper"]}>
      <h2 className={styles["block-title"]}>Personal info</h2>
      <p className={styles["block-subtitle"]}>
        Please provide your name, email address, add phone number.
      </p>
      <div className={styles["input__wrapper"]}>
        <label className={styles["input-label"]} htmlFor="personalInfo.name">
          Name
          <ErrorMessage name="personalInfo.name">
            {(msg) => <span className={styles["error"]}>{msg}</span>}
          </ErrorMessage>
          <Input
            name="personalInfo.name"
            value={values.name}
            className="multi-form-input"
            placeholder="e.g. Stephen King"
            type="text"
            errors={errors.name}
            touched={touched.name}
            handleChange={handleChange}
          />
        </label>
      </div>
      <div className={styles["input__wrapper"]}>
        <label className={styles["input-label"]} htmlFor="personalInfo.email">
          Email
          <ErrorMessage name="personalInfo.email">
            {(msg) => <span className={styles["error"]}>{msg}</span>}
          </ErrorMessage>
          <Input
            name="personalInfo.email"
            value={values.email}
            className="multi-form-input"
            placeholder="e.g. stephenking@lorem.com"
            type="text"
            errors={errors.email}
            touched={touched.email}
            handleChange={handleChange}
          />
        </label>
      </div>
      <div className={styles["input__wrapper"]}>
        <label
          className={styles["input-label"]}
          htmlFor="personalInfo.phoneNumber"
        >
          Phone number
          <ErrorMessage name="personalInfo.phoneNumber">
            {(msg) => <span className={styles["error"]}>{msg}</span>}
          </ErrorMessage>
          <Input
            name="personalInfo.phoneNumber"
            value={values.phoneNumber}
            className="multi-form-input"
            placeholder="e.g. +1 234 567 890"
            type="text"
            errors={errors.phoneNumber}
            touched={touched.phoneNumber}
            handleChange={handleChange}
          />
        </label>
      </div>
      {dataErrors && (
        <div className={styles["errors-block"]}>
          There are errors on your data, please recheck all information you have
          inserted previously.
        </div>
      )}
      <div className={styles["buttons-block"]}>
        <Button text="Next step" type="button" onClickHandler={handleClick} />
      </div>
    </div>
  );
};
export default PersonalInfo;
