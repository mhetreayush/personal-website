import { ErrorIcon } from "@/Components/AllIcons";
import { AnimatedButton } from "@/Components/AnimatedButton";
import { useErrorToast } from "../hooks/useErrorToast";

const ErrorToast = () => {
  const { show } = useErrorToast();
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
          <ErrorIcon />
          <p>Something went wrong, please try again</p>
        </div>
      </AnimatedButton>
    </div>
  );
};

export { ErrorToast };
