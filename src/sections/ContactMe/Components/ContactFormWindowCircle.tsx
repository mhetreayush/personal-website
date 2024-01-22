const ContactFormWindowCircle = ({
  tailwindCSSColorClass,
}: {
  tailwindCSSColorClass: string;
}) => {
  return <div className={`w-4 h-4 ${tailwindCSSColorClass} rounded-full `} />;
};

export { ContactFormWindowCircle };
