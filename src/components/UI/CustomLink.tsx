export const CustomLink = ({
  children,
  href,
  className = '',
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
}) => {
  return (
    <a
      target="_blank"
      href={href}
      className={`inline-block text-blue-500 underline underline-offset-2 w-fit font-semibold ${className}`}
    >
      {children}
    </a>
  );
};
