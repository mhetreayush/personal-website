const Section = ({ children, title = "Example", className }) => {
  return (
    <div className={`relative  ${className}`}>
      <div className="cursor-default z-50 w-full p-4 py-2 border-black border border-dashed  bg-white  rounded-t-md ">
        <h1 className="text-2xl font-semibold">{title}</h1>
      </div>
      <div className="-z-0 relative py-4 px-4  border border-black border-t-0 bg-purple-400 rounded-b-md">
        {children}
      </div>
    </div>
  );
};

export default Section;
