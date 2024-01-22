import { Section } from "@/components/Section";
import { SkillsCard } from "./components";
import { skills } from "@/assets/data/skills";

const Skills = () => {
  return (
    <Section title="Skills">
      <div className="grid grid-cols-2 md:flex w-full gap-x-8 gap-y-4 cursor-default flex-wrap py-8 ">
        {skills.map((skill) => (
          <SkillsCard key={skill} skill={skill} />
        ))}
      </div>
    </Section>
  );
};

export { Skills };
