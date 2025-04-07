import Typography from "@/components/common/typography";
import React from "react";
import CheckIcon from "@/assets/svgs/check-coloured.svg";

interface Props {
  label: string;
}

const WhyTravelItem = ({ label }: Props) => {
  return (
    <div className="flex gap-8">
      <div className="relative top-1">
        <CheckIcon className="w-[20px] h-[20px]" />
      </div>
      <Typography tabletVariant="body-medium" className="text-grey-text">
        {label}
      </Typography>
    </div>
  );
};

export default WhyTravelItem;
