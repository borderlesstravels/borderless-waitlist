import { AxiosError } from "axios";
import { Api } from "@/types";

export const resolveAxiosError = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error: AxiosError<Api.General.ErrorResponse, any>
) => {
  const defaultErrorMessage = "Something went wrong!!!";
  const defaultResponse = {
    status: 400,
    message: defaultErrorMessage,
  };

  try {
    if (!error) return defaultResponse;
    const errorResponse = error.response;
    const errorResponseStatus = errorResponse?.status;
    const errorResponseData = errorResponse?.data;
    const message = errorResponseData?.error || errorResponseData?.message;

    return {
      status: errorResponseStatus,
      message: message || defaultErrorMessage,
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
  } catch (error: any) {
    return defaultResponse;
  }
};
