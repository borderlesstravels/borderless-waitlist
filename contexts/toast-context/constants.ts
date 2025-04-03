import { ToastTransitionDirection } from "./types";

export const TOAST_TRANSITION_CLASSES: Record<
  ToastTransitionDirection,
  string
> = {
  left: "data-[closed]:-translate-x-full data-[enter]:duration-300 data-[enter]:data-[closed]:-translate-x-full data-[leave]:duration-300 data-[leave]:data-[closed]:-translate-x-full",
  center:
    "data-[closed]:translate-x-full data-[enter]:duration-300 data-[enter]:data-[closed]:translate-x-full data-[leave]:duration-300 data-[leave]:data-[closed]:translate-x-full",
  right: "data-[closed]:translate-x-full",
};
