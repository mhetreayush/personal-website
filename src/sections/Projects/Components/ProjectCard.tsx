"use client";
import { ProjectType } from "@/lib/types";
import { SourceCodeIcon } from "@/components/AllIcons";
import { AnimatedButton } from "@/components/AnimatedButton";
import { ExternalLinkSVG } from "@/components/ExternalLinkSVG";
import { Tags } from "@/components/Tags";
import { slugify } from "@/lib/utils/slugify";
import { useState } from "react";

const ProjectCard = ({
  project,
  index,
}: {
  project: ProjectType;
  index: number;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredID, setHoveredID] = useState<null | number>(null);
  return (
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
                <SourceCodeIcon />
              </a>
            </div>
          </div>
          <p>
            Project type: <span className="font-semibold ">{project.type}</span>
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
  );
};

export { ProjectCard };
