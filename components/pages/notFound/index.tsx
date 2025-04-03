import React from "react";
import ErrorUi from "@/components/common/errorUi";

const NotFoundScreen = () => {
  return (
    <ErrorUi
      header="PAGE NOT FOUND"
      paragraph="The page you are looking for might have been removed, had its name
            changed or is temporarily unavailable"
    />
  );
};

export default NotFoundScreen;
