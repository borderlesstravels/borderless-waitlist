import axios from "axios";
import {
  API_BASE_URL,
  HEADER_API_KEY,
  HEADER_FIRM_KEY,
} from "@/constants/envData";
export type { AxiosRequestConfig as RequestConfig } from "axios";

export const axiosConfig = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Firm: HEADER_FIRM_KEY,
    api_key: HEADER_API_KEY,
  },
  timeout: 60000,
  withCredentials: true,
  showToastOnError: true,
});
