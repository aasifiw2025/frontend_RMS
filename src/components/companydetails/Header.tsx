import { FaArrowLeft, FaPlus } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Button from "../ui/Button";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header
      aria-label="header"
      className="flex flex-col md:flex-row md:items-center gap-2  w-full"
    >
      <div className="flex items-center gap-2 md:gap-4">
        <Link
          to={"/profiles/company"}
          className="flex justify-center items-center bg-white shadow-md rounded-md h-[35px] w-[40px] mt-2"
        >
          <FaArrowLeft />
        </Link>
        <div className="w-full h-[53px] flex items-start flex-col justify-end">
          <h1 className="text-black text-sm  font-[700] font-inter">
            Company Details
          </h1>
          <hr className="h-[3px] border-0 w-[120px]  bg-[#EE6C4D] my-1" />
        </div>
      </div>
      <Button
        hasIcon
        icon={<FaPlus />}
        onClick={() => navigate("/profiles/create-company")}
        title="Create Company"
        className="h-[35px]  bg-[var(--bg-primary)] w-[300px]"
        textClassName="text-sm font-[700] w-full"
      />
    </header>
  );
};

export default Header;
