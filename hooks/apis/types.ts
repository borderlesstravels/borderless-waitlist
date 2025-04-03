import { UseMutationOptions, UseQueryOptions } from "@tanstack/react-query";
import { AxiosError } from "axios";

export type QueryOptions<T> = Omit<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  UseQueryOptions<T, AxiosError<any>>,
  "queryKey"
>;
export type MutationOptions<T, Q> = Omit<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  UseMutationOptions<T, AxiosError<any>, Q>,
  "mutationKey" | "mutationFn"
>;

/**
 * Tags for queries and mutations
 */
export enum ContactQueryTag {
  WaitlistSubscription = "WaitlistSubscription",
}
