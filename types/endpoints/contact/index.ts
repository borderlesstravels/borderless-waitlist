/* eslint-disable @typescript-eslint/no-namespace */
import { General } from "../general";

export namespace Contact {
  export namespace WaitlistSubscription {
    export interface Request {
      email: string;
      first_name: string;
      last_name: string;
      phone: string;
    }

    export type Response = General.SuccessResponse;
  }
}
