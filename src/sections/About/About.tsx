import { ExternalLinkIcon } from "@/Components/AllIcons";
import { AnimatedButton } from "@/Components/AnimatedButton";
import { Section } from "@/Components/Section";
import Image from "next/image";
import { WhatAmILookingFor, WhatDoIDo, WhoAmI } from "./components";

const About = () => {
  return (
    <Section title="About Me" className="overflow-clip">
      <div className="flex flex-col-reverse gap-4 md:grid grid-cols-2 ">
        <div className="flex flex-col gap-4">
          <AnimatedButton
            rounded={"rounded-md"}
            className={{
              child:
                "bg-white relative after:block after:md:hidden after:h-7 after:bg-gradient-to-b after:from-white after:via-gray-500 after:to-black after:bottom-0 after:z-50 after:sticky after:opacity-60 after:rounded-b-md",
            }}
          >
            <div className="max-h-[50vh] md:max-h-full p-2 md:p-4 md:text-justify text-lg flex flex-col gap-y-2 justify-between overflow-y-auto relative overflow-clip pb-6">
              <WhoAmI />
              <WhatDoIDo />
              <WhatAmILookingFor />
            </div>
          </AnimatedButton>
          <AnimatedButton
            rounded={"rounded-full"}
            className={{
              body: "font-semibold text-center md:w-fit",
              child: "bg-yellow-200   text-black text-2xl ",
            }}
          >
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1eAssDp4X_U64H14vKTyFNKWHnsBqrDLT/view"
              className="flex gap-x-2 items-center justify-center md:px-8 p-4"
            >
              <span className="inline-block">
                <ExternalLinkIcon />
              </span>
              Resume
            </a>
          </AnimatedButton>
        </div>

        <div className=" h-full w-full justify-center items-center hidden md:flex animate-illustrationBounce">
          <Image
            src="/hero-ill.svg"
            width={500}
            height={500}
            alt="Ayush Mhetre"
          />
        </div>
      </div>
    </Section>
  );
};

export { About };
