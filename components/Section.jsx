const Section = ({ children, title = "Example", className }) => {
  return (
    <div className={`relative pb-2 ${className}`}>
      <div className="cursor-default z-50 w-full p-4 py-2 border-black border border-dashed  bg-white  rounded-t-md ">
        <h1 className="text-2xl font-semibold">{title}</h1>
      </div>
      <div className="-z-0 relative mt-4">{children}</div>
    </div>
  );
};

export default Section;
