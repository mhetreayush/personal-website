"use client";
import { projects_data } from "@/assets/data/";
import { Section } from "@/components/Section";
import { ProjectCard } from "./components";
import { useState } from "react";
import { ProjectCardProps } from "./types";

const Projects = () => {
  const [hoveredID, setHoveredID] =
    useState<ProjectCardProps["hoveredID"]>(null);
  return (
    <Section title="Projects" threshold={0.3}>
      <div className="lg:columns-3 md:columns-2 columns-1 space-y-2 ">
        {projects_data.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            index={index}
            hoveredID={hoveredID}
            setHoveredID={setHoveredID}
          />
        ))}
      </div>
    </Section>
  );
};

export { Projects };
