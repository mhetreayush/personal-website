import { AnimatedButton } from '@/components/AnimatedButton';
import Image, { StaticImageData } from 'next/image';
import { SkillType } from '../types';
import { slugify } from '@/lib/utils/slugify';
import htmlImage from '../../../../public/icons/html.svg';
import cssImage from '../../../../public/icons/css.svg';
import javascriptImage from '../../../../public/icons/javascript.svg';
import typescriptImage from '../../../../public/icons/typescript.svg';
import reactjsImage from '../../../../public/icons/reactjs.svg';
import nextjsImage from '../../../../public/icons/nextjs.svg';
import tailwindcssImage from '../../../../public/icons/tailwindcss.svg';
import styledcomponentsImage from '../../../../public/icons/styledcomponents.svg';
import bootstrapImage from '../../../../public/icons/bootstrap.svg';
import expressjsImage from '../../../../public/icons/expressjs.svg';
import firebaseImage from '../../../../public/icons/firebase.svg';
import graphqlImage from '../../../../public/icons/graphql.svg';
import mongodbImage from '../../../../public/icons/mongodb.svg';
import socketioImage from '../../../../public/icons/socketio.svg';
import dockerImage from '../../../../public/icons/docker.svg';
import travisciImage from '../../../../public/icons/travis-ci.svg';
import awsebsImage from '../../../../public/icons/aws.svg';
import postgressqlImage from '../../../../public/icons/postgresql.svg';

const skillsLogos: {
  [key: string]: StaticImageData;
} = {
  htmlImage,
  cssImage,
  javascriptImage,
  typescriptImage,
  reactjsImage,
  nextjsImage,
  tailwindcssImage,
  styledcomponentsImage,
  bootstrapImage,
  expressjsImage,
  firebaseImage,
  graphqlImage,
  mongodbImage,
  socketioImage,
  dockerImage,
  awsebsImage,
  ['docker-composeImage']: dockerImage,
  travisciImage,
  postgressqlImage,
};

export const SkillsCard = ({ skill }: { skill: SkillType }) => {
  return (
    <AnimatedButton
      key={skill}
      rounded={'rounded-md'}
      className={{
        body: 'md:w-fit w-full odd:last:col-span-2 col-span-2 !h-max sm:col-span-1',
      }}
    >
      <div className="flex items-center justify-center bg-white hover:bg-bg p-2 md:px-4 rounded-md gap-x-2 md:gap-x-4">
        <Image
          alt={skill}
          className="rounded-full border border-black p-1"
          src={skillsLogos[slugify(skill) + 'Image']}
          width={30}
          height={30}
        />
        <strong className="!font-semibold md:text-xl break-all">{skill}</strong>
      </div>
    </AnimatedButton>
  );
};
