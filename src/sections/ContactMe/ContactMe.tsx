import { Section } from "@/components/Section";
import { ContactFormWrapper, ContactFormSection } from "./components";

const ContactMe = () => {
  return (
    <Section title="Contact Me" className="overflow-x-hidden">
      <ContactFormWrapper>
        <ContactFormSection />
      </ContactFormWrapper>
    </Section>
  );
};

export { ContactMe };
