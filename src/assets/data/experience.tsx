import { ExperienceType } from '@/lib/types';

const experience_data: ExperienceType[] = [
  {
    company: 'Devfolio',
    date: 'September 2023 - July 2024',
    role: 'Frontend Web Developer',
    link: 'https://devfolio.co/',
    child: (
      <ul>
        <li>Added a real-time functionality to the project judging view.</li>
        <li>Built various features from scratch.</li>
        <li>Revamped the UI of various pages.</li>
        <li>Worked on multiple apps.</li>
        <li>Added and improved UI components to the design system library.</li>
      </ul>
    ),
  },
  {
    company: 'Salt.pe',
    date: 'Feb 2023 - May 2023',
    role: 'Frontend Web Developer',
    link: 'https://salt.pe',
    child: (
      <ul>
        <li>Contributed to a google chrome extension.</li>
        <li>Used styled components & TailwindCSS for styling.</li>
        <li>Used MUI for components.</li>
        <li>Implemented Figma designs.</li>
        <li>Collaborated through GitHub.</li>
        <li>Created re-usable components.</li>
      </ul>
    ),
  },
  {
    company: 'PrishaPolicy',
    date: 'Sept 2022 - Dec 2022',
    role: 'Frontend Web Developer',
    link: 'https://prishapolicy.com',
    child: (
      <ul>
        <li>Worked on a monorepo.</li>
        <li>Worked on typescript codebase.</li>
        <li>Used and created reusable components to implement Figma designs.</li>
        <li>Attended daily stand up calls.</li>
        <li>Collaborated through GtiHub.</li>
      </ul>
    ),
  },
];

const Experience = () => null;

export { Experience, experience_data };
