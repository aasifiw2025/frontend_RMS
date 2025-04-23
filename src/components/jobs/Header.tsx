import { FaPlus } from "react-icons/fa";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header
      aria-label="jobs-list-header"
      className="flex items-center gap-2  w-full"
    >
      <div className="w-full h-[53px] flex items-start flex-col justify-end">
        <h1 className="text-black text-sm  font-[700] font-inter">Job List</h1>
        <hr className="h-[3px] border-0 w-[120px]  bg-[#EE6C4D] my-1" />
      </div>
      <Button
        hasIcon
        icon={<FaPlus />}
        onClick={() => navigate("/jobs/create-job")}
        title="Create Job"
        className="h-[35px]  bg-[var(--bg-primary)] w-[200px]"
        textClassName="text-sm font-[700] w-full"
      />
    </header>
  );
};

export default Header;
