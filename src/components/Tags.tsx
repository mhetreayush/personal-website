import { AnimatedButton } from "./AnimatedButton";
const colors = [
  "bg-blue-300",
  "bg-green-300",
  "bg-violet-300",
  "bg-orange-300",
];

type TagsProps = {
  tags: string[];
  parentID: number | string;
};
const Tags = ({ tags, parentID }: TagsProps) => {
  return tags.map((tag, idx) => (
    <AnimatedButton
      key={idx}
      rounded="rounded-md pointer-default"
      className={{
        body: "h-fit cursor-default",
        child: `${
          colors[(Number(parentID) + idx) % colors.length]
        } py-1 px-2 text-black tracking-wide `,
      }}
    >
      <strong className="!font-semibold">
        <span className="font-mono">#</span>
        {tag}
      </strong>
    </AnimatedButton>
  ));
};

export { Tags };
