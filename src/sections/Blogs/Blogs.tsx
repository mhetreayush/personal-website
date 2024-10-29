import { BlogCard } from './components';
import { Section } from '@/components/Section';
import { blogs_data } from '@/assets/data';

const Blogs = () => {
  return (
    <Section title="Blogs" threshold={0.3}>
      <div className="flex flex-col gap-y-6">
        {blogs_data
          .filter(blog => !blog.hidden)
          .map((blog, idx) => (
            <BlogCard key={idx} {...blog} parentID={idx} />
          ))}
      </div>
    </Section>
  );
};

export { Blogs };
