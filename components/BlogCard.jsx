import Image from "next/image";
import AnimatedButton from "./Buttons/AnimatedButton";
import ExternalLinkSVG from "./ExternalLinkSVG";
import Tags from "./Tags";
import { slugify } from "@/lib/utils/slugify";

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
const BlogCard = ({ title, link, folder, about, tags, date, parentID }) => {
  return (
    <AnimatedButton rounded="rounded-md" className={{ child: "bg-white " }}>
      <div className="flex flex-col lg:flex-row gap-3 items-center p-4">
        <div className="border border-black rounded-md h-fit md:min-w-[500px] max-h-[300px] max-w-[500px] overflow-clip ">
          <a
            href={link}
            target="_blank"
            aria-label={"Blog: " + slugify(title, "-")}
          >
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
                <ExternalLinkSVG
                  link={link}
                  name={"Blog: " + slugify(title, "-")}
                />
              </div>
            </div>
            <p className="italic text-gray-800">
              Posted {daysAgo(date)} days ago.
            </p>
            {about}
          </div>
          <div className="flex w-full gap-4 flex-wrap">
            {tags && <Tags tags={tags} parentID={parentID} />}
          </div>
        </div>
      </div>
    </AnimatedButton>
  );
};

export default BlogCard;
