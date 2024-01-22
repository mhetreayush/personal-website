import { ExternalLinkIcon } from "../AllIcons";
import { ExternalLinkSVGProps } from "./types";

const ExternalLinkSVG = ({
  link,
  text,
  className,
  name = "",
}: ExternalLinkSVGProps) => {
  return (
    <a href={link} target="_blank" className={className} aria-label={name}>
      {text}{" "}
      <span className="inline-block">
        <ExternalLinkIcon />
      </span>
    </a>
  );
};

export { ExternalLinkSVG };
