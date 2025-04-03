import { ToastAppearanceType, ToastContent } from "@/components/common/toast";

export type ToastId = string;

export type Callback = (id: ToastId) => void;

export type Options = {
  appearance?: ToastAppearanceType;
  autoDismiss?: boolean;
  autoDismissTimeout?: number;
  onDismiss?: Callback;
};

export type ToastType = Options & {
  id: ToastId;
  content: ToastContent;
  appearance: ToastAppearanceType;
};

export type AddOptions = Options & {
  id?: ToastId;
  appearance: ToastAppearanceType;
};

export type UpdateOptions = Options & {
  content?: ToastContent;
};

export type HasToast = (id: ToastId) => boolean;

export type AddToast = (
  content: ToastContent,
  options?: AddOptions,
  cb?: Callback
) => void | ToastId;

export type RemoveToast = (id: ToastId, cb?: Callback) => void;

export type RemoveAllToasts = () => void;

export type UpdateToast = (
  id: ToastId,
  options?: UpdateOptions,
  cb?: Callback
) => void;

export type ToastTransitionDirection = "left" | "center" | "right";
