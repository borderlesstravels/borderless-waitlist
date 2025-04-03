import { axiosConfig } from "@/config/axios";
import { resolveAxiosError } from "./resolveAxiosError";
import { ToastContent } from "@/components/common/toast";
import { AxiosError } from "axios";
import { Api } from "@/types";
import { HEADER_API_KEY, HEADER_FIRM_KEY } from "@/constants/envData";

export const configureInterceptor = (
  handleLogout: () => void,
  handleErrorAlert: (content: ToastContent) => void
) => {
  const responseInterceptor = axiosConfig.interceptors.response.use(
    (response) => {
      return response;
    },
    (error: AxiosError<Api.General.ErrorResponse>) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { message, status } = resolveAxiosError(error);

      // const authToken = localStorage.getItem(USER_STORAGE_KEY);

      if (error?.config?.showToastOnError && message) {
        // if (error?.config?.showToastOnError && message && status !== 401) {
        handleErrorAlert({ body: message, title: "Error" });
      }

      // if (status === 401 && authToken) {
      //   handleLogout();
      // }

      return Promise.reject(error.response?.data || error);
    }
  );

  const requestInterceptor = axiosConfig.interceptors.request.use((request) => {
    // const token = localStorage.getItem(USER_STORAGE_KEY) || "";

    // request.headers.Authorization = `Bearer ${token}`;
    request.headers["Firm"] = HEADER_FIRM_KEY;
    request.headers["api_key"] = HEADER_API_KEY;

    return request;
  });

  return () => {
    axiosConfig.interceptors.response.eject(responseInterceptor);
    axiosConfig.interceptors.request.eject(requestInterceptor);
  };
};
