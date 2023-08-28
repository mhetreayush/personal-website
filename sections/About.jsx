import AnimatedButton from "@/components/Buttons/AnimatedButton";
import Section from "@/components/Section";

const About = () => {
  return (
    <Section title="About Me">
      <div className="h-[50vh]" />
      <AnimatedButton
        rounded={"rounded-full"}
        className={{
          body: "font-semibold w-fit ",
          child: "bg-yellow-200 px-8 text-black text-2xl ",
        }}
      >
        <a
          target="_blank"
          href="https://drive.google.com/file/d/1eAssDp4X_U64H14vKTyFNKWHnsBqrDLT/view"
        >
          Resume
        </a>
      </AnimatedButton>
    </Section>
  );
};

export default About;
