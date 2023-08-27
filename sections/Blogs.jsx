import BlogCard from "@/components/BlogCard";
import Section from "@/components/Section";
import { blogs_data } from "@/public/data/blogs";

const blogs = [
  {
    link: "https://medium.com/@mhetreayush1719/are-you-sure-about-your-accordions-898e1b65b42",
    title: "You might be building accordions wrong!",
    folder: "accordions",
    about: "A blog about accordions",
    date: "23-03-2023",
    tags: [
      "ReactJS",
      "HTML_tags",
      "HTML",
      "Accordions",
      "Web_crawlers",
      "Conditional_rendering",
      "MDN",
      "Summary",
      "Details",
    ],
  },
];

const Blogs = () => {
  return (
    <Section title="Blogs">
      <div className="flex flex-col gap-y-6">
        {blogs_data.map((blog, idx) => (
          <BlogCard key={idx} {...blog} />
        ))}
      </div>
    </Section>
  );
};

export default Blogs;
