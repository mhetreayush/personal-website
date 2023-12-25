"use client";

import { useForm } from "react-hook-form";
import { AnimatedButton } from "./AnimatedButton";
import emailjs from "@emailjs/browser";
import { useEffect, useState } from "react";

const ErrorToast = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 300);
    setTimeout(() => {
      setShow(false);
    }, 3000);
  }, []);
  return (
    <div
      className={`absolute top-14 right-0 ${
        show ? "-translate-x-[5%]" : "translate-x-[150%]"
      } z-[100] duration-300`}
    >
      <AnimatedButton
        rounded="rounded-md"
        className={{
          child: "bg-red-400 text-white rounded-md text-lg font-semibold p-3",
        }}
      >
        <div className="flex gap-x-2 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
            />
          </svg>
          <p>Something went wrong, please try again</p>
        </div>
      </AnimatedButton>
    </div>
  );
};

const ContactForm = () => {
  const [sentState, setSentState] = useState("idle"); // ["idle", "sending", "sent"]
  const [showError, setShowError] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      email: "",
      name: "",
      message: "",
    },
  });
  const toggleError = () => {
    setSentState("idle");
    setShowError(true);
    setTimeout(() => {
      setShowError(false);
    }, 4000);
  };
  const onSubmit = async (data: any) => {
    try {
      setSentState("sending");
      const res = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE as string,
        {
          from_name: data.name.trim(),
          message: data.message.trim(),
          from_email: data.email.trim(),
        },
        process.env.NEXT_PUBLIC_EMAILJS_ID
      );
      if (res.status == 200) {
        setSentState("sent");
        reset();
      } else {
        toggleError();
      }
    } catch (err) {
      toggleError();
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-6">
      {showError && <ErrorToast />}
      {sentState == "idle" && (
        <>
          <div>
            <label htmlFor="name">Name</label>
            <AnimatedButton
              rounded="rounded-md"
              className={{ body: "bg-white mt-1 md:w-1/2" }}
            >
              <input
                className="rounded-md w-full underline underline-offset-4 decoration-black/30"
                type="text"
                id="name"
                required
                {...register("name")}
              />
            </AnimatedButton>
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <AnimatedButton
              rounded="rounded-md"
              className={{ body: "bg-white mt-1 md:w-1/2" }}
            >
              <input
                className="rounded-md w-full underline underline-offset-4 decoration-black/30"
                type="email"
                id="email"
                required
                {...register("email")}
              />
            </AnimatedButton>
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <AnimatedButton
              rounded="rounded-md"
              className={{ body: "bg-white mt-1 md:w-3/4" }}
            >
              <textarea
                className="rounded-md w-full underline underline-offset-4 decoration-black/30 -mb-[6px]"
                rows={5}
                id="message"
                required
                {...register("message")}
              />
            </AnimatedButton>
          </div>
        </>
      )}

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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
              />
            </svg>
          </button>
        )}
        {sentState == "sending" && (
          <div className="flex h-full w-full justify-center">
            <div className="h-6 w-6 rounded-full border-t border-r border-black animate-spin p-5 m-2" />
          </div>
        )}
        {sentState == "sent" && (
          <div className="p-2 rounded-md flex gap-x-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
              />
            </svg>
            Sent
          </div>
        )}
      </AnimatedButton>
    </form>
  );
};

export { ContactForm };
