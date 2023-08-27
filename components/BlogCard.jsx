import Image from "next/image";
import AnimatedButton from "./Buttons/AnimatedButton";
import ExternalLinkSVG from "./ExternalLinkSVG";

const colors = [
  "bg-blue-300",
  "bg-green-300",
  "bg-violet-300",
  "bg-orange-300",
];

function parseDate(input) {
  const parts = input.split("-");
  return new Date(parts[2], parts[1] - 1, parts[0]);
}

const daysAgo = (date) => {
  const currentDate = new Date();
  const inputDate = parseDate(date);
  const timeDifference = currentDate - inputDate;
  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  return daysDifference;
};
const BlogCard = ({ title, link, folder, about, tags, date }) => {
  return (
    <AnimatedButton rounded="rounded-md" className={{ child: "bg-white " }}>
      <div className="flex flex-col lg:flex-row gap-3 items-center p-4">
        <div className="border border-black rounded-md h-fit md:min-w-[500px] max-h-[300px] max-w-[500px] overflow-clip ">
          <a href={link} target="_blank">
            <Image
              src={`/blog-assets/${folder}/cover.png`}
              alt={title}
              width={500}
              height={300}
              className="object-cover hover:scale-105 transition-all duration-300 ease-in-out"
            />
          </a>
        </div>
        <div className="flex-grow flex flex-col justify-between pb-2 gap-y-4">
          <div className="flex flex-col gap-y-3">
            <div className="flex  w-full gap-x-3">
              <div>
                {" "}
                <p className="md:text-2xl font-semibold ">{title}</p>
              </div>
              <div>
                <ExternalLinkSVG link={link} />
              </div>
            </div>
            <p className="italic text-gray-800">
              Posted {daysAgo(date)} days ago.
            </p>
            <p>{about}</p>
          </div>
          <div className="flex w-full gap-4 flex-wrap">
            {tags?.map((tag, idx) => (
              <AnimatedButton
                key={idx}
                rounded="rounded-md pointer-default"
                className={{
                  body: "h-fit cursor-default",
                  child: `${
                    colors[idx % colors.length]
                  } px-2 p-1 text-black tracking-wide md:text-lg `,
                }}
              >
                <strong>#{tag}</strong>
              </AnimatedButton>
            ))}
          </div>
        </div>
      </div>
    </AnimatedButton>
  );
};

export default BlogCard;
