const Header = () => {
  return (
    <header
      aria-label="job-role-header"
      className="flex items-center gap-2  w-full"
    >
      <div className="w-full h-[53px] flex items-start flex-col justify-end">
        <h1 className="text-black text-sm  font-[700] font-inter">
          Job Role List
        </h1>
        <hr className="h-[3px] border-0 w-[120px]  bg-[#EE6C4D] my-1" />
      </div>
    </header>
  );
};

export default Header;
