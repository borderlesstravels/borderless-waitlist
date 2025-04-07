import Typography from "@/components/common/typography";
import React from "react";

interface Props {
  label: string;
  value: string;
}

const CountdownItem = ({ label, value }: Props) => {
  const splittedValue = value.split("");
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex gap-2">
        {splittedValue.map((item, index) => (
          <div
            className="bg-[#EFE9EF] shadow-lg w-[60px] md:w-[65px] h-[72px] md:h-[80px] flex items-center justify-center"
            key={index}
          >
            <Typography
              className="font-semibold"
              variant="heading-2"
              tabletVariant="display-1"
            >
              {item}
            </Typography>
          </div>
        ))}
      </div>
      <Typography
        className="uppercase font-bold"
        variant="body-small"
        tabletVariant="body-large"
      >
        {label}
      </Typography>
    </div>
  );
};

export default CountdownItem;
