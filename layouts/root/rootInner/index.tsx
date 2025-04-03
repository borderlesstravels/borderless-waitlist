"use client";

import { useToasts } from "@/contexts/toast-context";
import { configureInterceptor } from "@/utils/configureInterceptor";
import React, { ReactNode, useEffect } from "react";

interface Props {
  children?: ReactNode;
}

const RootInner = ({ children }: Props) => {
  const { handleErrorToast } = useToasts();

  useEffect(() => {
    return configureInterceptor(() => undefined, handleErrorToast);
  }, [handleErrorToast]);
  return <>{children}</>;
};

export default RootInner;
