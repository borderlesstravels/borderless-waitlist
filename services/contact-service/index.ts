import { axiosConfig } from "@/config/axios";
import { Api } from "@/types";
import { AxiosResponse } from "axios";

export const waitlistSubscriptionService = async (
  payload: Api.Contact.WaitlistSubscription.Request
): Promise<Api.Contact.WaitlistSubscription.Response> => {
  return axiosConfig
    .post<
      Api.Contact.WaitlistSubscription.Response,
      AxiosResponse<Api.Contact.WaitlistSubscription.Response>,
      Api.Contact.WaitlistSubscription.Request
    >("/website/waitlist", payload)
    .then((res) => res.data);
};
