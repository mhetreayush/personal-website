import AnimatedButton from "@/components/Buttons/AnimatedButton";
import Section from "@/components/Section";

const About = () => {
  return (
    <Section title="About Me">
      <div className="w-fit">
        <AnimatedButton
          rounded={"rounded-full"}
          className={{ body: "font-semibold", child: "py-1" }}
        >
          {/* <div className=" bg-[#DBC3FF]  font-semibold text-2xl"> */}
          <a
            download="Ayush-Mhetre-Resume.pdf"
            href="https://drive.google.com/uc?export=download&id=1eAssDp4X_U64H14vKTyFNKWHnsBqrDLT"
            className="px-8 py-2 bg-blue-400 text-black text-2xl font-extralight"
          >
            Resume
          </a>
        </AnimatedButton>
      </div>
    </Section>
  );
};

export default About;
