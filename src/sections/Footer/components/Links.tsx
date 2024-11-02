import { slugify } from '@/lib/utils/slugify';
import Image from 'next/image';
import { LinkType } from '../types';

const links: LinkType[] = [
  {
    label: 'Github',
    url: 'https://github.com/mhetreayush',
  },
  {
    label: 'StackOverflow',
    url: 'https://stackoverflow.com/users/22811320/ayush-mhetre',
  },
  {
    label: 'Medium',
    url: 'https://medium.com/@mhetreayush1719',
  },
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/ayush-mhetre',
  },
  {
    label: 'Phone',
    url: 'tel:+917020860691',
    hidden: true,
  },
];
export const Links = () => {
  return links.map((link, idx) =>
    link.hidden ? null : (
      <a key={idx} href={link.url} target="_blank" aria-label={link.label}>
        <Image src={`/icons/${slugify(link.label)}.svg`} width={36} height={36} alt={link.label} />
      </a>
    )
  );
};
