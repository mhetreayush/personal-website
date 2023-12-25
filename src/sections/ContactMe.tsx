import { AnimatedButton } from "@/components/AnimatedButton";
import { ContactForm } from "@/components/ContactForm";
import { Section } from "@/components/Section";

const ContactMe = () => {
  return (
    <Section title="Contact Me" className="overflow-x-hidden ">
      <div>
        <AnimatedButton rounded="rounded-md" className={{ child: "bg-white " }}>
          <div className="border border-black rounded-md flex flex-col">
            <div className="flex w-full justify-between items-center px-2 py-2 border-b border-black">
              <div className="flex gap-x-2">
                {["bg-red-500", "bg-yellow-500", "bg-green-500"].map(
                  (color, idx) => {
                    return (
                      <div
                        key={idx}
                        className={`w-4 h-4 ${color} rounded-full `}
                      ></div>
                    );
                  }
                )}
              </div>
              <div>
                <p className="font-bold text-xl">🌐 Contact Ayush</p>
              </div>
              <div className="hidden md:block" />
            </div>
            <div className="p-4">
              <ContactForm />
            </div>
          </div>
        </AnimatedButton>
      </div>
    </Section>
  );
};

export { ContactMe };
