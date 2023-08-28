const AnimatedButton = ({ children, rounded, className, active }) => {
  return (
    <div className={`relative flex ${className?.body && className.body}`}>
      <div
        className={`relative w-full ${
          className?.child && className.child
        }  ${rounded}  z-10 border-black border transition-all duration-200 ease-in-out hover:-translate-x-[2px] hover:-translate-y-[2px] focus-within:-translate-x-[2px] focus-within:-translate-y-[2px] ${
          active && "!-translate-x-[2px] !-translate-y-[2px]"
        }`}
      >
        {children}
      </div>
      <div
        className={`absolute left-1 top-1 -z-0  h-full w-full ${rounded} bg-black`}
      />
    </div>
  );
};

export default AnimatedButton;
