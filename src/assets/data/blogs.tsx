import { BlogType } from "./types";

export const blogs_data: BlogType[] = [
  {
    link: "https://medium.com/@mhetreayush1719/are-you-sure-about-your-accordions-898e1b65b42",
    title: "You might be building accordions wrong!",
    folder: "accordions",
    about: (
      <ul>
        <li>What are accordions?</li>
        <li>How it can affect your SEO.</li>
        <li>
          <code>
            {"<summary>"} & {"<details>"}
          </code>{" "}
          tag in HTML
        </li>
      </ul>
    ),
    date: "23-03-2023",
    tags: [
      "ReactJS",
      "HTML_tags",
      "HTML",
      "JavaScript",
      "Accordions",
      "Web_crawlers",
      "Conditional_rendering",
      "MDN",
      "Summary",
      "Details",
    ],
  },
];

const Blogs = () => null;

export default Blogs;
