import { ExternalLinkIcon } from "../AllIcons";

type ExternalLinkSVGProps = {
  link: string;
  text?: string;
  className?: string;
  name?: string;
};

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
