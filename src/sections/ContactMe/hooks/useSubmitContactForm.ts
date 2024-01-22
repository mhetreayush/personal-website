import emailjs from "@emailjs/browser";
import { useState } from "react";
import { UseFormReset } from "react-hook-form";
import { ContactFormFieldsTypes } from "../types";

const useSubmitContactForm = () => {
  const [sentState, setSentState] = useState<"idle" | "sending" | "sent">(
    "idle"
  );
  const [showError, setShowError] = useState<boolean>(false);

  const toggleError = () => {
    setSentState("idle");
    setShowError(true);
    setTimeout(() => {
      setShowError(false);
    }, 4000);
  };

  const onSubmit = async ({
    formData,
    resetForm,
  }: {
    resetForm: UseFormReset<ContactFormFieldsTypes>;
    formData: {
      name: string;
      email: string;
      message: string;
    };
  }) => {
    try {
      setSentState("sending");
      const res = await emailjs.send(
        (process.env.NEXT_PUBLIC_EMAILJS_SERVICE ?? "") as string,
        (process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE ?? "") as string,
        {
          from_name: formData.name.trim(),
          message: formData.message.trim(),
          from_email: formData.email.trim(),
        },
        process.env.NEXT_PUBLIC_EMAILJS_ID ?? ""
      );
      if (res.status == 200) {
        setSentState("sent");
        resetForm();
      } else {
        toggleError();
      }
    } catch (err) {
      toggleError();
    }
  };

  return { sentState, showError, onSubmit };
};

export { useSubmitContactForm };
