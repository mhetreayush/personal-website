import { BlogType } from '@/lib/types';

const blogs_data: BlogType[] = [
  {
    hidden: true,
    link: 'https://medium.com/@mhetreayush1719/are-you-sure-about-your-accordions-898e1b65b42',
    title: 'You might be building accordions wrong!',
    folder: 'accordions',
    about: (
      <ul>
        <li>What are accordions?</li>
        <li>How it can affect your SEO.</li>
        <li>
          <code>
            {'<summary>'} & {'<details>'}
          </code>{' '}
          tag in HTML
        </li>
      </ul>
    ),
    date: '23-03-2023',
    tags: [
      'ReactJS',
      'HTML_tags',
      'HTML',
      'JavaScript',
      'Accordions',
      'Web_crawlers',
      'Conditional_rendering',
      'MDN',
      'Summary',
      'Details',
    ],
  },
  {
    link: 'https://medium.com/@mhetreayush1719/did-you-know-about-discriminated-unions-in-typescript-da8bccd7e69f',
    folder: 'discriminated_unions',
    title: 'Did you know about discriminated unions in TypeScript?',
    about: (
      <ul>
        <li>What are discriminated unions?</li>
        <li>How to use them?</li>
        <li>What are the benefits of using them?</li>
      </ul>
    ),
    date: '29-12-2023',
    tags: ['TypeScript', 'JavaScript', 'Discriminated_unions', 'Union_types', 'Clean_code', 'Type_safety'],
  },
  {
    link: 'https://medium.com/@mhetreayush1719/top-javascript-questions-asked-in-an-interview-part-1-2e4d6ee63127',
    folder: 'js_solutions',
    title: 'Top javascript questions asked in an interview. — Part 1',
    about: (
      <ul>
        <li>Top JS questions asked in interview.</li>
        <li>Solutions to the questions.</li>
        <li>Github Repository with code and tests</li>
      </ul>
    ),
    date: '17-08-2024',
    tags: ['TypeScript', 'JavaScript', 'Frontend', 'Interview', 'Interview_Questions'],
  },
  {
    link: 'https://medium.com/@mhetreayush1719/top-javascript-questions-asked-in-an-interview-part-2-eb8c572a0959',
    folder: 'js_solutions',
    title: 'Top javascript questions asked in an interview. — Part 2',
    about: (
      <ul>
        <li>Top JS questions asked in interview.</li>
        <li>Solutions to the questions.</li>
        <li>Github Repository with code and tests</li>
      </ul>
    ),
    date: '17-08-2024',
    tags: ['TypeScript', 'JavaScript', 'Frontend', 'Interview', 'Interview_Questions'],
  },
];

const Blogs = () => null;

export { Blogs, blogs_data };
