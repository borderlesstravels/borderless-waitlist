"use client";

import Button from "@/components/common/button";
import Form from "@/components/common/forms/form";
import FormInput from "@/components/common/forms/formInput";
import React from "react";
import useWaitlistSubscriptionLogic from "../../../hooks/useWaitlistSubscriptionLogic";

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

const JoinWaitlistForm = () => {
  const { handleSubmit, isLoading, validationSchema } =
    useWaitlistSubscriptionLogic();

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
              label="First Name"
            />
          </div>
          <div className="flex-1">
            <FormInput name="lastName" disabled={isLoading} label="Last Name" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:gap-5">
          <div className="flex-1">
            <FormInput
              name="phoneNumber"
              disabled={isLoading}
              type="tel"
              label="Phone Number"
            />
          </div>
          <div className="flex-1">
            <FormInput
              name="email"
              disabled={isLoading}
              type="email"
              label="Email Address"
            />
          </div>
        </div>
        <div className="mt-8">
          <Button
            label="Join Waitlist"
            fullWidth
            loading={isLoading}
            type="submit"
          />
        </div>
      </Form>
    </div>
  );
};

export default JoinWaitlistForm;
