import AnimatedButton from "@/components/Buttons/AnimatedButton";
import ExternalLinkSVG from "@/components/ExternalLinkSVG";
import Section from "@/components/Section";
import { projects_data } from "@/public/data/projects";

const Projects = () => {
  return (
    <Section title="Projects">
      <div className="lg:columns-3 md:columns-2 columns-1 space-x-2 space-y-2 group ">
        {projects_data.map((project, index) => (
          <div
            className={`break-inside-avoid pb-2 hover:group-only:blur-0 group-hover:blur-sm transition-all duration-200 ease-in-out `}
            key={index}
          >
            <AnimatedButton rounded={"rounded-md"}>
              <div className="flex flex-col space-y-2 bg-white rounded-md p-2">
                <div className="flex justify-between">
                  <p className="font-semibold text-2xl">{project.name}</p>
                  <div className="flex gap-x-2 items-center">
                    <ExternalLinkSVG link={project.demo} />

                    <a href={project.sourceCode} target="_blank">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
                {project.description}
              </div>
            </AnimatedButton>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
