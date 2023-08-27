import { slugify } from "@/lib/utils/slugify";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import AnimatedButton from "./Buttons/AnimatedButton";
import Image from "next/image";

const TimelineCard = ({
  date,
  company,
  role,
  children,
  link,
  image,
  type = "Internship",
}) => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work "
      contentStyle={{
        padding: "0px",
        background: "transparent",
        boxShadow: "none",
        WebkitBoxShadow: "none",
      }}
      contentArrowStyle={{
        borderRight: "7px solid  #000000",
        marginLeft: "4px",
      }}
      date={date}
      iconClassName="flex items-center justify-center bg-white border border-black overflow-hidden"
      icon={
        <Image
          alt={`${company} logo`}
          src={`/logos/${image || slugify(company) + ".svg"}`}
          width={30}
          height={30}
        />
      }
    >
      <AnimatedButton
        rounded="rounded-md"
        className={{ child: "bg-white p-2" }}
      >
        <div className="flex flex-col gap-y-1 w-full">
          <h3 className="vertical-timeline-element-title font-semibold text-xl">
            {role}
          </h3>
          <h6 className="vertical-timeline-element-subtitle italic">
            Employment type: <span className="font-semibold">{type}</span>
          </h6>
          <a
            href={link}
            className="vertical-timeline-element-subtitle italic font-bold flex items-center gap-x-2"
            target="_blank"
          >
            {company}{" "}
            <span className="inline-block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
            </span>
          </a>
        </div>
        <p>Worked on:</p>
        {children}
      </AnimatedButton>
    </VerticalTimelineElement>
  );
};

export default TimelineCard;
