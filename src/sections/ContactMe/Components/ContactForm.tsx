import { AnimatedButton } from "@/components/AnimatedButton";
import { UseFormRegister } from "react-hook-form";

const ContactForm = ({
  register,
}: {
  register: UseFormRegister<{
    email: string;
    name: string;
    message: string;
  }>;
}) => {
  return (
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
  );
};

export { ContactForm };
