import { useToasts } from "@/contexts/toast-context";
import { FormikHelpers } from "formik";
import { useWaitlistSubscription } from "@/hooks/apis/contact";
import { joinWaitlistSchema } from "../../components/common/joinWaitlist/joinWaitlistForm/joinWaitlistSchema";
import { IJoinWaitlistForm } from "@/components/common/joinWaitlist/joinWaitlistForm";
import { Api } from "@/types";

interface IUseWaitlistSubscriptionLogicOptions {
  type: Api.Contact.WaitlistSubscription.Request["type"];
}

const useWaitlistSubscriptionLogic = ({
  type,
}: IUseWaitlistSubscriptionLogicOptions) => {
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
        type,
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
