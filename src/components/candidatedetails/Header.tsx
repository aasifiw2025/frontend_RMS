import Button from "../ui/Button";
import { FaArrowLeft, FaPlus } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header aria-label="header" className="flex items-center gap-2  w-full">
      <Link
        to={"/profiles/candidate"}
        className="flex justify-center items-center bg-white shadow-md rounded-md h-[35px] w-[40px] mt-2"
      >
        <FaArrowLeft />
      </Link>
      <div className="w-full h-[53px] flex items-start flex-col justify-end">
        <h1 className="text-black text-sm  font-[700] font-inter">
          Candidate Details
        </h1>
        <hr className="h-[3px] border-0 w-[120px]  bg-[#EE6C4D] my-1" />
      </div>
      <Button
        hasIcon
        icon={<FaPlus />}
        onClick={() => navigate("/profiles/create-candidate")}
        title="Create Candidate"
        className="h-[35px]  bg-[var(--bg-primary)] w-[300px]"
        textClassName="text-sm font-[700] w-full"
      />
    </header>
  );
};

export default Header;
