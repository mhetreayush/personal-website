import { Section } from "@/components/Section";
import { ContactFormWrapper, ContactFormSection } from "./Components";

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
