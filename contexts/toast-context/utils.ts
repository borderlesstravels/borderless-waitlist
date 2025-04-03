import { ToastPlacement } from "@/components/common/toast";
import { ToastTransitionDirection } from "./types";

export const getTransitionDirection = (
  placement: ToastPlacement
): ToastTransitionDirection => {
  const directions: Record<ToastPlacement, ToastTransitionDirection> = {
    "top-left": "left",
    "bottom-left": "left",
    "top-center": "center",
    "bottom-center": "center",
    "bottom-right": "right",
    "top-right": "right",
  };
  return directions[placement];
};

export const noop = () => undefined;
