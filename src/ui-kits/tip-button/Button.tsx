import { FC } from "react";
import "./button.scss";
import { Field, FieldAttributes } from "formik";

interface Props extends FieldAttributes<any> {
  id: string;
  name: string;
  type: string;
  value: string;
}

const Button: FC<Props> = ({ id, name, type, value, values, handleChange }) => {
  return (
    <Field id={id} name={name} type={type} value={value}>
      {({ field, form, meta }: FieldAttributes<any>) => {
        return (
          <>
            <div className="button">
              <input
                type="radio"
                value={value}
                name={name}
                {...field}
                id={name}
                checked={values.tipPercent === value}
                onChange={handleChange}
              />
              <label className="btn btn-default" htmlFor={name}>
                {value}%
              </label>
            </div>
          </>
        );
      }}
    </Field>
  );
};

export default Button;
