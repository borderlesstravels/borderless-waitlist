import React from "react";
import cs from "classnames";
import Typography from "../typography";

import styles from "./loader.module.css";

interface Props {
  variant?: "content" | "fixed-full";
  className?: string;
  message?: string;
  ringSize?: "normal" | "small";
}

const Loader = ({
  variant = "content",
  ringSize = "normal",
  className,
  message,
}: Props) => {
  return (
    <div
      className={cs(
        "relative flex z-[3] flex-col gap-3 items-center justify-center w-full",
        {
          [`${className}`]: className,
          "!fixed bg-white/50 z-[2] top-0 left-0 h-screen":
            variant === "fixed-full",
        }
      )}
    >
      <div className="inline-block relative w-[133px] h-[133px]">
        <div
          className={cs(
            "absolute border-[3px] border-dashed border-blue-base border-t-orange-base rounded-full",
            styles.ring,
            {
              "small-size": ringSize === "small",
            }
          )}
        ></div>
        <div
          className={cs(
            "absolute border-[3px] border-dashed border-blue-base border-t-orange-base rounded-full",
            styles.ring
          )}
        ></div>
      </div>
      {message && (
        <Typography variant="body-small" className="text-grey-text">
          {message}
        </Typography>
      )}
    </div>
  );
};

export default Loader;
