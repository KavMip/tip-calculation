import React, { FC, useState, useRef, useEffect, useCallback } from "react";
import classNames from "classnames";
import styles from "./input.module.scss";
import { Field, FieldAttributes } from "formik";

interface Props {
  name: string;
  value: number | string | "" | undefined;
  placeholder: string;
  className?: string;
  type: string;
  errors?: string | undefined;
  touched?: boolean | undefined;
  Icon?: FC;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
}

const Input: FC<Props> = ({
  name,
  value,
  placeholder,
  className,
  type,
  errors,
  touched,
  Icon,
  handleChange,
}: Props) => {
  const [focused, setFocused] = useState(false);
  const inputWrapperRef = useRef<HTMLDivElement | null>(null);

  const wrapperClassNames = classNames(
    styles["input-wrapper"],
    className && styles[className],
    focused && styles["input-wrapper_active"],
    errors && touched && styles["input-error"]
  );

  const handleFocus = useCallback(() => {
    setFocused(true);
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      if (inputWrapperRef.current && !inputWrapperRef.current.contains(target)) {
        setFocused(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <Field name={name}>
      {({ field }: FieldAttributes<any>) => (
        <div ref={inputWrapperRef} className={wrapperClassNames}>
          {Icon && (
            <span className={styles["input-icon"]}>
              <Icon />
            </span>
          )}
          <input
            className={styles["input"]}
            type={type}
            placeholder={placeholder}
            onChange={handleChange}
            onFocus={handleFocus}
            value={value}
            {...field}
          />
        </div>
      )}
    </Field>
  );
};

export default Input;