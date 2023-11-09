export type BlogType = {
  link: string;
  title: string;
  folder: string;
  about: JSX.Element;
  date: string;
  tags: string[];
};

export type ProjectType = {
  name: string;
  type: string;
  description: JSX.Element | string;
  demo: string;
  sourceCode: string;
  tags: string[];
};

export type ExperienceType = {
  company: string;
  date: string;
  role: string;
  link: string;
  child: JSX.Element;
  image?: string;
};
