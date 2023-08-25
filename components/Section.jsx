const Section = ({ children, title = "Example" }) => {
  return (
    <div className="relative">
      <div className="cursor-default sticky top-0 z-50 w-full p-4 border-black border rounded-md bg-white ">
        <h1 className="text-4xl font-semibold">{title}</h1>
      </div>
      <div className="-z-0 relative mt-4">{children}</div>
    </div>
  );
};

export default Section;
