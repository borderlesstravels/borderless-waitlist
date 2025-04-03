import React, { FC, ReactNode } from "react";
import cs from "classnames";

type ToastPlacement =
  | "top-left"
  | "top-center"
  | "top-right"
  | "bottom-left"
  | "bottom-center"
  | "bottom-right";

type ToastContainerProps = {
  hasToasts: boolean;
  placement: ToastPlacement;
  children?: ReactNode;
};

const ToastContainer: FC<ToastContainerProps> = ({
  hasToasts,
  children,
  placement,
}) => {
  const placementClasses: Record<ToastPlacement, string> = {
    "top-left": "top-0 left-0",
    "top-center": "top-0 left-1/2 -translate-x-1/2",
    "top-right": "top-0 right-0",
    "bottom-left": "bottom-0 left-0",
    "bottom-center": "bottom-0 left-1/2 -translate-x-1/2",
    "bottom-right": "bottom-0 right-0",
  };

  const rootClasses = cs(
    {
      "max-h-full fixed z-50 space-y-4 overflow-y-auto overflow-x-hidden": true,
      "pointer-events-none": !hasToasts,
      "px-4 py-6 md:p-10": hasToasts,
    },
    placementClasses[placement]
  );
  return <div className={rootClasses}>{children}</div>;
};

export type { ToastContainerProps, ToastPlacement };
export default ToastContainer;
