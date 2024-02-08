import { ProjectType } from "@/lib/types";

export type ProjectCardProps = {
  project: ProjectType;
  index: number;
  hoveredID: number | null;
  setHoveredID: (value: number | null) => void;
};
