import { ErrorMessage, Field, useField } from "formik";
import { ReactNode, useState } from "react";
import cs from "classnames";
import EyeIcon from "@/assets/svgs/eye.svg";
import EyeSlashIcon from "@/assets/svgs/eye-slash.svg";
import Typography from "../../typography";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: ReactNode;
  name: string;
  extraDetails?: ReactNode;
  dataCy?: string;
}

const FormInput = ({
  label,
  name,
  id,
  type = "text",
  extraDetails,
  disabled,
  dataCy,
  ...otherProps
}: Props) => {
  const [inputType, setInputType] = useState(type);

  const [, { touched, error }] = useField(name);

  const handlePasswordShow = () => {
    if (inputType === "password") {
      setInputType("text");
    } else {
      setInputType("password");
    }
  };

  const isInvalid = !!touched && !!error;

  return (
    <div className="mb-5">
      <div className="relative w-full">
        {label && (
          <label
            className={cs("text-grey-text font-medium block text-[14px]", {
              "opacity-60 cursor-not-allowed": disabled,
            })}
            htmlFor={id || name}
          >
            {label}
          </label>
        )}
        <Field
          {...otherProps}
          name={name}
          data-cy={dataCy}
          id={id || name}
          type={inputType}
          disabled={disabled}
          className={cs(
            "w-full mt-1 outline-offset-0 text-[14px] text-grey-text font-raleway placeholder:font-raleway duration-100 focus:outline px-4 py-3 border rounded-lg",
            {
              "focus:!outline-error-base/10 focus:!bg-error-base/5 !border-error-base/60":
                isInvalid,
              "focus:!outline-purple-base/10 focus:!bg-purple-base/5 border-grey-text/20 focus:!border-purple-base/60":
                !isInvalid,
              "opacity-70 cursor-not-allowed": disabled,
              "!pr-12": type === "password",
            }
          )}
        />
        {type === "password" && (
          <button
            type="button"
            onClick={handlePasswordShow}
            disabled={disabled}
            className={cs(
              "absolute right-2 bottom-[7px] focus:outline focus:outline-purple-base/10 bg-text-color-50 text-grey-text text-[11px] px-3 py-2 rounded-lg",
              {
                "opacity-60 cursor-not-allowed": disabled,
              }
            )}
          >
            {inputType === "password" && (
              <span>
                <EyeSlashIcon className="w-[14px] h-[14px]" />
              </span>
            )}
            {inputType === "text" && (
              <span>
                <EyeIcon className="w-[14px] h-[14px]" />
              </span>
            )}
          </button>
        )}
      </div>
      <ErrorMessage
        name={name}
        render={(errorMessage) => (
          <Typography variant="body-x-small" className="text-error-base">
            {errorMessage}
          </Typography>
        )}
      />
      {extraDetails && (
        <Typography variant="body-x-small" className="text-grey-text">
          {extraDetails}
        </Typography>
      )}
    </div>
  );
};

export default FormInput;
