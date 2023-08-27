"use client";
import Section from "@/components/Section";
import TimelineCard from "@/components/TimelineCard";

import { VerticalTimeline } from "react-vertical-timeline-component";

const Experience = () => {
  return (
    <Section title="Experience">
      <VerticalTimeline lineColor="#000000">
        <TimelineCard
          company="Salt.pe"
          date="Feb 2023 - May 2023"
          role="Frontend Web Developer"
          link="https://salt.pe"
        >
          <ul>
            <li>Worked on point</li>
            <li>Worked on point</li>
            <li>Worked on point</li>
          </ul>
        </TimelineCard>
        <TimelineCard
          company="PrishaPolicy"
          date="Sept 2022 - Dec 2022"
          role="Frontend Web Developer"
          link="https://prishapolicy.com"
          image="prishapolicy.jpg"
        >
          <ul>
            <li>Worked on point</li>
            <li>Worked on point</li>
            <li>Worked on point</li>
          </ul>
        </TimelineCard>
      </VerticalTimeline>
    </Section>
  );
};

export default Experience;
