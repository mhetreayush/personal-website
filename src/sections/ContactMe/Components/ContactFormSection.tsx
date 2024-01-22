"use client";

import { useForm } from "react-hook-form";
import { AnimatedButton } from "@/components/AnimatedButton/";
import { IdleButtonState, SentButtonState } from "@/components/AllIcons";
import { ErrorToast } from "./ErrorToast";
import { useSubmitContactForm } from "../hooks/useSubmitContactForm";
import { ContactForm } from "./ContactForm";

const ContactFormSection = () => {
  const { sentState, showError, onSubmit } = useSubmitContactForm();
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      email: "",
      name: "",
      message: "",
    },
  });
  return (
    <form
      onSubmit={handleSubmit((formData) =>
        onSubmit({
          formData,
          resetForm: reset,
        })
      )}
      className="flex flex-col gap-y-6"
    >
      {showError && <ErrorToast />}
      {sentState == "idle" && <ContactForm register={register} />}

      <AnimatedButton
        rounded="rounded-md"
        className={{
          body: "bg-white md:w-fit w-full text-center border-0 ",
          child: "bg-white rounded-md font-semibold text-xl",
        }}
      >
        {sentState == "idle" && (
          <button
            aria-label="Send Message"
            type="submit"
            className="p-2 flex gap-x-2 items-center"
          >
            Send
            <IdleButtonState />
          </button>
        )}
        {sentState == "sending" && (
          <div className="flex h-full w-full justify-center">
            <div className="h-6 w-6 rounded-full border-t border-r border-black animate-spin p-5 m-2" />
          </div>
        )}
        {sentState == "sent" && (
          <div className="p-2 rounded-md flex gap-x-2 items-center">
            <SentButtonState />
            Sent
          </div>
        )}
      </AnimatedButton>
    </form>
  );
};

export { ContactFormSection };
