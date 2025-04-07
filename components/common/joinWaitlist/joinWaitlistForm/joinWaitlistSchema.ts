import { Shape } from "@/validations/constants/shape";
import * as yup from "yup";
import { PHONE_NUMBER_REGEX } from "@/validations/regex";
import { IJoinWaitlistForm } from ".";

export const joinWaitlistSchema = () =>
  yup.object().shape<Shape<IJoinWaitlistForm>>({
    firstName: yup.string().required("Please enter first name"),
    lastName: yup.string(),
    email: yup
      .string()
      .email("Please enter valid email")
      .required("Please enter email"),
    phoneNumber: yup
      .string()
      .matches(PHONE_NUMBER_REGEX, "Please enter a valid number"),
  });
