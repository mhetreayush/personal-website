import { BlogCard } from "@/components/BlogCard";
import { Section } from "@/components/Section";
import { blogs_data } from "@/assets/data/blogs";

const Blogs = () => {
  return (
    <Section title="Blogs">
      <div className="flex flex-col gap-y-6">
        {blogs_data.map((blog, idx) => (
          <BlogCard key={idx} {...blog} parentID={idx} />
        ))}
      </div>
    </Section>
  );
};

export { Blogs };
