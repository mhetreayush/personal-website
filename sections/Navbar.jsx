const Navbar = () => {
  return (
    <nav className="sticky top-0 z-[100] bg-white rounded-b-lg border border-black cursor-default">
      <div className="container mx-auto  flex w-full  justify-between p-8 py-2 items-center">
        <div className="p-1  border-black border-opacity-50 border-[1px] rounded-lg bg-bg">
          <div className="bg-white  border-black flex  border-opacity-50  border-[1px] rounded-full w-[3rem]  h-[3rem] items-center justify-center">
            <p className="font-semibold text-xl">am</p>
          </div>
        </div>
        <div>Links</div>
      </div>
    </nav>
  );
};

export default Navbar;
