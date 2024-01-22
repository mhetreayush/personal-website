export type AnimatedButtonProps = {
  children: React.ReactNode;
  rounded: string;
  className?: {
    body?: string;
    child?: string;
  };
  active?: boolean;
};
