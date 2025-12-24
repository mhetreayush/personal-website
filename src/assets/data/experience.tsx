import { CustomLink } from '@/components/UI/CustomLink';
import { ExperienceType } from '@/lib/types';

const experience_data: ExperienceType[] = [
  {
    company: 'Superjoin',
    date: 'July 2025 - Present',
    role: 'Fullstack Developer (Founding engineer)',
    link: 'https://superjoin.ai/',
    type: 'Full-time',
    child: (
      <div>
        <b className="underline">Product contributions:</b>
        <ul>
          <li>
            Setup a Turborepo monorepo (aiming to share typescript types, utils, and UI) for the new product with apps
            and packages, created a UI package, setup a custom design system using Shadcn UI and migrated old frontend
            code from Antd (component library) to our UI internal package.
          </li>
          <li>Setup linters and rules for code conventions.</li>
          <li>Setup Storybook and Chromatic UI for frontend documentation and visual testing.</li>
          <li>
            Created a feature-level paywall system on frontend from scratch which has a 2 line setup to paywall any
            feature.
          </li>
          <li>
            Created an end-to-end pricing flow in the app which exposed all the pricing plans and their entire offerings
            focusing on making the users realise what they would miss out on if they don't subscribe.
          </li>
          <li>
            Setup a system for Slack alerts when the features under my ownership were used, analysed them using Posthog,
            and improved them. Later, made this a standard process for all the new features in the product.
          </li>
        </ul>
        <b className="underline">Other contributions:</b>
        <ul>
          <li>
            Created a pdf answering system as an internal exercise, this was not just passing the pdf to the llm, in
            those 2 days I studied about RAG methods, I knew about semantic search but wanted to dive deep, learnt about
            BM25, re-ranking, context enhancing.
          </li>
          <li>Went on customer calls, brainstormed and solved things for them on and off calls.</li>
          <li>
            Released almost 3-4 times a week (except when I owned and spearheaded big projects end-to-end, in which
            case, the release took a week or two)
          </li>
          <li>Worked in a 6-8 people company (with 3 engineers, including myself)</li>
          <li>
            Did a lot of PR Reviews across Frontend, Backend (Javascript / Typescript repos) and a Python Service.
          </li>
          <li>Refactored frontend, and backend and database schemas.</li>
        </ul>
      </div>
    ),
  },
  {
    company: 'Superjoin',
    date: 'September 2024 - July 2025',
    role: 'Fullstack Developer Internship',
    link: 'https://superjoin.ai/',
    child: (
      <ul>
        <li>
          Created <CustomLink href="https://app.superjoin.ai">app.superjoin.ai</CustomLink>. for our CTA entry-points
          after spending 3 days just analysing user metrics and behaviour on Mixpanel and Posthog, respectively, also
          got 2 of my friends on the call and made them go through the onboarding flow to see what was wrong and fixed
          it. Later extended app.superjoin.ai for auth-redirects for better UI and cookie drops for customer tracking.
        </li>
        <li>Hacked around my ways to implement pro features for free in the third-party products that we use.</li>

        <li>Proposed and implemented Sentry across Frontend, Backend (Node.js and Python services).</li>
        <li>Proposed and implemented React Query.</li>
      </ul>
    ),
  },
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
