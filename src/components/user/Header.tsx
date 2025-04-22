const Header = () => {
  return (
    <header
      aria-label="header"
      className="flex items-end justify-between w-full mt-4"
    >
      <div>
        <h1 className="text-black text-sm  font-[700] font-inter">
          Users List
        </h1>
        <hr className="h-[3px] border-0 w-[179px] bg-[#EE6C4D] my-1" />
      </div>
    </header>
  );
};

export default Header;
