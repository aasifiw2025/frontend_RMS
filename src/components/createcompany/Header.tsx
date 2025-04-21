import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <section aria-label="header" className="flex items-center gap-2  w-full">
      <Link
        to={"/profiles/company"}
        className="flex justify-center items-center bg-white shadow-md rounded-md h-[35px] w-[40px] mt-2"
      >
        <FaArrowLeft />
      </Link>
      <div className="w-full h-[53px] flex items-start flex-col justify-end">
        <h1 className="text-black text-sm  font-[700] font-inter">
          Create Company
        </h1>
        <hr className="h-[3px] border-0 w-full  bg-[#EE6C4D] my-1" />
      </div>
    </section>
  );
};

export default Header;
