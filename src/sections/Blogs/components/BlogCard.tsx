import Image, { StaticImageData } from 'next/image';
import { AnimatedButton } from '@/components/AnimatedButton';
import { ExternalLinkSVG } from '@/components/ExternalLinkSVG';
import { Tags } from '@/components/Tags/Tags';
import { slugify } from '@/lib/utils/slugify';
import { BlogCardProps } from '../types';
import { PostedAgo } from './PostedAgo';
import accordionsCover from '../../../../public/blog-assets/accordions/cover.png';
import discriminatedUnions from '../../../../public/blog-assets/discriminated_unions/cover.png';
import jsSolutions from '../../../../public/blog-assets/js_solutions/cover.png';
const blogImages: {
  [key: string]: StaticImageData;
} = {
  accordions: accordionsCover,
  discriminated_unions: discriminatedUnions,
  js_solutions: jsSolutions,
};

const BlogCard = ({ title, link, folder, about, tags, date, parentID }: BlogCardProps) => {
  return (
    <AnimatedButton rounded="rounded-md" className={{ child: 'bg-white ' }}>
      <div className="flex flex-col lg:flex-row gap-3 items-center p-4">
        <div className="border border-black rounded-md h-fit md:min-w-[500px] max-h-[300px] max-w-[500px] overflow-clip ">
          <a href={link} target="_blank" aria-label={'Blog: ' + slugify(title, '-')}>
            <Image
              src={blogImages[folder]}
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
                {' '}
                <p className="md:text-2xl font-semibold ">{title}</p>
              </div>
              <div>
                <ExternalLinkSVG link={link} name={'Blog: ' + slugify(title, '-')} />
              </div>
            </div>
            <PostedAgo date={date} />
            {about}
          </div>
          <div className="flex w-full gap-4 flex-wrap">{tags && <Tags tags={tags} parentID={parentID} />}</div>
        </div>
      </div>
    </AnimatedButton>
  );
};

export { BlogCard };
