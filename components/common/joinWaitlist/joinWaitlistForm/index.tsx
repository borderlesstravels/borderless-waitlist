"use client";

import Button from "@/components/common/button";
import Form from "@/components/common/forms/form";
import FormInput from "@/components/common/forms/formInput";
import useWaitlistSubscriptionLogic from "@/hooks/utils/useWaitlistSubscriptionLogic";
import { Api } from "@/types";
import React from "react";

interface Props {
  bgColor?: "purple" | "blue";
  type: Api.Contact.WaitlistSubscription.Request["type"];
}

export interface IJoinWaitlistForm {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
}

const initialValues: IJoinWaitlistForm = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
  email: "",
};

const JoinWaitlistForm = ({ bgColor, type }: Props) => {
  const { handleSubmit, isLoading, validationSchema } =
    useWaitlistSubscriptionLogic({ type });

  return (
    <div className="">
      <Form
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <div className="flex flex-col md:flex-row md:gap-5">
          <div className="flex-1">
            <FormInput
              name="firstName"
              disabled={isLoading}
              placeholder="Enter first name"
              label={
                <span>
                  First Name{" "}
                  <span className="text-error-base text-[18px]">*</span>
                </span>
              }
            />
          </div>
          <div className="flex-1">
            <FormInput
              name="email"
              disabled={isLoading}
              placeholder="Enter email"
              type="email"
              label={
                <span>
                  Email Address{" "}
                  <span className="text-error-base text-[18px]">*</span>
                </span>
              }
            />
          </div>
        </div>
        <div className="mt-8">
          <Button
            label="Join Waitlist"
            fullWidth
            loading={isLoading}
            type="submit"
            variant={bgColor}
          />
        </div>
      </Form>
    </div>
  );
};

export default JoinWaitlistForm;
