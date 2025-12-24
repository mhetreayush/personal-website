import { CustomLink } from '@/components/UI/CustomLink';
import { SectionHeading } from '@/components/UI/SectionHeading';

export const WhoAmI = () => (
  <div>
    <SectionHeading heading="Who am I?" />
    <p>
      I am a Full Stack Web Developer at <CustomLink href="https://superjoin.ai">Superjoin</CustomLink>, where I am
      proposing new solutions and features, owning and shipping them end-to-end, debugging critical issues, contributing
      in setting up systems and processes around code quality and conventions, going on customer calls and getting their
      issues solved, with a bunch of other stuff. If you wish to know more, I'm doing a lot of things, will discuss over
      a <CustomLink href="https://cal.com/mhetre-ayush/lets-chat">call</CustomLink>.
    </p>
  </div>
);
