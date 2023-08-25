const AnimatedButton = ({ children, rounded, className }) => {
  return (
    <div className={`relative flex overflow-visible ${className}`}>
      <div
        className={`overflow-clip relative w-full ${rounded} border z-50 border-black transition-all duration-200 ease-in-out hover:-translate-x-[2px] hover:-translate-y-[2px] `}
      >
        {children}
      </div>
      <div
        className={`absolute left-1 top-1 -z-50  h-full w-full ${rounded} bg-black`}
      />
    </div>
  );
};

export default AnimatedButton;
