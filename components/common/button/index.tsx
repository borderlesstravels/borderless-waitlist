import React, { ReactNode } from "react";
import cs from "classnames";

export type BtnVariantType =
  | "blue"
  | "purple"
  | "orange"
  | "white-outline"
  | "purple-outline"
  | "purple-gradient"
  | "orange-gradient"
  | "yellow"
  | "white";
export type BtnSizeType = "normal" | "small" | "x-small";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: BtnVariantType;
  loading?: boolean;
  label: string;
  disabled?: boolean;
  fullWidth?: boolean;
  size?: BtnSizeType;
  radius?: "normal" | "full";
  icon?: ReactNode;
  iconRight?: ReactNode;
}

const Button = ({
  className,
  fullWidth,
  disabled,
  loading,
  variant = "purple",
  type = "button",
  size = "normal",
  label,
  icon,
  radius = "normal",
  iconRight,
  ...props
}: Props) => {
  return (
    <button
      className={cs(
        "font-semibold flex items-center gap-2 justify-center focus:outline-[4px] text-center duration-150",
        {
          [`${className}`]: className,
          "bg-purple-base text-white border shadow-md shadow-purple-base/60 border-purple-base focus:outline-[2px] focus:outline-offset-[1px] focus:outline-purple-base/60":
            variant === "purple",
          "bg-white text-purple-base border shadow-md shadow-purple-base/60 border-purple-base focus:outline-[2px] focus:outline-offset-[1px] focus:outline-purple-base/60":
            variant === "purple-outline",
          "bg-blue-base text-white border shadow-md shadow-blue-base/60 border-blue-base focus:outline-[2px] focus:outline-offset-[1px] focus:outline-blue-base/60":
            variant === "blue",
          "bg-orange-base text-white border shadow-md shadow-orange-base/60 border-orange-base focus:outline-[2px] focus:outline-offset-[1px] focus:outline-orange-base/60":
            variant === "orange",
          "bg-transparent text-white border shadow-md shadow-white/60 border-white focus:outline-[2px] focus:outline-offset-[1px] focus:outline-white/60":
            variant === "white-outline",
          "bg-[linear-gradient(to_right,#1b0c1f,#c957db)] text-white border shadow-md shadow-purple-base/60 border-purple-base/30 focus:outline-[2px] focus:outline-offset-[1px] focus:outline-purple-base/60":
            variant === "purple-gradient",
          "bg-[linear-gradient(70deg,#FD6E6A,#FFC600)] text-white border shadow-md shadow-orange-base/60 border-purple-base/30 focus:outline-[2px] focus:outline-offset-[1px] focus:outline-orange-base/60":
            variant === "orange-gradient",
          "bg-yellow-base text-black border shadow-md shadow-yellow-base/60 border-yellow-base focus:outline-[2px] focus:outline-offset-[1px] focus:outline-yellow-base/60":
            variant === "yellow",
          "bg-white text-purple-base border shadow-md shadow-white/60 border-white focus:outline-[2px] focus:outline-offset-[1px] focus:outline-purple-base/60":
            variant === "white",
          "py-[10px] px-[25px]": size === "normal",
          "py-[8px] px-[20px] text-[14px]": size === "small",
          "py-[5px] px-[16px] text-[12px]": size === "x-small",
          "w-full block": fullWidth,
          "opacity-[70%] cursor-not-allowed": disabled || loading,
          "rounded-lg": radius === "normal",
          "rounded-full": radius === "full",
        }
      )}
      disabled={disabled || loading}
      {...props}
      type={type}
    >
      {icon}
      {label && (
        <span>
          {loading && "Loading..."}
          {!loading && label}
        </span>
      )}
      {iconRight}
    </button>
  );
};

export default Button;
