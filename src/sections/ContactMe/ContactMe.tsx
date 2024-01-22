import { Section } from "@/Components/Section";
import { ContactFormWrapper, ContactFormSection } from "./_components";

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
