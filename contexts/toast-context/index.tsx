"use client";

import React, {
  createContext,
  lazy,
  ReactNode,
  useContext,
  useState,
} from "react";
import {
  AddToast,
  HasToast,
  RemoveAllToasts,
  RemoveToast,
  ToastId,
  ToastType,
  UpdateToast,
} from "./types";
import { ToastContent, ToastPlacement } from "@/components/common/toast";
import { DURATION_5_SECS_MILLISECONDS } from "@/constants/time";
import { getTransitionDirection, noop } from "./utils";
import { v4 } from "uuid";
import { TOAST_TRANSITION_CLASSES } from "./constants";
import { isUndefined } from "@/utils/type";

const ToastContextInner = lazy(
  () => import("@/components/common/toast/ToastContextInner")
);

interface ToastProviderProps {
  /**
   * Whether or not to dismiss the toast automatically after autoDismissTimeout.
   */
  autoDismiss?: boolean;
  /**
   * The time until a toast will be dismissed automatically, in milliseconds.
   */
  autoDismissTimeout?: number;
  /**
   * App content
   */
  children: ReactNode;
  /**
   * Where, in relation to the viewport, to place the toasts
   */
  placement?: ToastPlacement;
}

interface IToastContext {
  hasToast: HasToast;
  addToast: AddToast;
  updateToast: UpdateToast;
  removeToast: RemoveToast;
  removeAllToasts: RemoveAllToasts;
  toasts: ToastType[];
  handleSuccessToast: (content: ToastContent) => void;
  handleErrorToast: (content: ToastContent) => void;
  handleWarningToast: (content: ToastContent) => void;
  handleInfoToast: (content: ToastContent) => void;
}

const ToastContext = createContext<IToastContext | undefined>(undefined);

const ToastProvider = ({
  children,
  autoDismiss = false,
  autoDismissTimeout = DURATION_5_SECS_MILLISECONDS,
  placement = "top-right",
}: ToastProviderProps) => {
  const [toasts, setToasts] = useState<ToastType[]>([]);

  const hasToast: HasToast = (id) => {
    if (!toasts.length) {
      return false;
    }
    return toasts.findIndex((t) => t.id === id) !== -1;
  };

  const onDismiss =
    (id: ToastId, cb: ToastType["onDismiss"] = noop) =>
    () => {
      cb(id);
      removeToast(id);
    };

  const addToast: AddToast = (content, options) => {
    const id = (options && options.id) || v4();
    // const callback = () => cb(id);

    if (hasToast(id)) {
      return;
    }

    const newToast: ToastType = {
      content,
      id,
      ...{ appearance: "success" },
      ...options,
    };
    const updatedToasts = [...toasts, newToast];
    setToasts(updatedToasts);

    return id;
  };

  const removeToast: RemoveToast = (id) => {
    if (!hasToast(id)) {
      return;
    }
    // const callback = () => cb(id);

    setToasts((prev) => {
      const updatedToasts = prev.filter((t) => t.id !== id);
      return updatedToasts;
    });
  };

  const removeAllToasts: RemoveAllToasts = () => {
    if (!toasts.length) {
      return;
    }

    toasts.forEach((t) => removeToast(t.id));
  };

  const updateToast: UpdateToast = (id, options = {}) => {
    if (!hasToast(id)) {
      return;
    }
    // const callback = () => cb(id);

    setToasts((prev) => {
      const old = [...prev];
      const i = old.findIndex((t) => t.id === id);
      const updatedToast: ToastType = { ...old[i], ...options };
      const updatedToasts = [
        ...old.slice(0, i),
        updatedToast,
        ...old.slice(i + 1),
      ];
      return updatedToasts;
    });
  };

  const handleSuccessToast = (content: ToastContent) => {
    addToast(content, { appearance: "success" });
  };

  const handleErrorToast = (content: ToastContent) => {
    addToast(content, { appearance: "error" });
  };

  const handleWarningToast = (content: ToastContent) => {
    addToast(content, { appearance: "warning" });
  };

  const handleInfoToast = (content: ToastContent) => {
    addToast(content, { appearance: "info" });
  };

  const transitionDirection = getTransitionDirection(placement);
  const transitionProps = TOAST_TRANSITION_CLASSES[transitionDirection];

  const value: IToastContext = {
    addToast,
    hasToast,
    removeAllToasts,
    removeToast,
    toasts,
    updateToast,
    handleErrorToast,
    handleSuccessToast,
    handleWarningToast,
    handleInfoToast,
  };

  return (
    <ToastContext.Provider value={value}>
      {children}
      <ToastContextInner
        inheritedAutoDismiss={autoDismiss}
        inheritedAutoDismissTimeout={autoDismissTimeout}
        onDismissFunc={onDismiss}
        placement={placement}
        toasts={toasts}
        transitionProps={transitionProps}
      />
    </ToastContext.Provider>
  );
};

export const useToasts = () => {
  const context = useContext(ToastContext);

  if (isUndefined(context)) {
    throw Error("useToasts must be used within a ToastProvider");
  }

  return context;
};

export default ToastProvider;
