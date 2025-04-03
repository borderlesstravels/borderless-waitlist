"use client";

import React from "react";
import ErrorUi from "@/components/common/errorUi";

const ErrorScreen = () => {
  return (
    <ErrorUi
      header="ERROR"
      paragraph="The page you are looking for might have been removed, had its name
        changed or is temporarily unavailable"
      showReloadBtn
    />
  );
};

export default ErrorScreen;
