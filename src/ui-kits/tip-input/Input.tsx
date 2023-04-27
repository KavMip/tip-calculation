import { FC, useState } from "react";
import "./input.scss";

import { Field } from "formik";

type Props = {
  name: string;
  placeholder: string;
  className?: string;
  Icon?: FC;
};

const Input: FC<Props> = ({ name, placeholder, className, Icon }: Props) => {
  const [focused, setFocused] = useState(false);

  return (
    <>
      <Field name={name}>
        {({ field, form, meta }: any) => (
          <div
            className={
              focused && className
                ? `${className} input-wrapper input-wrapper_active`
                : className
                ? `${className} input-wrapper`
                : focused
                ? "input-wrapper input-wrapper_active"
                : "input-wrapper"
            }
          >
            {Icon && (
              <span className="input-icon">
                <Icon />
              </span>
            )}
            <input
              className="input"
              type="text"
              {...field}
              placeholder={placeholder}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
            />
          </div>
        )}
      </Field>
    </>
  );
};
export default Input;
