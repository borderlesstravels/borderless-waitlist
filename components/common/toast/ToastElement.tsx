import React, { FC, ReactNode } from "react";
import cs from "classnames";
import SuccessIcon from "@/assets/svgs/toast-success-icon.svg";
import WarningIcon from "@/assets/svgs/toast-warning-icon.svg";
import TimesIcon from "@/assets/svgs/times.svg";
import InfoIcon from "@/assets/svgs/info.svg";
import Typography from "../typography";

type ToastAppearanceType = "success" | "warning" | "error" | "info";

type ToastContent = {
  title?: string;
  body: string;
};

type ToastElementProps = {
  appearance: ToastAppearanceType;
  autoDismiss: boolean; // inherited from ToastProvider
  autoDismissTimeout: number; // inherited from ToastProvider
  content: ToastContent;
  isRunning: boolean;
  onDismiss: (id?: string) => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  children?: ReactNode;
  transitionProps: string;
};

const ToastElement: FC<ToastElementProps> = ({
  appearance,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  autoDismiss,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  autoDismissTimeout,
  content,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  children,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  isRunning,
  onDismiss,
  transitionProps,
  ...otherProps
}) => {
  const { title = "", body = "" } = content;
  const isSuccess = appearance === "success";
  const isWarning = appearance === "warning";
  const isError = appearance === "error";
  const isInfo = appearance === "info";

  const backUpTitle = isSuccess
    ? "Success"
    : isError
    ? "Error"
    : isInfo
    ? "Info"
    : "Warning";

  return (
    <div
      className={cs(
        "flex max-w-[400px] duration-300 transition data-[closed]:translate-x-full min-w-[200px] ease-in-out bg-white rounded-xl overflow-hidden shadow-xl",
        transitionProps
      )}
      {...otherProps}
    >
      <div
        className={cs({
          "w-20 flex justify-center items-center bg-opacity-30 rounded-l": true,
          "bg-success-base/10 text-primary1-500": isSuccess,
          "bg-yellow-base/10 text-yellow-base": isWarning,
          "bg-error-base/10 text-error-base": isError,
          "bg-blue-base/10 text-blue-base": isInfo,
        })}
      >
        {isSuccess && <SuccessIcon className="w-[35px] h-[35px]" />}
        {isInfo && <InfoIcon className="w-[35px] h-[35px]" />}
        {(isWarning || isError) && (
          <WarningIcon className="w-[35px] h-[35px]" />
        )}
      </div>

      <div className="p-4 flex-1 flex flex-col justify-center">
        <div className="space-y-1">
          <Typography
            variant="body-large"
            className="text-grey-text font-semibold"
          >
            {title || backUpTitle}
          </Typography>
          {body && (
            <Typography variant="body-small" className="text-grey-text">
              {body}
            </Typography>
          )}
        </div>
      </div>

      {onDismiss && (
        <div className="py-4 px-2 flex items-center">
          <button className="rounded" onClick={() => onDismiss()}>
            <TimesIcon className="w-[25px] h-[25px]" />
          </button>
        </div>
      )}
    </div>
  );
};

export type { ToastElementProps, ToastAppearanceType, ToastContent };
export default ToastElement;
