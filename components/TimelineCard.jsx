import { slugify } from "@/lib/utils/slugify";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import AnimatedButton from "./Buttons/AnimatedButton";
import Image from "next/image";
import ExternalLinkSVG from "./ExternalLinkSVG";

const TimelineCard = ({
  date,
  company,
  role,
  child,
  link,
  image,
  type = "Internship",
}) => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work "
      dateClassName="!opacity-100 text-black !font-semibold !text-lg !w-fit bg-white !whitespace-nowrap !h-fit !rounded-lg !m-0 !py-1 !px-2 !mt-3 md:!mt-2"
      intersectionObserverProps={{
        threshold: 0.5,
      }}
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
      iconClassName="flex items-center justify-center bg-white border border-black overflow-hidden "
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
          <h6 className="vertical-timeline-element-subtitle italic ">
            Employment type: <span className="font-semibold">{type}</span>
          </h6>

          <ExternalLinkSVG
            className={
              "vertical-timeline-element-subtitle italic font-bold flex items-center gap-x-2 "
            }
            link={link}
            text={company}
          />
        </div>
        <p>Highlights:</p>
        {child}
      </AnimatedButton>
    </VerticalTimelineElement>
  );
};

export default TimelineCard;
