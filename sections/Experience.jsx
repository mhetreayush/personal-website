"use client";
import Section from "@/components/Section";
import TimelineCard from "@/components/TimelineCard";
import { experience_data } from "@/public/data/experience";

import { VerticalTimeline } from "react-vertical-timeline-component";

const Experience = () => {
  return (
    <Section title="Experience">
      <VerticalTimeline lineColor="#000000">
        {experience_data.map((experience, idx) => (
          <TimelineCard key={idx} {...experience} />
        ))}
      </VerticalTimeline>
    </Section>
  );
};

export default Experience;
