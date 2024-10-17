export const SectionHeading = ({ heading, className }: { heading: string; className?: string }) => (
  <h1 className={`font-semibold underline underline-offset-8 mb-1 ${className}`}>{heading}</h1>
);
