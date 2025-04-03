import { useToasts } from "@/contexts/toast-context";
import { FormikHelpers } from "formik";
import { useWaitlistSubscription } from "@/hooks/apis/contact";
import { joinWaitlistSchema } from "../utils/joinWaitlistSchema";
import { IJoinWaitlistForm } from "../components/joinWaitlist/joinWaitlistForm";

const useWaitlistSubscriptionLogic = () => {
  const { handleSuccessToast } = useToasts();
  const { mutateAsync, isPending } = useWaitlistSubscription();

  const handleSubmit = async (
    values: IJoinWaitlistForm,
    helpers: FormikHelpers<IJoinWaitlistForm>
  ) => {
    try {
      const res = await mutateAsync({
        email: values.email,
        first_name: values.firstName,
        last_name: values.lastName,
        phone: values.phoneNumber,
      });

      if (res) {
        handleSuccessToast({ body: res.message });
        helpers.resetForm();
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {}
  };

  const validationSchema = joinWaitlistSchema();

  return { isLoading: isPending, handleSubmit, validationSchema };
};

export default useWaitlistSubscriptionLogic;
