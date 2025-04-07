import { Shape } from "@/validations/constants/shape";
import * as yup from "yup";
import { IJoinWaitlistForm } from "../components/joinWaitlist/joinWaitlistForm";
import { PHONE_NUMBER_REGEX } from "@/validations/regex";

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
