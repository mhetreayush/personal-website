"use client";
import AnimatedButton from "@/components/Buttons/AnimatedButton";
import ExternalLinkSVG from "@/components/ExternalLinkSVG";
import Section from "@/components/Section";
import Tags from "@/components/Tags";
import { slugify } from "@/lib/utils/slugify";
import { projects_data } from "@/public/data/projects";
import { useState } from "react";

const Projects = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredID, setHoveredID] = useState(null);
  return (
    <Section title="Projects">
      <div className="lg:columns-3 md:columns-2 columns-1 space-y-2 ">
        {projects_data.map((project, index) => (
          <div
            className={`break-inside-avoid pb-2 w-full blur-0 transition-all duration-200 ease-in-out 
            ${isHovered && hoveredID != index && "!blur-sm"}
            `}
            key={index}
            onMouseEnter={() => {
              setIsHovered(true);
              setHoveredID(index);
            }}
            onMouseLeave={() => {
              setIsHovered(false);
              setHoveredID(null);
            }}
          >
            <AnimatedButton rounded={"rounded-md"}>
              <div className="flex flex-col space-y-2 bg-white rounded-md p-2 pb-4">
                <div className="flex justify-between">
                  <p className="font-semibold text-2xl">{project.name}</p>

                  <div className="flex gap-x-2 items-center">
                    <ExternalLinkSVG
                      link={project.demo}
                      name={slugify(project.name + " demo", "-")}
                    />

                    <a
                      href={project.sourceCode}
                      target="_blank"
                      aria-label={slugify(project.name + " demo", "-")}
                    >
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
                <p>
                  Project type:{" "}
                  <span className="font-semibold ">{project.type}</span>
                </p>
                {project.description}
                {project.tags && (
                  <div className="flex flex-wrap gap-2">
                    <Tags tags={project.tags} parentID={index} />
                  </div>
                )}
              </div>
            </AnimatedButton>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
