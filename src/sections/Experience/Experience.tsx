"use client";
import { experience_data } from "@/assets/data/";
import { Section } from "@/components/Section";
import { TimelineCard } from "@/sections/Experience/Components/TimelineCard";

import { VerticalTimeline } from "react-vertical-timeline-component";

const Experience = () => {
  return (
    <Section title="Experience">
      <div className="flex w-full overflow-x-hidden">
        <VerticalTimeline lineColor="#000000">
          {experience_data.map((experience, idx) => (
            <TimelineCard key={idx} {...experience} />
          ))}
        </VerticalTimeline>
      </div>
    </Section>
  );
};

export { Experience };
