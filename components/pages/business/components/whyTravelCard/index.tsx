import Typography from "@/components/common/typography";
import React, { ReactNode } from "react";
import cs from "classnames";

export interface WhyTravelCardProps {
  label: string;
  icon: ReactNode;
  onMouseEnter?: () => void;
  isActive?: boolean;
}

const WhyTravelCard = ({
  icon,
  label,
  onMouseEnter,
  isActive,
}: WhyTravelCardProps) => {
  return (
    <div
      className={cs(
        "flex items-center duration-200 gap-5 px-5 py-5 rounded-lg",
        {
          "bg-white shadow-2xl": isActive,
        }
      )}
      onMouseEnter={onMouseEnter}
    >
      <div className="w-[50px] h-[50px] flex items-center justify-center bg-white rounded-lg">
        {icon}
      </div>
      <Typography variant="body-medium" className="font-semibold">
        {label}
      </Typography>
    </div>
  );
};

export default WhyTravelCard;
