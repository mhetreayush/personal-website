import Image from "next/image";
import { AnimatedButton } from "../../../components/AnimatedButton/AnimatedButton";
import { ExternalLinkSVG } from "../../../components/ExternalLinkSVG/ExternalLinkSVG";
import { Tags } from "../../../components/Tags/Tags";
import { slugify } from "@/lib/utils/slugify";
import { PostedAgo } from "./PostedAgo";

type BlogCardProps = {
  title: string;
  link: string;
  folder: string;
  about: string | React.ReactNode;
  tags: string[];
  date: string;
  parentID: number;
};

const BlogCard = ({
  title,
  link,
  folder,
  about,
  tags,
  date,
  parentID,
}: BlogCardProps) => {
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
            <PostedAgo date={date} />
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

export { BlogCard };
