const Navbar = () => {
  return (
    <nav className="sticky top-0 z-[100] bg-white rounded-b-lg border border-black">
      <div className="container mx-auto  flex w-full  justify-between p-4 py-2 items-center">
        <div className="p-1 border border-black rounded-full bg-bg">
          <div className="flex bg-white border-black border p-2 rounded-full w-[4rem]  h-[4rem] items-center justify-center">
            <h1 className="font-semibold text-2xl">AM</h1>
          </div>
        </div>
        <div>Links</div>
      </div>
    </nav>
  );
};

export default Navbar;
