export type BlogCardProps = {
  title: string;
  link: string;
  folder: string;
  about: string | React.ReactNode;
  tags: string[];
  date: string;
  parentID: number;
};
