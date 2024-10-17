import { SectionHeading } from '@/components/UI/SectionHeading';

export const CurrentlyLearning = () => (
  <div className="flex flex-col gap-2">
    <div className="flex gap-2 items-center">
      <div className="h-[8px] rounded-full aspect-square bg-green-500 animate-pulse duration-300" />
      <SectionHeading heading="Learning right now:" />
    </div>
    <div className="ml-2">
      <ul>
        <li>NestJS</li>
      </ul>
    </div>
  </div>
);
