import { AnimatedButton } from "@/components/AnimatedButton";
import Image from "next/image";
import { SkillType } from "../types";
import { slugify } from "@/lib/utils/slugify";

export const SkillsCard = ({ skill }: { skill: SkillType }) => (
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
      <strong className="!font-semibold md:text-xl break-all">{skill}</strong>
    </div>
  </AnimatedButton>
);
