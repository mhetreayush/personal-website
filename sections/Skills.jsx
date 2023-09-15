import AnimatedButton from "@/components/Buttons/AnimatedButton";
import Section from "@/components/Section";
import { slugify } from "@/lib/utils/slugify";
import Image from "next/image";

const Skills = () => {
  return (
    <Section title="Skills">
      <div className="grid grid-cols-2 md:flex w-full gap-x-8 gap-y-4 cursor-default flex-wrap py-8 ">
        {[
          "HTML",
          "CSS",
          "JavaScript",
          "React.JS",
          "Next.JS",
          "TailwindCSS",
          "Styled Components",
          "Bootstrap",
          "Express.JS",
          "Firebase",
          "GraphQL",
          "MongoDB",
          "Socket.io",
        ].map((skill) => (
          <AnimatedButton
            key={skill}
            rounded={"rounded-md"}
            className={{
              body: "md:w-fit w-full odd:last:col-span-2 col-span-2 !h-max sm:col-span-1",
            }}
          >
            <div className="flex items-center justify-center bg-white hover:bg-bg p-2 md:px-4 rounded-md gap-x-2 md:gap-x-4">
              <Image
                alt={skill}
                className="rounded-full border border-black p-1"
                src={`/icons/${slugify(skill)}.svg`}
                width={30}
                height={30}
              />
              <strong className="!font-semibold md:text-xl break-all">
                {skill}
              </strong>
            </div>
          </AnimatedButton>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
