import { Api } from "@/types";
import { ContactQueryTag, MutationOptions } from "../types";
import { useMutation } from "@tanstack/react-query";
import { waitlistSubscriptionService } from "@/services/contact-service";
import { AxiosError } from "axios";

export const useWaitlistSubscription = (
  options?: MutationOptions<
    Api.Contact.WaitlistSubscription.Response,
    Api.Contact.WaitlistSubscription.Request
  >
) => {
  return useMutation<
    Api.Contact.WaitlistSubscription.Response,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    AxiosError<any>,
    Api.Contact.WaitlistSubscription.Request
  >({
    mutationFn: waitlistSubscriptionService,
    mutationKey: [ContactQueryTag.WaitlistSubscription],
    ...options,
  });
};
