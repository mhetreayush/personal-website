"use client";

import { useForm } from "react-hook-form";
import AnimatedButton from "./Buttons/AnimatedButton";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      name: "",
      message: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-6">
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
            className="rounded-md w-full underline underline-offset-4 decoration-black/30"
            type="text"
            rows={5}
            id="message"
            {...register("message")}
          />
        </AnimatedButton>
      </div>
      <AnimatedButton
        rounded="rounded-md"
        className={{
          body: "bg-white md:w-fit w-full text-center",
          child: "bg-white rounded-md ",
        }}
      >
        <button type="submit" className="p-2 font-semibold text-xl">
          Submit
        </button>
      </AnimatedButton>
    </form>
  );
};

export default ContactForm;
