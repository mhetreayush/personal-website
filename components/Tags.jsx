import AnimatedButton from "./Buttons/AnimatedButton";
const colors = [
  "bg-blue-300",
  "bg-green-300",
  "bg-violet-300",
  "bg-orange-300",
];
const Tags = ({ tags, parentID }) => {
  return tags.map((tag, idx) => (
    <AnimatedButton
      key={idx}
      rounded="rounded-md pointer-default"
      className={{
        body: "h-fit cursor-default",
        child: `${
          colors[(parentID + idx) % colors.length]
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

export default Tags;
