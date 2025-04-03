import React, { ReactNode } from "react";
import QueryProvider from "@/contexts/query-context";
import ToastProvider from "@/contexts/toast-context";
import RootInner from "./rootInner";

interface Props {
  children?: ReactNode;
}

const RootLayoutInner = ({ children }: Props) => {
  return (
    <QueryProvider>
      <ToastProvider autoDismiss placement="bottom-right">
        <RootInner>{children}</RootInner>
      </ToastProvider>
    </QueryProvider>
  );
};

export default RootLayoutInner;
