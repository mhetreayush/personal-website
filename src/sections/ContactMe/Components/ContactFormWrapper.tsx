import { AnimatedButton } from "@/components/AnimatedButton";
import { ContactFormWindowCircle } from "./ContactFormWindowCircle";

const ContactFormWrapper = ({ children }: { children: JSX.Element }) => {
  return (
    <AnimatedButton rounded="rounded-md" className={{ child: "bg-white " }}>
      <div className="border border-black rounded-md flex flex-col">
        <div className="flex w-full justify-between items-center px-2 py-2 border-b border-black">
          <div className="flex gap-x-2">
            <ContactFormWindowCircle tailwindCSSColorClass="bg-red-500" />
            <ContactFormWindowCircle tailwindCSSColorClass="bg-yellow-500" />
            <ContactFormWindowCircle tailwindCSSColorClass="bg-green-500" />
          </div>
          <div>
            <p className="font-bold text-xl">🌐 Contact Ayush</p>
          </div>
          <div className="hidden md:block" />
        </div>
        <div className="p-4">{children}</div>
      </div>
    </AnimatedButton>
  );
};

export { ContactFormWrapper };
