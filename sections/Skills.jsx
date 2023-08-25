import AnimatedButton from "@/components/Buttons/AnimatedButton";
import Section from "@/components/Section";
import { slugify } from "@/lib/utils/slugify";
import Image from "next/image";

const Skills = () => {
  return (
    <Section title="Skills">
      <div className="grid grid-cols-2 md:flex w-full gap-4 cursor-default flex-wrap ">
        {[
          "HTML",
          "CSS",
          "JavaScript",
          "React.js",
          "Next.js",
          "Firebase",
          "TailwindCSS",
          "Bootstrap",
          "GraphQL",
          "MongoDB",
          "Socket.io",
        ].map((skill) => (
          <AnimatedButton
            key={skill}
            rounded={"rounded-md"}
            className={{
              body: "md:w-fit w-full",
            }}
          >
            <div className="flex items-center justify-center bg-white hover:bg-bg p-2">
              <Image
                alt={skill}
                className="rounded-full border border-black p-1"
                src={`/icons/${slugify(skill)}.svg`}
                width={30}
                height={30}
              />
              <p className="px-4 ">{skill}</p>
            </div>
          </AnimatedButton>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
